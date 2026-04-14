import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function addToSheet(data: any) {
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:I",
        valueInputOption: "USER_ENTERED",
        requestBody: {
            values: [[
                data.name,
                data.phone,
                data.email,
                data.projectType,
                Array.isArray(data.product) ? data.product.join(", ") : data.product,
                data.budget,
                data.location,
                data.message,
                new Date().toLocaleString(),
            ]],
        },
    });
}