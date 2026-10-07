/**
 * ============================================================================
 * PRISTINE EFFICIENCY x MVP DADDY - GOOGLE SHEETS SYNC SCRIPT
 * ============================================================================
 * 
 * HOW TO SET THIS UP (Takes 60 seconds):
 * 1. Open Google Sheets (create a new blank sheet called "Pristine Efficiency Onboarding").
 * 2. In the top menu, click Extensions -> Apps Script.
 * 3. Delete any default code in Code.gs, paste this ENTIRE code block, and press Save (Ctrl+S).
 * 4. Click the blue "Deploy" button (top right) -> "New deployment".
 * 5. Under "Select type", choose "Web app".
 * 6. Set Description: "Pristine Efficiency Sync".
 * 7. Set "Execute as": "Me" (your email).
 * 8. Set "Who has access": "Anyone" (IMPORTANT: this allows the questionnaire to submit without login).
 * 9. Click "Deploy", authorize permissions when prompted.
 * 10. Copy the "Web app URL" and paste it into the questionnaire's Sheet Settings!
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Responses");
    
    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet("Responses");
    }

    var rawData = e.postData.contents;
    var data;
    try {
      data = JSON.parse(rawData);
    } catch (err) {
      // In case data came as urlencoded form data
      data = e.parameter;
    }

    // Set up standard headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      var defaultHeaders = [
        "Timestamp",
        "Client / Responder",
        "Brand Words",
        "Visual Direction",
        "Color Palettes",
        "Colors to Avoid & Notes",
        "Admired Websites",
        "Lead Homepage Numbers",
        "Scope (What you do / don't do)",
        "Customer Frustrations",
        "5-Day Trial Details",
        "Website Sections",
        "Demo Booking Method",
        "Notification Emails",
        "Contact Phone",
        "Raw JSON Data"
      ];
      
      sheet.appendRow(defaultHeaders);
      
      // Style headers
      var headerRange = sheet.getRange(1, 1, 1, defaultHeaders.length);
      headerRange.setBackground("#0F172A");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setFontFamily("DM Sans");
      sheet.setFrozenRows(1);
    }

    // Prepare row values
    var timestamp = new Date();
    var row = [
      timestamp,
      data.clientName || "Pristine Client",
      data["Brand Words"] || data["Q1"] || "",
      data["Visual Direction"] || data["Q2"] || "",
      data["Color Palettes"] || data["Q3"] || "",
      data["Colors to Avoid & Notes"] || data["Q4"] || "",
      data["Admired Websites"] || data["Q5"] || "",
      data["Lead Homepage Numbers"] || data["Q6"] || "",
      data["Scope (What you do / don't do)"] || data["Q7"] || "",
      data["Customer Frustrations"] || data["Q8"] || "",
      data["5-Day Trial Details"] || data["Q9"] || "",
      data["Website Sections"] || data["Q10"] || "",
      data["Demo Booking Method"] || data["Q11"] || "",
      data["Notification Emails"] || data["Q12"] || "",
      data["Contact Phone"] || data["Q13"] || "",
      JSON.stringify(data)
    ];

    sheet.appendRow(row);

    // Format new row
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");
    sheet.autoResizeColumns(1, Math.min(15, sheet.getLastColumn()));

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Response successfully recorded in Google Sheets",
      rowNumber: lastRow
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "Pristine Efficiency Questionnaire Sync Endpoint",
    timestamp: new Date()
  })).setMimeType(ContentService.MimeType.JSON);
}
