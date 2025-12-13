import { defineNuxtPlugin } from '#app'
import { vTooltip, vFocusOnLoad, vClickOutside } from '@g1cloud/open-bluesea-core'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('tooltip', vTooltip)
  nuxtApp.vueApp.directive('focus-on-load', vFocusOnLoad)
  nuxtApp.vueApp.directive('click-outside', vClickOutside)
})
