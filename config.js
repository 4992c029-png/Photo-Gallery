/**
 * 站台設定 / Site settings（V1.2）
 * 只需要改這個檔案就能切換圖片來源，不必動 index.html。
 */
window.APP_CONFIG = {
  // 圖片清單來源：Google Apps Script 網頁應用程式網址（/exec）。
  // 改回本機測試資料時，換成 "images.json"。
  imagesSource: "https://script.google.com/macros/s/AKfycbxJNyvkGrNgWAB8g1zKlVMNzVWt2qaivVC0LgybeYCUPVxEmTIgvkuhCOBOmMNCptpP1A/exec",
  // imagesSource: "images.json",

  longPressMs: 500,        // 長按幾毫秒進入多選模式
  zipPrefix: "photos",     // 打包下載的 zip 檔名前綴

  // ---- 效能 / 畫質 ----
  chunkSize: 60,           // 相簿每批渲染的張數（往下捲動才會再載入下一批）
  downloadPx: 0            // 下載尺寸：0 = 原始檔；填 2048 可縮小 zip 體積（張數很多時建議）
};
