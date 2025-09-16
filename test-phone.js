import { normalizePhoneNumber, formatPhoneForDisplay, phoneToWhatsAppJID } from './src/utils/phoneUtils.js';

// Test cases
const testNumbers = [
  '0895384290617', // 13 digits (should work now)
  '089538429061',  // 12 digits (already working)
  '08123456789',   // 11 digits (standard)
  '+628123456789', // international format
  '628123456789',  // already normalized
  '8123456789',    // without leading 0
  '0812345',       // too short
  '08123456789012345', // too long
];

console.log('=== Phone Number Validation Test ===\n');

testNumbers.forEach(number => {
  console.log(`Input: ${number}`);
  try {
    const normalized = normalizePhoneNumber(number);
    if (normalized) {
      const display = formatPhoneForDisplay(number);
      const jid = phoneToWhatsAppJID(number);
      console.log(`✅ Normalized: ${normalized}`);
      console.log(`   Display: ${display}`);
      console.log(`   JID: ${jid}`);
    } else {
      console.log(`❌ Invalid format`);
    }
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
  }
  console.log('');
});
