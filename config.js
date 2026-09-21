/**
 * 站台設定 / Site settings
 * 只需要改這個檔案就能切換圖片來源，不必動 index.html。
 *
 * imagesSource:
 *   - "images.json"                                  → 使用本專案內的清單（改完 push 即更新）
 *   - "https://你的雲端空間網址/images.json"          → 使用雲端空間內的清單
 *                                                      （在雲端增減圖片與清單，網頁自動同步，不需重新部署）
 *     ※ 雲端空間必須開啟 CORS，否則清單與「打包下載」會被瀏覽器擋下。
 */
window.APP_CONFIG = {
//  imagesSource: "images.json",
  imagesSource: "https://script.google.com/macros/s/AKfycbwIfZz5UdHOuAoxgLD5jftaQHJbv-9hOf3cGyWjxRy0_ue1tfy3zJZrKJJ7OKWbUfZTfA/exec",
  longPressMs: 500,        // 長按幾毫秒進入多選模式
  zipPrefix: "photos"      // 打包下載的 zip 檔名前綴
};
