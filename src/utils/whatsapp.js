// Replace this with the actual sales number
export const WHATSAPP_NUMBER = '254704264411'; // Replace with actual number

/**
 * Generates a WhatsApp deep link with a pre-filled message.
 * @param {string} message - The message to pre-fill.
 * @returns {string} The formatted WhatsApp URL.
 */
export const generateWhatsAppLink = (message) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};
