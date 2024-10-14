<script setup lang="ts">
import type { Article } from '~/types/article'

defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
})
</script>

<template>
  <div class="h-90 max-h-90 overflow-hidden bg-white">
    <img :src="article?.image" :alt="article.title" class="h-45 max-h-45 w-full object-cover zoom-in">
    <div class="relative h-45 max-h-45 flex flex-col items-center justify-around bg-white">
      <div>
        <div class="text-[13px] text-primary font-600">
          {{ article.date }}
        </div>
        <div class="text-lg text-[#3c3c3c] font-500">
          {{ article.title }}
        </div>
      </div>
      <a class="w-fit uppercase btn" href="/">
        voir plus
      </a>
    </div>
  </div>
</template>
