<script setup lang="ts">
const route = useRoute()
</script>

<template>
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
</template>
