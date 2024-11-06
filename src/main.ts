import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { routes } from 'vue-router/auto-routes'
import { createPinia } from 'pinia'

// PrimeVue
import { definePreset } from '@primevue/themes'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import Menubar from 'primevue/menubar'
import Ripple from 'primevue/ripple'
import Aura from '@primevue/themes/nora'
import Carousel from 'primevue/carousel'
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

const customPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
  },
})

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
        },
      })
      .component('InputText', InputText)
      .component('Menubar', Menubar)
      .component('IconField', IconField)
      .component('Carousel', Carousel)
      .directive('ripple', Ripple)
  },
)
