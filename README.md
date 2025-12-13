# @g1cloud/open-bluesea-nuxt-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

Nuxt module for [@g1cloud/open-bluesea-core](https://www.npmjs.com/package/@g1cloud/open-bluesea-core) - Vue UI component library.

- [Release Notes](/CHANGELOG.md)

## Features

- Auto-import of 25+ UI components (BSButton, BSTextInput, BSCheckbox, BSSelect, etc.)
- Auto-import of composables (useBlueseaConfig, showNotification, useSavePoint, etc.)
- Vue directives (v-tooltip, v-focus-on-load, v-click-outside)
- Notification system
- Context menu support
- SavePoint (change tracking) support

## Quick Setup

Install the module to your Nuxt application:

```bash
pnpm add @g1cloud/open-bluesea-nuxt-module
```

Add to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: ['@g1cloud/open-bluesea-nuxt-module'],
  openBluesea: {
    // Optional configuration
    dateFormat: 'YYYY-MM-DD HH:mm',
  },
})
```

## Usage

Components are auto-imported and can be used directly in your templates:

```vue
<template>
  <div>
    <BSButton @click="handleClick">
      Click me
    </BSButton>

    <BSTextInput v-model="text" placeholder="Enter text..." />

    <BSCheckbox v-model="checked">
      Check me
    </BSCheckbox>

    <span v-tooltip="'Tooltip text'">Hover me</span>

    <!-- Required for notifications -->
    <BSNotificationContainer />
  </div>
</template>

<script setup>
const text = ref('')
const checked = ref(false)

const handleClick = () => {
  showNotification('Button clicked!', 'info')
}
</script>
```

## Available Components

### Basic Components
- `BSButton` - Button
- `BSPageNavigation` - Pagination
- `BSLoadingIcon` - Loading indicator
- `BSPopup` - Popup/Modal
- `BSTooltip` - Tooltip
- `BSCalendar` - Calendar picker
- `BSCalendarRange` - Date range calendar

### Input Components
- `BSTextInput` - Text input
- `BSNumberInput` - Number input
- `BSTextArea` - Text area
- `BSCheckbox` / `BSCheckboxGroup` - Checkbox
- `BSRadioButton` / `BSRadioButtonGroup` - Radio button
- `BSSelect` / `BSMultiSelect` - Dropdown select
- `BSDateInput` / `BSDateInputPopup` - Date input
- `BSDateRange` / `BSDateRangeInputPopup` - Date range input

### Layout Components
- `BSCardLayout` - Card layout

### Container Components
- `BSNotificationContainer` - Notification container
- `BSContextMenuContainer` - Context menu container
- `BSContextMenu` - Context menu

## Available Composables

- `useBlueseaConfig()` - Access configuration
- `showNotification()` / `showAlarm()` / `closeAlarm()` - Notification system
- `showTooltip()` / `hideTooltip()` - Tooltip control
- `showLoading()` / `hideLoading()` / `withLoading()` - Loading state
- `useContextMenu()` / `createContextMenuPlugin()` - Context menu
- `provideSavePoint()` / `useSavePoint()` - Change tracking
- `provideFieldContext()` / `useFieldContext()` - Field context
- `debounce()` - Debounce utility
- `waitUntil()` / `waitDuring()` / `tryUntil()` - Async utilities

## Configuration Options

```typescript
interface ModuleOptions {
  dateFormat?: string           // Default: 'YYYY-MM-DD HH:mm'
  dateFormatDay?: string        // Default: 'YYYY-MM-DD'
  dateFormatMinute?: string     // Default: 'YYYY-MM-DD HH:mm'
  dateFormatSecond?: string     // Default: 'YYYY-MM-DD HH:mm:ss'
  minDateValue?: string
  maxDateValue?: string
  timeZone?: string
  componentConfig?: {
    popup?: {
      container?: string | HTMLElement
      hideOnScroll?: boolean
    }
    calendar?: {
      startYear?: string
      endYear?: string
    }
  }
}
```

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Run ESLint
pnpm lint

# Run tests
pnpm test

# Type check
pnpm test:types
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@g1cloud/open-bluesea-nuxt-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/@g1cloud/open-bluesea-nuxt-module

[npm-downloads-src]: https://img.shields.io/npm/dm/@g1cloud/open-bluesea-nuxt-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/@g1cloud/open-bluesea-nuxt-module

[license-src]: https://img.shields.io/npm/l/@g1cloud/open-bluesea-nuxt-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/@g1cloud/open-bluesea-nuxt-module

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
