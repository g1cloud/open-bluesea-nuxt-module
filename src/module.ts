import { defineNuxtModule, addPlugin, createResolver, addImports, addComponent } from '@nuxt/kit'

// Popup component configuration
export interface PopupComponentConfig {
  container?: string | HTMLElement
  hideOnScroll?: boolean
}

// Calendar component configuration
export interface CalendarComponentConfig {
  startYear?: string
  endYear?: string
}

// Component configuration
export interface ComponentConfig {
  popup?: PopupComponentConfig
  calendar?: CalendarComponentConfig
}

// Module options TypeScript interface definition
export interface ModuleOptions {
  dateFormat?: string
  dateFormatDay?: string
  dateFormatMinute?: string
  dateFormatSecond?: string
  minDateValue?: string
  maxDateValue?: string
  timeZone?: string
  componentConfig?: ComponentConfig
}

// Component list from @g1cloud/open-bluesea-core
const components = [
  // Basic components
  'BSButton',
  'BSPageNavigation',
  'BSLoadingIcon',
  'BSPopup',
  'BSTooltip',
  'BSCalendar',
  'BSCalendarRange',
  // Input components
  'BSTextInput',
  'BSNumberInput',
  'BSTextArea',
  'BSCheckbox',
  'BSCheckboxGroup',
  'BSRadioButton',
  'BSRadioButtonGroup',
  'BSSelect',
  'BSMultiSelect',
  'BSDateInput',
  'BSDateInputPopup',
  'BSDateRange',
  'BSDateRangeInputPopup',
  // Layout components
  'BSCardLayout',
  // Container components
  'BSNotificationContainer',
  'BSContextMenuContainer',
  'BSContextMenu',
]

// Composables to auto-import
const composables = [
  // Config
  'useBlueseaConfig',
  // Context Menu
  'useContextMenu',
  'useContextMenuOptional',
  'createContextMenuPlugin',
  // SavePoint
  'provideSavePoint',
  'useSavePoint',
  'cancelProvidedSavePoint',
  // Field Context
  'provideFieldContext',
  'useFieldContext',
  // Notification
  'showNotification',
  'showAlarm',
  'closeAlarm',
  'showTooltip',
  'hideTooltip',
  'isTooltipDisplayed',
  'showLoading',
  'hideLoading',
  'withLoading',
  // Utilities
  'debounce',
  'notNull',
  'waitUntil',
  'waitDuring',
  'tryUntil',
]

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'open-bluesea-nuxt-module',
    configKey: 'openBluesea',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Pass module options to runtime config
    nuxt.options.runtimeConfig.public.openBluesea = {
      ...nuxt.options.runtimeConfig.public.openBluesea as Record<string, unknown>,
      ...options,
    }

    // Add runtime plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Auto-import components
    for (const name of components) {
      addComponent({
        name,
        export: name,
        filePath: '@g1cloud/open-bluesea-core',
      })
    }

    // Auto-import composables
    for (const name of composables) {
      addImports({
        name,
        from: '@g1cloud/open-bluesea-core',
      })
    }

    // Add directives plugin
    addPlugin(resolver.resolve('./runtime/directives'))
  },
})
