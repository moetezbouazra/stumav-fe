<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <hero-section />
    <about-section />
    <latest-products-section />
    <!-- <latest-news-section /> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
