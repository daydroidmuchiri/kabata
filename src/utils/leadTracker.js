// Replace this with the actual deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbx_placeholder_deployment_id/exec';

/**
 * Silently sends lead data to Google Sheets.
 * @param {Object} leadData - The lead information to log.
 * @param {string} leadData.name - User's name (optional).
 * @param {string} leadData.phone - User's phone (optional).
 * @param {string} leadData.truck - Truck model of interest (optional).
 * @param {string} leadData.source - Component source of the click (e.g., "Navbar", "Hero").
 * @param {string} leadData.message - The initial message or intent.
 */
export const sendLeadToGoogleSheets = async (leadData) => {
    const payload = {
        ...leadData,
        timestamp: new Date().toISOString(),
        page: window.location.pathname,
    };

    try {
        // Mode 'no-cors' is used to allow the request to send without reading the response
        // (Google Sheets Web Apps usually don't support CORS preflight for 'application/json')
        // Alternatively, we use 'no-cors' with form data, or 'text/plain' payload to avoid CORS preflight.
        // For simplicity and reliability with Apps Script, 'text/plain' body with standard fetch often works best
        // to avoid complex CORS issues while still sending data.

        await fetch(GOOGLE_SHEETS_ENDPOINT, {
            method: 'POST',
            mode: 'no-cors', // Important for silent logging to Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        console.log('Lead logged:', payload);
    } catch (error) {
        // Silent fail - never block the user flow
        console.error('Lead logging failed (silent):', error);
    }
};
