
- [SSR (Server Side Rendering))](https://ithelp.ithome.com.tw/articles/10266781) = [dynamic rendering](https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering#what-is-dynamic-rendering)
- [SSG (Static Side Generation)](https://ithelp.ithome.com.tw/articles/10266781) = [static rendering](https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering#what-is-static-rendering)
- Next.js 官方，static rendering = Preredering
- 客戶端渲染（CSR (Client Side Rendering)）= SPA
- [Day02 - 為什麼你需要 Next.js ? - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10265138)
- Next.JS static rendering 是在 layout 檔案
  否：並非這樣定義，Next.JS大部分是 static，dynamic 需經特殊處理，一般都是在獲取 user的獨特數據並更新或是動態資訊如 cookie、search param
- 疑問：如何判斷幾時是 static or dynamic redering?
  [（Linking and Navigating）](https://nextjs.org/docs/app/getting-started/linking-and-navigating)
- 新版本的 Next.JS redering 改為 route，static route、dynamic route
- stream 是並行build並傳輸，但是先準備好的資料可以先傳輸並渲染
- 實作 stream 兩種方式，loading.tsx（page level）、\<Suspense>（component level）
- loading.tsx 是基於 React Suspense 建構的特殊 Next.js 檔案
- fetch資料的元件化，搭配 React Suspense
- [Suspense – React](https://react.dev/reference/react/Suspense)
