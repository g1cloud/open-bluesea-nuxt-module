import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { BlueseaPlugin, createModalPlugin, createContextMenuPlugin } from '@g1cloud/open-bluesea-core'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const blueseaOptions = config.public.openBluesea || {}

  nuxtApp.vueApp.use(BlueseaPlugin, blueseaOptions)
  nuxtApp.vueApp.use(createModalPlugin())
  nuxtApp.vueApp.use(createContextMenuPlugin())
})
