<script setup lang="ts">
</script>

<template>
  <header
    class="absolute fixed top-0 z-100 max-h-min w-full px-4 pt-4 duration-600 drop-shadow-xl"
    :class="[hasScrolled || !isAtHomePage ? 'bg-white' : 'bg-transparent']"
  >
    <TopBar />
    <NavBar />
  </header>
</template>
