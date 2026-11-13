// ============================================================
// ZAKAT MATH - kept in its own file so we can test it easily.
// ============================================================

// Nisab = value of 52.5 tola of silver (the Hanafi view used in Pakistan)
const NISAB_SILVER_TOLA = 52.5;
const ZAKAT_RATE = 0.025; // 2.5%

function calculateZakat(input) {
  // Turn anything empty or wrong into 0
  const n = (x) => Number(x) || 0;

  const goldValue = n(input.goldTola) * n(input.goldPrice);
  const silverValue = n(input.silverTola) * n(input.silverPrice);

  const total = n(input.cash) + goldValue + silverValue + n(input.business);
  const net = total - n(input.debts);
  const nisab = NISAB_SILVER_TOLA * n(input.silverPrice);

  const isDue = nisab > 0 && net >= nisab;

  return {
    total: total,
    net: net,
    nisab: nisab,
    isDue: isDue,
    zakat: isDue ? net * ZAKAT_RATE : 0
  };
}

// This lets us test the file on a computer. Browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = { calculateZakat };
}
