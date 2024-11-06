import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  // Loading state
  const isLoading = ref(false)

  // Function to start loading
  function startLoading() {
    isLoading.value = true
  }

  // Function to stop loading
  function stopLoading() {
    isLoading.value = false
  }

  return {
    isLoading,
    startLoading,
    stopLoading,
  }
})

// Hot module replacement support
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLoadingStore as any, import.meta.hot))
