# URL Logger to Telegram (Chrome Extension)

## O'rnatish
1. Ushbu papkani (`url-logger-extension/`) kompyuteringizga yuklab oling.
2. `background.js` faylida `BOT_TOKEN` va `CHAT_ID` ni o'zingizning qiymatlaringiz bilan almashtiring.
3. Chrome brauzerini oching va `chrome://extensions/` ga kiring.
4. Yuqoridan "Developer mode" ni yoqing.
5. "Load unpacked" tugmasini bosing va ushbu papkani tanlang.
6. Endi extension ishga tushadi va har safar yangi URL ochilganda yoki o'zgarganda Telegram botga yuboradi.

## Eslatma
- `BOT_TOKEN` ni @BotFather orqali olishingiz mumkin.
- `CHAT_ID` ni olish uchun botingizga `/start` yozing, keyin quyidagi URL'ni oching:  
  `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

## Icon haqida
- Extension uchun `icons/` papkasi bo‘lishi kerak.
- Papkada quyidagi fayllar bo‘lishi kerak:
```  
icons/
├── icon16.png
├── icon48.png
└── icon128.png
