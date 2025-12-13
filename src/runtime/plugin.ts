import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { BlueseaPlugin } from '@g1cloud/open-bluesea-core'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const blueseaOptions = config.public.openBluesea || {}

  nuxtApp.vueApp.use(BlueseaPlugin, blueseaOptions)
})
