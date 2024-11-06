import NProgress from 'nprogress'
import type { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    const loadingStore = useLoadingStore()

    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        NProgress.start()
        loadingStore.startLoading()
      }
    })
    router.afterEach(() => {
      NProgress.done()
      loadingStore.stopLoading()
    })
  }
}
