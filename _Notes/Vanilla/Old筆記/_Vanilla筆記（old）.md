# 筆記（old）

- 客戶端Request時會建立伺服器連線，資料傳輸分成Get和post兩種方法
- Get是將請求的資料以key-value的方式加在網址後方，也就是請求參數（Query String），位於網址家問號的後方文字
Post的資料是包含在Http request封包的message-body中進行傳送
- 當伺服器收到請求時，會Response狀態及請求內容。不管是request或response都會包含
Status Code、Headers、Body
- 可從dev tool的network去看
- WP網頁進入點是theme的home.php，get_header呼叫header.php（html標籤放這）
- meta標籤是用來描述網頁，這些網頁描述會提供給搜尋引擎，正確定義meta標籤有利於SEO，讓搜尋引擎快速找到網站並正確分類
- 語意化的HTmL：從標記就可以知道它的內容意義
    
    ![螢幕擷取畫面 2024-04-15 134755.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_134755.png)
    
- HTML5之前會使用<div>標記指定id屬性名稱如<div id=nav>，雖然可以用div標籤來達到語意化，不過id屬性是自由命名，id名稱如果與架構完全無關，很難從名稱去判斷網頁架構，而且過多的div會讓語法看起來不易閱讀且凌亂
HTML5統一了網頁架構的標記，去掉多餘的div，而用一些容易識別的語意標籤來代替
    
    ![螢幕擷取畫面 2024-04-15 140008.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_140008.png)
    
- 連結外部css樣式表語法：<link rel=stylesheet href=”css檔路徑”>
檔路徑可以是cdn節點，當瀏覽器逛其他網站已經有載入則會cache，可以加速連結速度也可以節省流量
    
- 屬性選擇器：篩選用，須搭配運算子，有反向選擇（:not）
- 虛擬類別選擇器（較進階的用法），又稱偽選擇器，大致上可區分為以下。
連結虛擬類別、結構性虛擬類別、UI狀態虛擬類別、目標虛擬類別
- 選擇器的權重：ID>CLASS=虛擬類別選擇器>Element>＊
權重相同時，後者順序會覆蓋前者
可使用（!important）宣告為重要
- CSS單位
    
    ![螢幕擷取畫面 2024-04-15 171529.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_171529.png)
    
- CSS顏色表示法
    
    ![螢幕擷取畫面 2024-04-15 171629.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_171629.png)
    
    ![螢幕擷取畫面 2024-04-15 171650.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_171650.png)
    
- 瀏覽器呈現網頁的過程
    
    ![螢幕擷取畫面 2024-04-15 173331.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_173331.png)
    
1. HTML與css程式碼交給渲染引擎（render engine）處理，將HTML碼解析並建構出DOM與CSSOM樹狀結構
    
    ![螢幕擷取畫面 2024-04-15 173359.png](%25E8%259E%25A2%25E5%25B9%2595%25E6%2593%25B7%25E5%258F%2596%25E7%2595%25AB%25E9%259D%25A2_2024-04-15_173359.png)
    
2. 將DOM與CSSOM依照順序組合成渲染樹狀結構（Render Tree）
3. 進入版面配置階段，版面配置會產出每一個物件的盒子模型（Box Model），每一個Box Model包含自身的內容（文字、圖片或影片），外層分別有Padding、Border、Margin
4. 最後進入繪製階段，在螢幕上繪製出各個物件

---

- 區塊Block Level元素與行內元素（區塊與整行的意思）
- 有些網頁設計師會同時加入兩個以上<br>標籤做出分段效果，這並不適當。撰寫HTML最好能使用語意化HTML，段落就該使用<p>，覺得段落間距不足時再搭配css margin屬性來控制段落間距
- form有action與method兩大屬性屬性，method有兩大參數get、post
- input元件是行內元素，它屬於可替換元素（Replaced Element），本身就具有區塊屬性，屬於行內區塊
- WP只接受網址連結css，javascript，圖片…等外部資源，不支援相對路徑
- <?= ;?>等於<?php echo ;?>
- 內置框架（iframe）是雙標記
- div標記與span標記，都屬於區塊標記，本身不具有意義的通用容器，只要找不到適合的語意元素可使用時，都可以使用div標記當作容器（container）
- float:left浮動屬性，由左至右依序排列，空間不夠時會往下排流動
- div是區塊，span是行內
- h標籤會自動換行
- 特殊符號及Emoji字符集（&），&nbsp⇒空白字元
- 問題：釐清區塊元素與行內元素

---

### 第4章：css

- 只要是HTML區塊元素都可以設定邊框性質
- css box由內至外：padding（邊界留白），border（邊框寬度），margin（邊界）
- position屬性五種設定值：static（靜態定位）、absolute（絕對定位）、relative（相對定位）、fixed（固定定位）、sticky（黏滯定位）
- border：邊框、padding：與邊框的距離、margin：與其他元素的間隔

---

### 8：Javascript基礎

- 瀏覽器會被cache的靜態資源：圖片、js、css
寫前端避免cache的方式1
<link rel="stylesheet" type="text/css" href="[http://mysite/style.css?v=](http://mysite/style.css?v=)<?=time()?>">
寫前端避免cache的方式2：瀏覽器dev mode⇒network⇒disable cache
寫前端避免cache的方式3：瀏覽器Ctrl+F5
- html裡的id可被js調用，php可以嗎?

---

### 10：操控DOM元素

- DOM就像目錄一樣，每個物件都是一個節點
- 修改樣式必須透過物件的style屬性
- button onclick=”函式”

---

### 11：前端儲存

- 瀏覽器可清空web storage
- 資料儲存練習_01.php，資料儲存練習_01.css要熟練
- localStorage瀏覽器關閉不會消失，sessionStorage則會
- localStorage屬於window物件
- 儲存大量結構化資料要使用IndexedDB
- IndexedDB的資料表叫儲存物件objectStore
- CRUD（Create、Read、Update、Delete）是任何資料庫之重要技巧，學任何資料庫都要熟悉

### 12：整合練習-通訊錄

- [IDBFactory](https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory)實現window.open介面

### 13：響應式網頁框架—Bootstrap

- 斷點就是響應式啟動的時機
- col沒指定數字就是將佔滿剩餘欄位，每列有12欄，寬度依比例自動調整
- 語法：color、grid system、breakpoint
col-{斷點}-欄位數
- bootstrap裡的單位都是相對值