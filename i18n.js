// ============================================================
// LANGUAGES - all the words on the site, in English and Urdu.
// To change any wording, edit it here. Both languages need the
// same "keys" (the names on the left side).
// ============================================================

const TEXT = {
  en: {
    langBtn: "اردو",
    siteName: "PKR Rates",
    tagline: "Gold, silver and dollar rates for Pakistan",
    navRates: "Rates",
    navZakat: "Zakat Calculator",
    titleRates: "Pakistan Gold, Silver and Dollar Rates",
    titleZakat: "Zakat Calculator Pakistan",

    noticeStarter: "Starter values (not live yet). Date: ",
    noticeLive: "Last updated: ",
    goldTitle: "Gold (24K) per tola",
    karat22: "22K: ",
    karat21: "21K: ",
    silverTitle: "Silver per tola",
    nisabLine: "Zakat Nisab (52.5 tola silver): ",
    currenciesTitle: "Currencies in PKR",
    colCurrency: "Currency",
    colRate: "Rate",
    cur_USD: "US Dollar",
    cur_SAR: "Saudi Riyal",
    cur_AED: "UAE Dirham",
    cur_GBP: "British Pound",
    goToZakat: "Calculate your Zakat",
    footerRates: "Rates are for information only. Always confirm with your jeweller or exchange.",

    zakatTitle: "Zakat Calculator (PKR)",
    zakatIntro: "Silver Nisab method (Hanafi). Zakat is 2.5% of your net wealth if it reaches the Nisab.",
    labelCash: "Cash and bank savings (Rs)",
    labelGold: "Gold you own (tola, 24K equivalent)",
    labelSilver: "Silver you own (tola)",
    labelBusiness: "Business goods and investments (Rs)",
    labelDebts: "Debts you must pay (Rs)",
    labelGoldPrice: "Gold price per tola (Rs) - you can change it",
    labelSilverPrice: "Silver price per tola (Rs) - you can change it",
    calcBtn: "Calculate Zakat",
    zakatNoticeStarter: "Prices are starter values, not live. Check today's rate and edit the boxes below.",
    zakatNoticeLive: "Prices last updated: ",
    footerZakat: "This is a guide only. For your own situation, ask a trusted scholar.",

    needSilver: "Please enter the silver price per tola.",
    netWealth: "Net wealth: ",
    nisabIs: "Nisab: ",
    notDue: "Your wealth is below the Nisab, so Zakat is not due.",
    zakatDue: "Zakat due: "
  },

  ur: {
    langBtn: "English",
    siteName: "پاکستان ریٹس",
    tagline: "پاکستان میں سونے، چاندی اور ڈالر کے ریٹس",
    navRates: "ریٹس",
    navZakat: "زکوٰۃ کیلکولیٹر",
    titleRates: "پاکستان میں سونے، چاندی اور ڈالر کے ریٹس",
    titleZakat: "زکوٰۃ کیلکولیٹر پاکستان",

    noticeStarter: "یہ ابتدائی قیمتیں ہیں، لائیو نہیں۔ تاریخ: ",
    noticeLive: "آخری اپڈیٹ: ",
    goldTitle: "سونا (24 قیراط) فی تولہ",
    karat22: "22 قیراط: ",
    karat21: "21 قیراط: ",
    silverTitle: "چاندی فی تولہ",
    nisabLine: "زکوٰۃ کا نصاب (52.5 تولہ چاندی): ",
    currenciesTitle: "کرنسی ریٹس (روپوں میں)",
    colCurrency: "کرنسی",
    colRate: "ریٹ",
    cur_USD: "امریکی ڈالر",
    cur_SAR: "سعودی ریال",
    cur_AED: "اماراتی درہم",
    cur_GBP: "برطانوی پاؤنڈ",
    goToZakat: "اپنی زکوٰۃ کا حساب لگائیں",
    footerRates: "یہ ریٹس صرف معلومات کے لیے ہیں۔ خریدنے یا بیچنے سے پہلے اپنے جیولر یا ایکسچینج سے تصدیق کریں۔",

    zakatTitle: "زکوٰۃ کیلکولیٹر (روپے)",
    zakatIntro: "چاندی کے نصاب کا طریقہ (حنفی)۔ اگر آپ کی خالص دولت نصاب تک پہنچ جائے تو اس کا 2.5 فیصد زکوٰۃ ہے۔",
    labelCash: "نقد رقم اور بینک بچت (روپے)",
    labelGold: "آپ کے پاس سونا (تولہ، 24 قیراط کے برابر)",
    labelSilver: "آپ کے پاس چاندی (تولہ)",
    labelBusiness: "کاروباری مال اور سرمایہ کاری (روپے)",
    labelDebts: "آپ کے ذمے قرض (روپے)",
    labelGoldPrice: "سونے کی قیمت فی تولہ (روپے) - آپ بدل سکتے ہیں",
    labelSilverPrice: "چاندی کی قیمت فی تولہ (روپے) - آپ بدل سکتے ہیں",
    calcBtn: "زکوٰۃ کا حساب لگائیں",
    zakatNoticeStarter: "قیمتیں ابتدائی ہیں، لائیو نہیں۔ آج کا ریٹ دیکھ کر نیچے کے خانوں میں درست کریں۔",
    zakatNoticeLive: "قیمتوں کی آخری اپڈیٹ: ",
    footerZakat: "یہ صرف رہنمائی ہے۔ اپنی صورتحال کے لیے کسی معتبر عالم سے پوچھیں۔",

    needSilver: "براہ کرم چاندی کی فی تولہ قیمت درج کریں۔",
    netWealth: "خالص دولت: ",
    nisabIs: "نصاب: ",
    notDue: "آپ کی دولت نصاب سے کم ہے، اس لیے زکوٰۃ واجب نہیں۔",
    zakatDue: "واجب زکوٰۃ: "
  }
};

// Which language is showing now. We remember the choice in the browser.
let currentLang = "en";
try {
  const saved = localStorage.getItem("lang");
  if (saved === "ur" || saved === "en") currentLang = saved;
} catch (e) { /* some browsers block storage - that is fine */ }

// Get a word/sentence by its key, in the current language.
function t(key) {
  return TEXT[currentLang][key] || TEXT.en[key] || key;
}

// Fill every element marked data-i18n="key" with the right words.
function applyLang() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ur" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  var titleKey = document.body.getAttribute("data-title");
  if (titleKey) document.title = t(titleKey);

  // Each page can define render() for the parts built by code
  if (typeof render === "function") render();
}

function toggleLang() {
  currentLang = currentLang === "en" ? "ur" : "en";
  try { localStorage.setItem("lang", currentLang); } catch (e) {}
  applyLang();
}

// This lets us test the file on a computer. Browsers ignore it.
if (typeof module !== "undefined") {
  module.exports = { TEXT };
}
