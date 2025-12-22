# font 與 image

- [Getting Started: Font Optimization | Next.js](https://nextjs.org/docs/app/getting-started/fonts)
- [Components: Font | Next.js](https://nextjs.org/docs/app/api-reference/components/font)
- [（2025 最新）Google Fonst 的中文字體推薦，含免費下載整理與排版使用示範！- justfont blog](https://blog.justfont.com/2023/02/google-fonts-cjk/)
- [100font.com 專門收集整理免費商用字型，提供各字體檔下載和相關鏈結](https://free.com.tw/100font/)
- next.js 建議 image 長寬要==相等比例==

## [Browse Fonts - Google Fonts](https://fonts.google.com/)
1. 搜尋 Zen Maru Gothic、Zen Old Mincho 字型
2. Next.js 引入方式
   ```javascript
	   import { Zen_Maru_Gothic, Zen_Old_Mincho } from "next/font/google";
	   export const zenOldMincho = Zen_Old_Mincho({
	   subsets: ["latin"],
	   weight: "400",
	   });
	   
	   export const zenMaruGothic = Zen_Maru_Gothic({
	   subsets: ["latin-ext"],
	   weight: "500",
	   style: "normal"
	   });
	```
3. [next/font 參數](https://nextjs.org/docs/app/api-reference/components/font#reference)
