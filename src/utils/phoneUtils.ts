/**
 * Utility functions for phone number formatting and validation
 */

/**
 * Normalize Indonesian phone number to international format without +
 * Examples:
 * - 08123456789 -> 628123456789
 * - +628123456789 -> 628123456789 
 * - 628123456789 -> 628123456789
 * @param phoneNumber - The phone number to normalize
 * @returns Normalized phone number or null if invalid
 */
export const normalizePhoneNumber = (phoneNumber: string): string | null => {
  if (!phoneNumber) return null;
  
  // Remove all non-digit characters except +
  let normalized = phoneNumber.replace(/[^\d+]/g, '');
  
  // Remove + if present
  normalized = normalized.replace(/^\+/, '');
  
  // Handle Indonesian numbers starting with 0
  if (normalized.startsWith('08')) {
    normalized = '62' + normalized.slice(1);
  }
  // Handle numbers that already start with 62
  else if (normalized.startsWith('62')) {
    // Already in correct format
  }
  // Handle other country codes or invalid formats
  else if (normalized.startsWith('8') && normalized.length >= 10) {
    // Assume it's Indonesian number without leading 0
    normalized = '62' + normalized;
  }
  else {
    // Invalid format
    return null;
  }
  
  // Validate length (Indonesian mobile numbers should be flexible)
  // Minimum 10 digits (62 + 8 digits), maximum 15 digits total
  if (normalized.length < 10 || normalized.length > 15) {
    return null;
  }
  
  // Additional validation for Indonesian mobile numbers
  // Valid prefixes after 62: 8 (from 08xx) - more flexible pattern
  if (!normalized.match(/^628[0-9]{7,12}$/)) {
    return null;
  }
  
  return normalized;
};

/**
 * Format phone number for display (with + and proper spacing)
 * Example: 628123456789 -> +62 812-3456-789
 * @param phoneNumber - Normalized phone number
 * @returns Formatted phone number for display
 */
export const formatPhoneForDisplay = (phoneNumber: string): string => {
  if (!phoneNumber) return '';
  
  const normalized = normalizePhoneNumber(phoneNumber);
  if (!normalized) return phoneNumber; // Return original if normalization fails
  
  // Format: +62 8xx-xxxx-xxx
  if (normalized.startsWith('62')) {
    const countryCode = normalized.slice(0, 2);
    const rest = normalized.slice(2);
    
    if (rest.length >= 9) {
      const part1 = rest.slice(0, 3);
      const part2 = rest.slice(3, 7);
      const part3 = rest.slice(7);
      return `+${countryCode} ${part1}-${part2}-${part3}`;
    }
  }
  
  return `+${normalized}`;
};

/**
 * Validate if phone number is a valid Indonesian mobile number
 * @param phoneNumber - Phone number to validate
 * @returns boolean indicating if valid
 */
export const isValidIndonesianMobile = (phoneNumber: string): boolean => {
  const normalized = normalizePhoneNumber(phoneNumber);
  return normalized !== null;
};

/**
 * Convert normalized phone number to WhatsApp JID format
 * Example: 628123456789 -> 628123456789@s.whatsapp.net
 * @param phoneNumber - Normalized phone number
 * @returns WhatsApp JID string
 */
export const phoneToWhatsAppJID = (phoneNumber: string): string => {
  const normalized = normalizePhoneNumber(phoneNumber);
  if (!normalized) {
    throw new Error('Invalid phone number format');
  }
  return `${normalized}@s.whatsapp.net`;
};

/**
 * Extract phone number from WhatsApp JID
 * Example: 628123456789@s.whatsapp.net -> 628123456789
 * @param jid - WhatsApp JID
 * @returns Phone number or null if invalid JID
 */
export const jidToPhoneNumber = (jid: string): string | null => {
  if (!jid || !jid.includes('@')) return null;
  
  const phone = jid.split('@')[0];
  return normalizePhoneNumber(phone);
};
