import { NextResponse, NextRequest } from "next/server";

/**
 * API Route: /api/quote
 * 
 * Handles multi-step quote form submissions with anti-spam measures.
 */

// Telegram Bot Integration Type
type TelegramData = {
    name: string;
    phone: string;
    email: string;
    projectType: string;
    product: string;
    location: string;
    message?: string;
    budget?: string;
    timeline?: string;
};

// Telegram Function
const sendTelegramMessage = async (data: TelegramData) => {
    try {
        const text = `
🔥 *New Premium Inquiry* 🔥

👤 *Contact Details:*
- Name: ${data.name}
- Phone: ${data.phone}
- Email: ${data.email}

🏗️ *Project Info:*
- Type: ${data.projectType}
- Products: ${data.product}
- Location: ${data.location}
- Budget: ${data.budget || "Not specified"}
- Timeline: ${data.timeline || "Not specified"}

📝 *User Message:*
${data.message || "No additional message."}

🕒 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
`;
        await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "Markdown",
                }),
            }
        );
    } catch (err) {
        console.error("Telegram Error:", err);
    }
};

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Incoming Quote Data:", body);
        const {
            name,
            phone,
            email,
            projectType,
            product,
            budget,
            location,
            timeline,
            message,
            honeypot, // Hidden field for bot detection
            startTime // Timestamp to detect fast submissions
        } = body;

        // 1. Honeypot check
        if (honeypot) {
            return NextResponse.json({ error: "Spam detected." }, { status: 400 });
        }

        // 2. Submission speed check (reject if under 3 seconds)
        const currentTime = Date.now();
        if (currentTime - startTime < 3000) {
            return NextResponse.json({ error: "Too fast. Are you a bot?" }, { status: 400 });
        }

        // 3. Validation
        if (!name || !phone || !email || !projectType || !location) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        // 4. Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
        }

        // 5. Indian phone validation (basic)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
            return NextResponse.json({ error: "Invalid Indian phone number." }, { status: 400 });
        }

        // 6. Save to Google Sheets
        try {
            const { addToSheet } = await import("@/lib/googleSheets");
            await addToSheet(body);
        } catch (sheetError) {
            console.error("Failed to save to Google Sheets:", sheetError);
        }

        // 7. Send Telegram Notification
        await sendTelegramMessage({
            name,
            phone,
            email,
            projectType,
            product: Array.isArray(product) ? product.join(", ") : String(product),
            location,
            message,
            budget,
            timeline
        });

        // Simulation: Save to database or send email
        console.log("New Quote Request Received:", {
            name,
            phone,
            email,
            projectType,
            product,
            budget,
            location,
            timeline,
            message,
            userAgent: req.headers.get("user-agent")
        });


        // Delay for realism
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json({
            success: true,
            message: "Quote request submitted successfully."
        });

    } catch (error) {
        console.error("Quote API Error:", error);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}