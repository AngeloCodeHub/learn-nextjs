# tailwindcss

- [TailwindCSS DOC](https://tailwindcss.com/docs/installation/using-vite)
- [Bootstrap · The most popular HTML, CSS, and JS library in the world.](https://getbootstrap.com/)

## 安裝

### vite

1. 啟動 vite 會去讀 `vite.config.ts`
2. 加入 /src/style.css `import @tailwindcss` 即可使用
3. 要使用原生 Vanilla 只要把 `import @tailwindcss` 拿掉

### 原生 Vanilla 版本

1. 使用 tailwindcss/cli
2. 監控根目錄 Vanilla-tailwindcss.css
	```Powershell
	pnpm tailwindcss -i ./Vanilla-tailwindcss.css -o ./src/style.css --watch
	```

## 筆記

```css
/* 小於斷點 md 則 hidden，大於 md 則以 block 渲染 */
className="hidden md:block"

/* 小於斷點 md 則以 block 渲染，大於則 hidden */
className="block md:hidden"
```

- [Tailwind CSS 教程 | 菜鸟教程](https://www.runoob.com/tailwindcss/tailwindcss-tutorial.html)
- [Tailwind CSS 新手上路：概念、安裝與工具推薦 | Medium](https://medium.com/@Kelly_CHI/tailwind-css-introduction-and-tools-68e770b2bf7f)
- [TailwindCSS - 從零開始 :: 2021 iThome 鐵人賽](https://ithelp.ithome.com.tw/users/20119300/ironman/3948)
- [tailwindcss - 從零開始學 :: 2023 iThome 鐵人賽](https://ithelp.ithome.com.tw/users/20162607/ironman/6658)
- [CSS 優良部份 :: 第 12 屆 iThome 鐵人賽](https://ithelp.ithome.com.tw/users/20040221/ironman/3567)
- [【Tailwind】你聽過尾巴風嗎 ? CSS 框架 tailwind 的新手入門指南 :: 2022 iThome 鐵人賽](https://ithelp.ithome.com.tw/users/20152251/ironman/5809)
- [淺談 Tailwind CSS. 今天要為各位介紹的是 Tailwind… | by Matthew Chang | Medium](https://medium.com/@hayato.chang/%E6%B7%BA%E8%AB%87-tailwind-css-4153d86eb661)
