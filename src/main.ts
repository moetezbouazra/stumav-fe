import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'

import { routes } from 'vue-router/auto-routes'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import type { UserModule } from './types'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.use(PrimeVue, {
      pt: {
        button: {
          root: { class: 'bg-teal-500 hover:bg-teal-700 cursor-pointer text-white p-4 rounded border-0 flex gap-2' },
          label: 'text-white font-bold text-xl', // OR { class: 'text-white font-bold text-xl' }
          icon: 'text-white text-2xl',
        },
        panel: {
          header: 'bg-primary text-primary-contrast border-primary',
          content: 'border-primary text-lg text-primary-700',
          title: 'bg-primary text-primary-contrast text-xl',
          toggler: 'bg-primary text-primary-contrast hover:text-primary hover:bg-primary-contrast',
        },
      },
    })
  },
)
