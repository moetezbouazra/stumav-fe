<script setup lang="ts">
</script>

<template>
  <!-- header here is duplicated to ensure semantic html while achieving specific styling -->
  <header
    class="max-h-min w-full bg-white"
  >
    <TopBar />
  </header>
  <header class="sticky top-0 z-10">
    <NavBar />
  </header>
</template>
