# Pristine Efficiency · Onboarding Questionnaire (by MVP Daddy)

> 🌐 **Live Questionnaire Link:** [https://issacops.github.io/pristine-efficiency-onboarding/](https://issacops.github.io/pristine-efficiency-onboarding/)  
> 📊 **Connected Google Sheet Webhook:** Active & verified

A sleek, interactive onboarding and strategy questionnaire designed for **Pristine Efficiency** to gather design, copy, and operational requirements from US towing and repossession operators.

---

## 🚀 Key Improvements Made

1. **Upgraded Aesthetics & UI:**
   - **Typography:** Upgraded to Google's **Bricolage Grotesque** (display headlines) and **Plus Jakarta Sans** (crisp UI body).
   - **Modern Space Palette:** Deep graphite `#070913` with dynamic radial ambient mesh, high-contrast glow borders, and fluid glassmorphic card elements.
   - **Interactive Polish:** Subtle button elevations, card check indicators, micro-animations, and celebratory confetti upon completion.
   - **Responsive Design:** Polished for mobile devices, tablets, and wide monitors.

2. **Direct Google Sheets Connection:**
   - Automatically synchronizes all 13 question answers directly into your Google Sheet when the user clicks **Complete & Submit**.
   - Includes full offline fallback: responses are cached in browser `localStorage`, with 1-click **Export CSV Backup**.
   - Live visual status indicator shows real-time synchronization with the sheet.

3. **Updated Completion Screen:**
   - Removed the manual *"Send your answers to the MVP Daddy team"* text.
   - Replaced with an automated confirmation:
     > **"All set, Aryan!"**
     > *"Your answers are synchronized with the MVP Daddy team. We have everything we need and are already underway crafting the 3 visual directions and copy systems."*

---

## 📋 60-Second Google Sheets Setup Guide

To link your Google Sheet to this questionnaire:

### Step 1: Create the Google Sheet
1. Open [Google Sheets](https://sheets.new) and name the spreadsheet: **"Pristine Efficiency - Client Onboarding"**.
2. In the top menu, navigate to **Extensions → Apps Script**.

### Step 2: Paste the Sync Script
1. Delete any existing code in the Apps Script editor.
2. Open [`google-apps-script.js`](./google-apps-script.js) from this folder, copy all code, and paste it into the editor.
3. Click **Save** (disk icon or `Ctrl + S`).

### Step 3: Deploy as Web App
1. Click the blue **Deploy** button (top right) → **New deployment**.
2. Select type: **Web app** (gear icon).
3. Configuration:
   - **Description:** `Pristine Intake Webhook`
   - **Execute as:** `Me` (your Google email)
   - **Who has access:** `Anyone` *(Crucial: allows the browser questionnaire to post data without requiring the client to sign in to Google)*
4. Click **Deploy** and grant permissions if prompted by Google.
5. Copy the generated **Web app URL** (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

---

## 🔗 Active Deployed Webhook

- **Deployment ID:** `AKfycbyA_66tvASfIJYYaJ7fG8uKCHpnNjljGgNJR_sgWrsyiymdj_8GrGURuH61vhUCjRbn`
- **Web App URL:** `https://script.google.com/macros/s/AKfycbyA_66tvASfIJYYaJ7fG8uKCHpnNjljGgNJR_sgWrsyiymdj_8GrGURuH61vhUCjRbn/exec`
- **Status:** **LIVE & VERIFIED** (Responses are automatically routed to your Google Sheet)
