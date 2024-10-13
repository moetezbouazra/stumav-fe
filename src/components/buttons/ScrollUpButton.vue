<script setup lang="ts">
const isVisible = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

function checkScrollPosition() {
  isVisible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', checkScrollPosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScrollPosition)
})
</script>

<template>
  <div v-show="isVisible" class="fixed bottom-0 right-0 z-[9999] h-10 w-15 flex cursor-pointer items-center justify-center bg-primary text-sm text-white opacity-70 transition-all duration-300 ease-in-out hover:opacity-100" @click="scrollToTop">
    <div i-fa6-solid-chevron-up absolute />
  </div>
</template>
