# learn-nextjs 的 Copilot 指引

這是一個**Next.js 16+ 學習專案**，使用 TypeScript、shadcn/ui 和 Tailwind CSS，配合現代工具鏈（pnpm、PostCSS 4）。

## 專案架構

- **框架**：Next.js 16，使用 App Router（預設為 RSC）
- **樣式**：Tailwind CSS 4 + PostCSS 4 搭配 shadcn/ui 元件
- **狀態管理**：React hooks（useState，無外部狀態管理庫）
- **表單/驗證**：使用 Zod 進行結構驗證
- **UI 元件**：Radix UI 基礎元件 + shadcn 自訂元件
- **建置系統**：pnpm 工作區，單一應用

**關鍵目錄結構**：
- `src/app/` - Next.js app router 頁面和佈局
- `src/components/ui/` - shadcn/ui 元件（按鈕、輸入、卡片、標籤等）
- `src/components/` - 功能性元件（LoginPage-shadcn.tsx 範例）
- `src/lib/` - 工具函式（Tailwind 合併的 cn() 幫助函數）
- `src/styles/` - 全域樣式（shadcn.css、globals.css）
- `SrcCode/` - 參考代碼（不屬於主要構建，排除於 linting 外）

## 關鍵約定

### 1. **元件模式**（shadcn/ui 風格）
- 對於互動式元件使用 `"use client"` 指令
- 從 `@/components/ui/` 匯入 shadcn 元件
- 使用 `cn()` 工具合併 Tailwind 類別：`cn(buttonVariants({ variant, size, className }))`
- 元件使用 Radix UI 槽位和 CVA（class-variance-authority）來處理變體

**範例**（`src/components/ui/button.tsx`）：
```tsx
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { default: "...", lg: "..." },
  },
})

function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
```

### 2. **CSS 與 Tailwind 配置**
- Tailwind 4 使用內建 CSS 變數標記（無需手動主題配置檔）
- shadcn 元件注入 CSS 變數：`src/styles/shadcn.css` 定義語義化顏色（例如 `--primary`、`--destructive`）
- 始終使用 `cn()` 幫助函數合併衝突的 Tailwind 類別
- 透過 CSS 變數支援深色模式（例如 `dark:aria-invalid:ring-destructive/40`）

### 3. **路徑別名**
`tsconfig.json` 定義：`"@/*": ["./src/*"]`

始終從根部匯入：
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import "@/styles/shadcn.css"
```

### 4. **TypeScript 設定**
- 啟用 `strict: true` 模式（無隱含 any）
- `noEmit: true`（僅進行類型檢查，Next.js 處理發出）
- `module: "esnext"` + `moduleResolution: "bundler"` 用於現代模式
- 某些更嚴格的檢查被禁用：`noUnusedLocals`、`noUnusedParameters`（用於學習環境）

### 5. **表單與驗證模式**
專案使用 Zod 進行執行時結構驗證：
```tsx
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
```

## 開發工作流程

**安裝與執行**：
```bash
pnpm install
pnpm dev              # 在 http://localhost:3000 執行
pnpm build            # 生產構建
pnpm lint             # ESLint 檢查
pnpm start            # 執行生產構建
```

**Next.js 特定事項**：
- App Router：路由由 `src/app/` 中的檔案結構定義
- 預設為伺服器元件（互動功能時加入 `"use client"`）
- 任何層級的 `layout.tsx` 會包裝子路由
- SEO 元資料導出：`export const metadata = { title: "...", ... }`

## 整合點與相依性

**關鍵套件**：
- `next/font` - 字體優化（載入 Geist 字體）
- `lucide-react` - 圖示庫
- `bcrypt` - 密碼雜湊
- `use-debounce` - 防抖 hook
- `class-variance-authority`（CVA）- 元件變體生成
- `@radix-ui/*` - 無樣式可訪問的基礎元件

**外部服務**：目前無整合（學習專案）

## Linting 與代碼品質

- **ESLint 9**，使用 `eslint-config-next/core-web-vitals` + `typescript` 預設組態
- **排除於 linting 外**：`.next/`、`build/`、`SrcCode/`（參考代碼）
- **Prettier 3**：格式化配置遵循 Next.js 預設值

執行：`pnpm lint`

## 遵循的常見模式

1. **變體驅動的元件**：使用 CVA + cn() 實現靈活樣式
2. **伺服器元件為預設**：僅在需要狀態/hooks 時使用 `"use client"`
3. **React 匯入類型化**：明確從 "react" 匯入類型
4. **語義化 HTML**：使用適當的表單元素（button、input、label）
5. **可訪問性**：Radix UI 提供 ARIA 屬性，測試鍵盤導航

## AI 助手注意事項

- 這主要是一個**學習工作區** - 參考代碼位於 `SrcCode/`、`_example/` 和 `_Notes/` 目錄中
- 元件範例展示模式（LoginPage-shadcn.tsx 是完整的驗證 UI 範例）
- 添加功能時，遵循 shadcn/ui 元件模型（CVA + Slot + cn()）
- 偏好 React 伺服器元件，僅在互動時使用客戶端元件
- 始終相對於 `@/` 別名匯入元件，不要使用相對路徑如 `../../../`

## 語言約定

- **文件編寫**：使用繁體中文編寫所有 Markdown 文件
- **Copilot 對話**：與 Copilot 進行的所有對話均使用繁體中文
- **代碼註解**：代碼中的註解使用繁體中文
- **變數/函數名稱**：保持英文命名（遵循 JavaScript 慣例）
