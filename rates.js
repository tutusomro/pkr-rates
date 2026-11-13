// ============================================================
// RATES DATA - this is the ONE file that changes every day.
// Later, a "rates bot" will update this file automatically.
// ============================================================
// NOTE: these are STARTER values, not live prices.
// Gold: from a Pakistani market report dated 11 Nov 2026.
// Silver and currencies: approximate placeholders until the bot is connected.

const RATES = {
  updated: "14 Nov 2026",
  isLive: false,
  goldTola24k: 465780,   // Rs per tola, 24 karat
  silverTola: 8000,      // Rs per tola, pure silver
  currencies: [
    { code: "USD", name: "US Dollar",     rate: 280 },
    { code: "SAR", name: "Saudi Riyal",   rate: 75 },
    { code: "AED", name: "UAE Dirham",    rate: 76.5 },
    { code: "GBP", name: "British Pound", rate: 370 }
  ]
};
