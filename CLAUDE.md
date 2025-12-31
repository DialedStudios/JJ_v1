# CLAUDE.md

This file provides guidance to Claude Code when working with this codebase.

## Project Overview

Dialed Studios marketing website - a multi-page site with Apple-inspired minimalist design. Built with vanilla JavaScript, no frameworks.

## Tech Stack

- **Build Tool:** Vite 5.4
- **JavaScript:** Vanilla ES modules (no React/Vue/etc.)
- **Styling:** Custom CSS with CSS Grid and modern features
- **Fonts:** Space Grotesk (display), Inter (body)
- **Node Version:** 20 (see .nvmrc)

## Project Structure

```
src/
  main.js      # All JavaScript functionality
  style.css    # Global styles and design system
public/        # Static assets
index.html     # Landing page
pricing.html   # Pricing tiers page
newsletter.html # Newsletter signup page
vite.config.js # Multi-page Vite configuration
```

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

## Code Patterns

### JavaScript
- Uses IntersectionObserver for scroll animations
- Respects `prefers-reduced-motion` for accessibility
- Functions: `initReveal()`, `highlightNav()`, `wireNewsletterForms()`

### CSS Design System
- Background: `#060708`
- Accent (lime): `#c8ff6e`
- Secondary (cyan): `#7bf0c6`
- Text: `#f5f6f8`
- Uses CSS custom properties and gradients

### HTML Structure
- Each page imports `src/main.js` and `src/style.css`
- Consistent nav, hero sections, and card layouts
- Vite handles multi-page build via rollupOptions in config

## Important Notes

- Zero-framework approach - keep it vanilla JS
- Accessibility matters - maintain motion preference support
- Performance-focused - minimize JavaScript payload
- Multi-page site - add new pages to vite.config.js input object
