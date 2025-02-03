const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN;
const PHONE_NUMBER_ID = process.env.PHONE_NUMBER_ID;

const VERIFY_TOKEN_BULK = process.env.YMANEBULK_VERIFY_TOKEN;
const WHATSAPP_TOKEN_BULK = process.env.WHATSAPP_BULK_TOKEN;

module.exports = {
  developement: {
    verify_token: VERIFY_TOKEN,
    whatsapp_token: WHATSAPP_TOKEN,
    phone_number_id: PHONE_NUMBER_ID,
    verify_token_bulk: VERIFY_TOKEN_BULK,
    whatsapp_token_bulk: WHATSAPP_TOKEN_BULK,
  },
};
