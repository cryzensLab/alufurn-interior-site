import { google } from "googleapis";


const credentials = JSON.parse(
  Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64!, "base64").toString("utf-8")
);


const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function addToSheet(data: any) {
  const sheets = google.sheets({ version: "v4", auth });

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
}
