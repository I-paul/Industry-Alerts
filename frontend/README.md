# Industry Alerts — Frontend

A React + Vite application for browsing and managing industry alerts with reusable UI primitives and page sections.

## Features
- Fast Vite dev server and optimized production build
- Clear separation of sections (layout/page blocks) and UI primitives
- Simple fetch utility for API access
- Sample data for local development

## Tech Stack
- React 18 + Vite
- JavaScript (ESNext), JSX
- CSS (App.css) and utility classes if needed
- Optional: React Router (if routing is added)

## Getting Started
- Prerequisites: Node.js >= 18 and npm
- Install: npm install
- Development: npm run dev
- Build: npm run build
- Preview: npm run preview

## File Structure
```
frontend/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ sections/
│  │  ├─ footer.jsx
│  │  ├─ hero.jsx
│  │  ├─ navbar.jsx
│  │  ├─ sidebar.jsx
│  │  └─ window.jsx
│  ├─ UI/
│  │  ├─ button.jsx
│  │  ├─ card.jsx
│  │  ├─ DatePicker.jsx
│  │  ├─ link.jsx
│  │  ├─ monthYearPicker.jsx
│  │  └─ pagination.jsx
│  ├─ data/
│  │  └─ sample.json
│  ├─ utils/
│  │  └─ fetch.js
│  ├─ App.css
│  ├─ App.jsx
│  └─ main.jsx
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

## What Each File/Folder Does (Short)
- src/main.jsx: Mounts the React app to the DOM.
- src/App.jsx: Root component; composes top-level layout/sections.
- src/App.css: Global styles.
- src/assets/: Static images/icons and other assets.
- src/components/: Reusable domain-specific building blocks (composed by sections).
- src/sections/:
  - navbar.jsx: Top navigation; branding, actions, and links.
  - sidebar.jsx: Side navigation or filters; collapsible.
  - hero.jsx: Prominent header/intro section of a page.
  - window.jsx: Panel/container for content and actions.
  - footer.jsx: Site/app footer.
- src/UI/:
  - button.jsx: Button primitive with variants/sizes.
  - card.jsx: Content container with optional header/footer.
  - DatePicker.jsx: Date selection input.
  - monthYearPicker.jsx: Month/Year selector.
  - pagination.jsx: Page navigation controls.
  - link.jsx: Internal/external link wrapper.
- src/utils/fetch.js: Thin wrapper around fetch; base URL, helpers.
- src/data/sample.json: Local mock/sample data.
- index.html: HTML entry.
- vite.config.js: Vite configuration.
- eslint.config.js: ESLint flat config.
- package.json: Scripts and dependencies.

## Props Reference (Key Components)
- UI/button
  - variant?: "solid" | "outline" | "ghost"
  - size?: "sm" | "md" | "lg"
  - disabled?: boolean
  - onClick?: () => void
  - type?: "button" | "submit" | "reset"
- UI/card
  - title?: string
  - footer?: ReactNode
  - children: ReactNode
- UI/DatePicker
  - value: Date | string
  - onChange: (value: Date) => void
  - min?: Date
  - max?: Date
  - format?: string
- UI/monthYearPicker
  - month: number  // 0-11
  - year: number
  - onChange: ({ month, year }) => void
- UI/pagination
  - page: number
  - pageSize: number
  - total: number
  - onPageChange: (page: number) => void
- UI/link
  - href?: string
  - to?: string      // if using a router
  - external?: boolean
  - children: ReactNode
- sections/navbar
  - title?: string
  - onToggleSidebar?: () => void
  - actions?: ReactNode
- sections/sidebar
  - open: boolean
  - items?: Array<{ label: string; to?: string; href?: string }>
  - onClose?: () => void
- sections/hero
  - title: string
  - subtitle?: string
  - actions?: ReactNode
- sections/window
  - title?: string
  - onRefresh?: () => void
  - children: ReactNode

Note: Adjust the props to match the actual implementations where they differ.

## Scripts
- npm run dev: Start dev server
- npm run build: Production build
- npm run preview: Preview built app
- npm run lint: Run ESLint (if configured)

## Conventions
- Files: PascalCase for components/sections; keep UI primitives in src/UI.
- Data fetching: Use src/utils/fetch.js; avoid raw fetch in components.
- State and composition: Keep complex UI in sections; reuse primitives from UI.
- Styling: Prefer component-scoped styles; keep globals in App.css.

## Developer
- Developer: Israel Paul
- Contact: israelpaul.k@gmail.com
