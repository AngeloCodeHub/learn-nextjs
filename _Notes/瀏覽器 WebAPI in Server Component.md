<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# next.js 框架中，瀏覽器 WebAPI 可不可以在 Server Component 使用?

在 Next.js 框架的 Server Component 裡，瀏覽器的 WebAPI（例如 window、document、localStorage 等）是不能使用的。[^1_1][^1_2][^1_5][^1_6]

### Server Component 的原理

Server Component 的程式碼只會在伺服器上執行，並渲染出 HTML，送給用戶端顯示。它不能直接存取瀏覽器環境，也不會有任何 JS 代碼在瀏覽器端執行。[^1_2][^1_5][^1_6][^1_9]

### 為何不能用瀏覽器 WebAPI

Server Component 是在 Node.js（或其他伺服器執行環境）運行，無法存取瀏覽器專屬物件（像 window、document、navigator 這些 WebAPI）。這些 API 只有在用戶端執行、也就是 Client Component 中才可直接存取。[^1_5][^1_6][^1_1][^1_2]

### 正確做法

- 若程式碼中有用到瀏覽器 API，該元件需轉成 Client Component，在檔案最開頭加上 `'use client'` 宣告。[^1_6][^1_1][^1_2]
- 只有純 server-side 資料存取、API 調用、機敏資料處理等情景，適合寫在 Server Component。[^1_1][^1_5][^1_6]
- 若需要混合 server-side 資料處理與 client-side 互動，可以將資料包裝成 props 傳給 Client Component，再由 Client Component 處理瀏覽器專用的 API。[^1_2][^1_6]


### 結論

Next.js Server Component 無法直接使用瀏覽器 WebAPI，只能在 Client Component 用。兩種元件適用場景不同，請根據功能需求選擇適合的寫法。[^1_5][^1_6][^1_1][^1_2]
<span style="display:none">[^1_10][^1_11][^1_12][^1_3][^1_4][^1_7][^1_8]</span>

<div align="center">⁂</div>

[^1_1]: https://ithelp.ithome.com.tw/articles/10316916

[^1_2]: https://blog.csdn.net/u012446963/article/details/143834198

[^1_3]: https://www.reddit.com/r/nextjs/comments/1g4gif0/httponly_cookie_can_not_be_set_when_using_nextjs/

[^1_4]: https://www.reddit.com/r/nextjs/comments/1ae7933/can_everything_be_done_on_the_server_with_nextjs/

[^1_5]: https://www.frontendnote.site/uncategorized/next-server-component/

[^1_6]: https://nextjs.org/docs/app/getting-started/server-and-client-components

[^1_7]: https://www.thisweb.dev/post/react-server-action

[^1_8]: https://www.reddit.com/r/nextjs/comments/1e6mxjt/i_dont_understand_the_deal_with_server_components/

[^1_9]: https://ithelp.ithome.com.tw/m/articles/10324804

[^1_10]: https://blog.logto.io/zh-TW/nextjs-server-actions-stateless-session

[^1_11]: https://developer.mozilla.org/zh-TW/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction

[^1_12]: https://blog.skk.moe/post/refactor-my-blog-using-nextjs-app-router/

