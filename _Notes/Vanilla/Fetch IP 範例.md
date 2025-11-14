#### 原始碼
```Powershell
Start-Procees SrcCode\Fetch.html
```

## references

- [Fetch API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## 官方 Script
 \<script> 標籤是內聯 JavaScript
這個區塊定義了 getIP 函數
它是直接寫在 HTML 內部的 JavaScript 代碼
 
 \<script> src屬性是標籤是外部資源載入
它使用 src 屬性來載入外部的 JSONP API
這個標籤的作用是動態載入並執行來自 https://api.ipify.org 的 JavaScript

為什麼不能合併：
當 \<script> 標籤有 src 屬性時，瀏覽器會忽略標籤內部的任何內容
如果你把函數定義寫在有 src 屬性的 \<script> 標籤內，那個函數就不會被執行
外部腳本載入是異步的，需要確保 getIP 函數在 API 調用之前就已經定義好
正確的做法就是你現在的寫法：

先定義 getIP 函數
然後載入會調用這個函數的外部腳本
這樣確保了函數在被調用之前就已經存在於全局作用域中。

## 改成 Fetch

- 將原本的 JSONP 方法註解掉
		使用現代的 fetch API 來獲取 IP 地址
		加入了錯誤處理機制
		添加了重新獲取按鈕
		視覺美化：

- 漸層背景色彩
		居中的卡片式設計
		毛玻璃效果（backdrop-filter）
		載入動畫效果
		響應式設計（在不同螢幕尺寸下都能正常顯示）
		按鈕懸停效果
		主要特色：

- 頁面載入時自動獲取 IP
		美觀的載入狀態提示
		清楚的錯誤訊息顯示
		可以手動重新獲取 IP

## 修正

問題原因：
setTimeout 內的 async 函數是一個獨立的作用域
response 變數只在 setTimeout 內部定義，外部無法存取
後續的代碼嘗試使用 response，但此時它還未定義
