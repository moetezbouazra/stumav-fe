<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import { onMounted, ref } from 'vue'
import { ProductService } from '~/services/product'

const modules = [Pagination, Navigation]
const products = ref()
const swiperRef = ref<SwiperCore>()

const breakpoints = {
  640: {
    slidesPerView: 1, // 1 slide per view for small screens
  },
  1024: {
    slidesPerView: 4,
  },
}

onMounted(() => {
  ProductService.getProducts().then((data: string | any[]) => {
    products.value = data.slice(0, 9)
  })

  onMounted(() => {
    if (swiperRef.value) {
      swiperRef.value.navigation.update()
    }
  })
})
</script>

<template>
  <section class="parallax relative px-7 py-6 bg-products">
    <div class="after:bg-primary after:absolute after:inset-0 after:z-30 after:block after:opacity-50 after:content-empty">
      <div class="relative z-40 flex flex-col items-center gap-y-10">
        <div>
          <h3 class="text-white">
            Dernières <strong>produits</strong>
          </h3>
          <hr class="mx-auto mt-5 h-px max-w-65 w-full border-none bg-white text-left">
        </div>

        <div class="flex items-center gap-x-4">
          <div class="i-fa6-solid-chevron-left swiper-button-prev-custom-product text-2xl text-white" />

          <Swiper
            ref="swiperRef"
            :space-between="20"
            :modules="modules"
            :navigation="{
              nextEl: '.swiper-button-next-custom-product',
              prevEl: '.swiper-button-prev-custom-product',
            }"
            :breakpoints
            class="w-43 sm:w-270"
          >
            <SwiperSlide v-for="product in products" :key="product.id">
              <img :src="product.image" :alt="product.name" class="h-42 object-cover">
            </SwiperSlide>
          </Swiper>

          <div class="i-fa6-solid-chevron-right swiper-button-next-custom-product text-2xl text-white" />
        </div>

        <a class="w-fit border-white bg-white btn" href="/">
          Accéder au catalogue
        </a>
      </div>
    </div>
  </section>
</template>
