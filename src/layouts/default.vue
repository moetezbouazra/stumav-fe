<script setup lang="ts">
import ScrollUpButton from '~/components/buttons/ScrollUpButton.vue'

const route = useRoute()
const { isLoading } = useLoadingStore()

const shouldShowPartnersSection = computed(() => {
  return !route.path.endsWith('products/')
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <PageLoader v-show="isLoading" />
    <div class="flex flex-1 flex-col">
      <TheHeader />
      <main class="flex flex-1 flex-col bg-white text-center">
        <RouterView />
      </main>
      <partners-section v-if="shouldShowPartnersSection" />
      <newsletter-section />
      <TheFooter />
      <ScrollUpButton />
    </div>
  </div>
</template>
