<script setup lang="ts">
import { GalleryService } from '~/services/gallery'

const photos = ref()
const currentSlide = ref(0)

onMounted(() => {
  GalleryService.getGallery().then((data: string | any[]) => (photos.value = data.slice(0, 3)))
})
</script>

<template>
  <section class="card">
    <Carousel :value="photos" :page="currentSlide" :num-visible="1" :num-scroll="1" :show-navigators="false" :show-indicators="false" class="relative" allow-autoplay :autoplay-interval="3000" @update:page="(value) => currentSlide = value">
      <template #item="slotProps">
        <img :src="slotProps.data.image" :alt="slotProps.data.name" class="aspect-[16/5] w-full object-cover">
      </template>
      <template #footer>
        <div class="absolute bottom-[3%] left-0 right-0 flex justify-center gap-x-2">
          <div v-for="(product, index) in photos" :key="product.id" class="h-3 w-3 cursor-pointer border-2 border-white rounded-full" :class="currentSlide === index ? 'bg-white' : ''" @click="() => currentSlide = index" />
        </div>
      </template>
    </Carousel>
  </section>
</template>
