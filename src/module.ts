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
  // Modal components
  'BSModalContainer',
  'BSModalFrame',
  'BSAlertModal',
  'BSYesNoModal',
]

// Component list from @g1cloud/open-bluesea-grid
const gridComponents = [
  'BSGrid',
  'BSGridCell',
  'BSGridCellCheckbox',
  'BSGridCellDragHandle',
  'BSGridCellEdit',
  'BSGridCellSerialNo',
  'BSGridColumnSettingModal',
  'BSGridControl',
  'BSGridHeaderCell',
  'BSGridHeaderCellCheckbox',
  'BSGridHeaderCellResizeHandle',
  'BSGridHeaderCellSerialNo',
  'BSGridLookup',
  'BSGridRow',
  'BSTextFilter',
  'BSDateRangeFilter',
  'BSDateRangeFilters',
  'BSDateRangePresets',
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
  // Modal
  'createModalPlugin',
  'useModal',
  'useModalHandle',
  'provideModalHandle',
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

    // Add CSS - use the compiled CSS directly from dist
    nuxt.options.css.push('@g1cloud/open-bluesea-core/dist/open-bluesea-core.css')
    nuxt.options.css.push('@g1cloud/open-bluesea-grid/css/bluesea-grid.css')

    // Add Google Material Icons font
    nuxt.options.app.head.link = nuxt.options.app.head.link || []
    nuxt.options.app.head.link.push({
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    })

    // Pass module options to runtime config
    nuxt.options.runtimeConfig.public.openBluesea = {
      ...nuxt.options.runtimeConfig.public.openBluesea as Record<string, unknown>,
      ...options,
    }

    // Add runtime plugin
    addPlugin(resolver.resolve('./runtime/plugin'))

    // Auto-import components from @g1cloud/open-bluesea-core
    for (const name of components) {
      addComponent({
        name,
        export: name,
        filePath: '@g1cloud/open-bluesea-core',
      })
    }

    // Auto-import components from @g1cloud/open-bluesea-grid
    for (const name of gridComponents) {
      addComponent({
        name,
        export: name,
        filePath: '@g1cloud/open-bluesea-grid',
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
