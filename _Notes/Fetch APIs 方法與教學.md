# Fetch APIs 方法與教學

媒體類型: 網站系列文
Hour: 8
分類: 綜合練習
熟練度: 50

- （影音07:58）[Fetch API JavaScript in Easiest way | Fetch API Tutorial](https://www.youtube.com/watch?v=Pnlt1NiBt68)
- （影音）[NextJS MySQL example. Get MySQL data into a react app using Node JS](https://www.youtube.com/watch?v=aprLiG34b50)
- （影音05:58）[Using Next.js Server Actions to Call External APIs](https://www.youtube.com/watch?v=z4JnIYIrvSE)
- （文章）[Getting started with Application Programming Interface (API)](https://ijaycent.hashnode.dev/getting-started-with-application-programming-interface-api)
- （文章）[How to Fetch API Data in React](https://ijaycent.hashnode.dev/how-to-fetch-api-data-in-react)
- （文章）[JavaScript Fetch API For Beginners – Explained With Code Examples](https://www.freecodecamp.org/news/javascript-fetch-api-for-beginners)
- （文章）[5 ways to make HTTP requests in Node.js](https://blog.logrocket.com/5-ways-make-http-requests-node-js)
- （Cheat Sheet）[4 Ways To Make an API Call in JavaScript](https://www.facebook.com/techtheworld480/posts/pfbid0222tdhEAjQSm2C3sj9ZZeHBFEi4gcT493t2aRrcyELa5zFh7quJAhJbshnCj1yE8zl)
- （實體書籍）[ChatGPT 詠唱來點亮 React ＆ 前端技能樹](https://www.tenlong.com.tw/products/9786267383506)
- [JavaScript 和 React 中的 API 處理：從基礎到專業級](https://codelove.tw/@tony/post/qZW2lx#react)

---

### 問題與狀況

- 安全性的fetch如何使用
A：Next.JS後端有支援

---

- 程式或系統透過API互相溝通
- API不限於http或是https協定、也可以使用更底層的TCP協定
- rest-api、soap-api、xml-rpc、GraphQL都是web API的一種
- rest-api是跑在http協定上且具有rest風格的web api，使用json格式
- soap-api交換是使用xml
- fetch方法返回promise物件後，promise物件resolve解析為response物件
參見：[Window: fetch() method](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
- 各種Runtime的fetch
瀏覽器：[Web APi for Javascript](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)
Node.JS：[Node.JS本身全域物件fetch()](https://nodejs.org/api/globals.html#fetch)，幾乎等同WebAPi的fetch
Next.JS：[Next.JS的fetch方法](https://nextjs.org/docs/app/api-reference/functions/fetch)是從Web APis擴充而來，而非瀏覽器的Web APis，並且可直接在Server端使用
所有原生的功能都可以使用，並擴充了一些功能如option.cache等功能
React.JS：參考文章How to Fetch API Data in React
- 套件
[Axios](https://axios-http.com/)、[Node.JS HTTPS模組](https://nodejs.org/docs/latest/api/https.html)、[SWR](https://swr.vercel.app/)、Got