/**
 * 站台設定 / Site settings（V1.3）
 * 只需要改這個檔案就能切換圖片來源，不必動 index.html。
 */
window.APP_CONFIG = {
  // 圖片清單來源：Google Apps Script 網頁應用程式網址（/exec）。
  // 精選相簿（GET）與訪客上傳（GET 列表 + POST 上傳）都是同一個網址，
  // 差別只在網頁內部呼叫時加的 ?action=uploads 參數，這裡不必分開填。
  // 改回本機測試資料時，換成 "images.json"（此時「上傳照片」頁面無法運作，只能離線瀏覽相片集）。
  imagesSource: "https://script.google.com/macros/s/AKfycbxJNyvkGrNgWAB8g1zKlVMNzVWt2qaivVC0LgybeYCUPVxEmTIgvkuhCOBOmMNCptpP1A/exec",
  // imagesSource: "images.json",

  longPressMs: 500,        // 長按幾毫秒進入多選模式
  zipPrefix: "photos",     // 打包下載的 zip 檔名前綴

  // ---- 效能 / 畫質 ----
  chunkSize: 60,           // 相簿每批渲染的張數（往下捲動才會再載入下一批）
  downloadPx: 0,           // 下載尺寸：0 = 原始檔；填 2048 可縮小 zip 體積（張數很多時建議）

  // ---- 訪客上傳 ----
  uploadMaxBytes: 20 * 1024 * 1024   // 單檔大小上限（20MB）。這裡只負責「上傳前」提早擋掉太大的檔案，
                                      // 真正把關的是 gas.txt 的 MAX_UPLOAD_BYTES，兩邊要填一樣的數字
};
