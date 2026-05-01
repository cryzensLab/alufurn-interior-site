import { google } from "googleapis";

// ✅ SAFE AUTH INIT (won’t crash server)
let sheets: any = null;

try {
  if (process.env.GOOGLE_CREDENTIALS_BASE64) {
    const decoded = Buffer.from(
      process.env.GOOGLE_CREDENTIALS_BASE64,
      "base64"
    ).toString("utf-8");

    const credentials = JSON.parse(decoded);

    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    sheets = google.sheets({ version: "v4", auth });

    console.log("✅ Google Sheets initialized");
  } else {
    console.log("⚠️ No Google credentials found");
  }
} catch (err) {
  console.error("❌ Google init error:", err);
}

// ✅ MAIN FUNCTION (SAFE)
export async function addToSheet(data: any) {
  try {
    if (!sheets) {
      console.log("⚠️ Skipping Google Sheets (not initialized)");
      return;
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:M",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          data.name,
          data.phone,
          data.email || "N/A",
          data.projectType || "Experience Center Visit",
          Array.isArray(data.product)
            ? data.product.join(", ")
            : (data.product || "Visit Inquiry"),
          data.budget || "N/A",
          data.location || data.city || "N/A",
          data.message || "Booked through Experience Center page",
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          data.scheduleDate || "N/A",
          data.uploadedFile || "N/A",
          data.quantity || "N/A",
          data.status || "New",
        ]],
      },
    });

    console.log("✅ Data added to Google Sheet");

  } catch (err) {
    console.error("❌ Google Sheets Error:", err);
  }
}
