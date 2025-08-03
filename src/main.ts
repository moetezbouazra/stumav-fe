import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { createPinia } from 'pinia'

// PrimeVue
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import InputIcon from 'primevue/inputicon'
import IconField from 'primevue/iconfield'
import Menubar from 'primevue/menubar'
import Ripple from 'primevue/ripple'
import Carousel from 'primevue/carousel'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import ProgressSpinner from 'primevue/progressspinner'
import Button from 'primevue/button'
import Message from 'primevue/message'
import type { UserModule } from './types'
import App from './App.vue'

// Swiper
import '~/modules/swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import '@unocss/reset/tailwind.css'
import 'primeicons/primeicons.css'
import './styles/main.scss'
import 'uno.css'
import customPreset from './presets/customPreset'

export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
    scrollBehavior() {
      return {
        top: 0,
      }
    },
  },
  (ctx) => {
    const pinia = createPinia()
    ctx.app.use(pinia)

    // Install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))

    ctx.app
      .use(PrimeVue, {
        ripple: true,
        theme: {
          preset: customPreset,
          options: {
            darkModeSelector: false || 'none',
          },
        },
      })
      .component('InputText', InputText)
      .component('InputIcon', InputIcon)
      .component('Menubar', Menubar)
      .component('IconField', IconField)
      .component('Carousel', Carousel)
      .component('Dialog', Dialog)
      .directive('ripple', Ripple)
      .component('Card', Card)
      .component('Button', Button)
      .component('DataView', DataView)
      .component('ProgressSpinner', ProgressSpinner)
      .component('Message', Message)
  },
)
