# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt 4 module (`open-bluesea-nuxt-module`) built using `@nuxt/module-builder`. It follows the standard Nuxt module structure and provides a plugin that gets injected into consuming Nuxt applications.

이 nuxt module 은 `@g1cloud/open-bluesea-core` 와 `@g1cloud/open-bluesea-grid` 라이브러리를 nuxt 에서 사용하기 위한 모듈이다.

`open-bluesea-core` 와 `open-bluesea-grid` 의 사용자 가이드 문서는 `/Users/kimos/git/blue-6/open-bluesea/docs` 에 있다.

## Commands

```bash
# Install dependencies
pnpm install

# Development - prepare types and start playground
pnpm dev:prepare    # Build module stub and generate types
pnpm dev            # Run playground with hot reload

# Build
pnpm prepack        # Build module for distribution

# Testing
pnpm test           # Run tests with Vitest
pnpm test:watch     # Run tests in watch mode
pnpm test:types     # Type check with vue-tsc

# Linting
pnpm lint           # Run ESLint
```

## Architecture

### Module Structure
- `src/module.ts` - Main module definition using `defineNuxtModule`. Configures the module with `configKey: 'myModule'` for nuxt.config options
- `src/runtime/plugin.ts` - Runtime plugin injected into Nuxt apps via `defineNuxtPlugin`
- `playground/` - Development playground for testing the module locally
- `test/` - Vitest tests using `@nuxt/test-utils/e2e`

### Key Patterns
- Module options interface defined in `src/module.ts` as `ModuleOptions`
- Runtime files (plugins, composables, components) go in `src/runtime/`
- Plugin paths should omit `.ts` extension as they get transpiled to `.mjs`
- Test fixtures live in `test/fixtures/` with their own `nuxt.config.ts`

### Configuration
- Module consumers configure via `myModule: {}` in their nuxt.config
- ESLint uses Nuxt's flat config with `stylistic` and `tooling` rules enabled
