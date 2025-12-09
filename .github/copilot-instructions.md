# Copilot Instructions for learn-nextjs

This is a **Next.js 16+ learning project** using TypeScript, shadcn/ui, and Tailwind CSS with modern tooling (pnpm, PostCSS 4).

## Project Architecture

- **Framework**: Next.js 16 with App Router (RSC by default)
- **Styling**: Tailwind CSS 4 + PostCSS 4 with shadcn/ui components
- **State Management**: React hooks (useState, no external state library)
- **Form/Validation**: Zod for schema validation
- **UI Components**: Radix UI primitives + shadcn customized components
- **Build System**: pnpm workspace with single app

**Key Directory Structure**:
- `src/app/` - Next.js app router pages and layouts
- `src/components/ui/` - shadcn/ui components (button, input, card, label, etc.)
- `src/components/` - Feature components (LoginPage-shadcn.tsx example)
- `src/lib/` - Utilities (cn() helper for Tailwind merging)
- `src/styles/` - Global styles (shadcn.css, globals.css)
- `SrcCode/` - Reference code (not part of main build, excluded from linting)

## Critical Conventions

### 1. **Component Pattern** (shadcn/ui Style)
- Use `"use client"` directive for interactive components
- Import shadcn components from `@/components/ui/`
- Use `cn()` utility to merge Tailwind classes: `cn(buttonVariants({ variant, size, className }))`
- Components use Radix UI slots and CVA (class-variance-authority) for variants

**Example** (`src/components/ui/button.tsx`):
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

### 2. **CSS & Tailwind Configuration**
- Tailwind 4 uses built-in CSS variable tokens (no manual theme config file needed)
- shadcn components inject CSS variables: `src/styles/shadcn.css` defines semantic colors (e.g., `--primary`, `--destructive`)
- Always use `cn()` helper to merge conflicting Tailwind classes
- Dark mode support via CSS variables (e.g., `dark:aria-invalid:ring-destructive/40`)

### 3. **Path Aliases**
`tsconfig.json` defines: `"@/*": ["./src/*"]`

Always import from root:
```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import "@/styles/shadcn.css"
```

### 4. **TypeScript Setup**
- `strict: true` mode enabled (no implicit any)
- `noEmit: true` (type-checking only, Next.js handles emit)
- `module: "esnext"` + `moduleResolution: "bundler"` for modern patterns
- Some stricter checks disabled: `noUnusedLocals`, `noUnusedParameters` (for learning context)

### 5. **Form & Validation Pattern**
Projects use Zod for runtime schema validation:
```tsx
import { z } from "zod"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})
```

## Development Workflow

**Install & Run**:
```bash
pnpm install
pnpm dev              # Runs on http://localhost:3000
pnpm build            # Production build
pnpm lint             # ESLint check
pnpm start            # Run production build
```

**Next.js Specific**:
- App Router: Routes defined by file structure in `src/app/`
- Server Components by default (add `"use client"` for interactivity)
- `layout.tsx` at any level wraps child routes
- Metadata export for SEO: `export const metadata = { title: "...", ... }`

## Integration Points & Dependencies

**Key Packages**:
- `next/font` - Font optimization (Geist font loaded)
- `lucide-react` - Icon library
- `bcrypt` - Password hashing
- `use-debounce` - Debounce hook
- `class-variance-authority` (CVA) - Component variant generation
- `@radix-ui/*` - Unstyled accessible primitives

**External Services**: None currently integrated (learning project)

## Linting & Code Quality

- **ESLint 9** with `eslint-config-next/core-web-vitals` + `typescript` presets
- **Excluded from linting**: `.next/`, `build/`, `SrcCode/` (reference code)
- **Prettier 3**: Format configuration follows Next.js defaults

Run: `pnpm lint`

## Common Patterns to Follow

1. **Variant-driven Components**: Use CVA + cn() for flexible styling
2. **Server Components by Default**: Only use `"use client"` when state/hooks needed
3. **Type React Imports**: Import type from "react" explicitly where needed
4. **Semantic HTML**: Use proper form elements (button, input, label)
5. **Accessibility**: Radix UI provides ARIA attributes; test with keyboard navigation

## Notes for AI Agents

- This is primarily a **learning workspace** - reference code in `SrcCode/`, `_example/`, and `_Notes/` directories
- Component examples show patterns (LoginPage-shadcn.tsx is a full auth UI example)
- When adding features, follow the shadcn/ui component model (CVA + Slot + cn())
- Prefer React Server Components; use client components only for interactivity
- Always import components relative to `@/` alias, never use relative paths like `../../../`
