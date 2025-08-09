<script setup lang="ts">
const route = useRoute()
const { isLoading } = useLoadingStore()

watch(() => isLoading, () => {
  console.log('isLoading', isLoading)
})
</script>

<template>
  <div>
    <PageLoader v-show="isLoading" />
    <div>
      <TheHeader />
      <main class="flex flex-col bg-white text-center">
        <RouterView />
      </main>
      <partners-section v-if="route.path !== '/partners'" />
      <newsletter-section />
      <TheFooter />
      <ScrollUpButton />
    </div>
  </div>
</template>
