# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** project built with the **T3 Stack** (TypeScript, Tailwind CSS, and Next.js) created using `create-t3-app`. The project is named "pourcost-pitchdeck" and appears to be a pitch deck application.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** with strict type checking
- **Tailwind CSS 4.0** for styling
- **React 19** 
- **T3 Environment Variables** (`@t3-oss/env-nextjs`) with Zod validation
- **Geist** font family

## Development Commands

```bash
# Start development server with Turbo
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Preview build locally
npm run preview

# Type checking
npm run typecheck

# Linting
npm run lint
npm run lint:fix

# Code formatting
npm run format:check
npm run format:write

# Combined check (linting + type checking)
npm run check
```

## Architecture

### Directory Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with Geist font
│   └── page.tsx      # Homepage
├── env.js           # Environment variable validation
└── styles/
    └── globals.css  # Global Tailwind styles
```

### Key Files

- **`src/env.js`**: Environment variable validation using `@t3-oss/env-nextjs` and Zod. Add new environment variables here with proper schema validation.
- **`src/app/layout.tsx`**: Root layout component that applies the Geist font and global styles.
- **`tsconfig.json`**: TypeScript configuration with strict settings and path aliases (`~/*` maps to `./src/*`).

### Environment Variables

The project uses T3's environment variable system with type-safe validation:
- Server-side variables are defined in the `server` object
- Client-side variables (prefixed with `NEXT_PUBLIC_`) are defined in the `client` object
- Set `SKIP_ENV_VALIDATION=1` to skip validation during builds

### Code Quality

- **ESLint**: Configured with Next.js core web vitals, TypeScript recommended rules, and strict type checking
- **Prettier**: Configured with Tailwind CSS plugin for class sorting
- **TypeScript**: Strict mode enabled with `noUncheckedIndexedAccess` for extra safety

### Path Aliases

Use the `~/*` alias to import from the `src/` directory:
```typescript
import "~/styles/globals.css";
```

## Development Notes

- The project uses ES modules (`"type": "module"` in package.json)
- Turbo mode is enabled for faster development (`npm run dev`)
- Environment validation is enforced at build time
- TypeScript strict mode with additional safety checks is enabled