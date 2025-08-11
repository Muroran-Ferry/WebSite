# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 3-based website for the Muroran Ferry Terminal (室蘭フェリーターミナル), providing ferry schedule information, facility details, and tourist information for ferry services between Muroran and other ports in Japan.

## Development Commands

### Package Management

- **Package Manager**: pnpm v10.8.0 (enforced via package.json)
- **Install dependencies**: `pnpm install`

### Development

- **Run dev server**: `pnpm dev` (starts on http://localhost:3000)
- **Build for production**: `pnpm build`
- **Generate static site**: `pnpm generate`
- **Preview production build**: `pnpm preview`

### Code Quality

- **Run all lints**: `pnpm lint`
- **Lint JavaScript/TypeScript**: `pnpm lint:js`
- **Lint styles**: `pnpm lint:style`
- **Check formatting**: `pnpm lint:prettier`
- **Fix all linting issues**: `pnpm lintfix`

## Architecture Overview

### Tech Stack

- **Framework**: Nuxt 3 with Vue 3 composition API
- **Styling**: Tailwind CSS with PostCSS
- **Type Safety**: TypeScript with Zod for schema validation
- **Analytics**: Google Analytics (vue-gtag-next) and Google AdSense integration
- **External APIs**: Multiple APIs for ferry status, announcements, holidays, and pricing

### Project Structure

#### Core Application Files

- `app.vue`: Main application wrapper with site header/footer, Freshdesk widget integration, and scroll-hint initialization
- `app.config.ts`: Application configuration (site title)
- `nuxt.config.ts`: Nuxt configuration with module setup, runtime config for API endpoints, and build settings

#### Components Architecture

- **Layout Components**: `SiteHeader`, `SiteFooter`, `PageSection`, `ReversePageSection`
- **Ferry Schedule Components**: `RouteSchedules`, `SeiranRouteSchedule`, `MiyaranRouteSchedule`, `ScheduleItem`
- **Status & Announcements**: `SeiranStatus`, `AnnouncementList`, `AnnouncementItem`
- **Pricing Components**: `TicketPrice`, `PriceClassCalendar`, `SeiranPriceSchedule`
- **Information Sections**: `FacilityInformation`, `AccessInformation`, `BoardingGuide`, `TouristInformation`
- **Interactive Elements**: `GooglePlacesPhotos`, `FancyBox`, `MainMenu`

#### API Integration

- **Schemas** (`/schemas`): Zod schemas for validating API responses
  - `seiran_status.ts`: Ferry operation status
  - `announcement_schema.ts`: Service announcements
  - `holiday_schema.ts`: Holiday calendar data
  - `price_schedule_schema.ts`: Pricing schedule data

#### Plugins

- `analytics.ts`: Google Analytics setup
- `vue-masonry-wall.ts`: Masonry layout for photo galleries

### Key Features

1. **Real-time Ferry Status**: Fetches and displays current ferry operation status with automatic refresh every 2 minutes
2. **Bot Detection**: Uses `isbot` library to conditionally render heavy components like Google Places photos
3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
4. **SEO Optimization**: JSON-LD structured data, Open Graph tags, and proper meta tags
5. **External Service Integration**: Freshdesk contact widget, Google Maps API, Cloudimage CDN

### Environment Variables

Required environment variables (see `sample.env`):

- API endpoints: `NUXT_PUBLIC_ANNOUNCEMENT_API_URL`, `NUXT_PUBLIC_SEIRAN_STATUS_API_URL`, etc.
- Service keys: `NUXT_PUBLIC_GOOGLE_MAPS_API_KEY`, `NUXT_PUBLIC_GTAG_ID`, `NUXT_PUBLIC_ADSENSE_CLIENT_ID`
- Configuration: `NUXT_PUBLIC_SITE_DESCRIPTION`, `NUXT_PUBLIC_BASE_URL`

### Code Conventions

- **Component Naming**: PascalCase for Vue components
- **Composition API**: Use `<script setup lang="ts">` syntax
- **TypeScript**: Strict typing with Zod for API response validation
- **Styling**: Tailwind utility classes, custom classes prefixed for eslint whitelist
- **Lazy Loading**: Use `Lazy` prefix for components that should be loaded on-demand
- **Client-Only Rendering**: Wrap browser-specific code in `<ClientOnly>` component

### Git Workflow

- **Pre-commit hooks**: Configured via Husky, runs linting on staged files
- **Commit conventions**: Follows conventional commits (enforced by commitlint)
- **Main branch**: `master` (use for PRs)
