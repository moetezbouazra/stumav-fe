<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import { NewsService } from '~/services/news'

const modules = [Pagination, Navigation]
const articles = ref()
const swiperRef = ref<SwiperCore>()

const breakpoints = {
  640: {
    slidesPerView: 1, // 1 slide per view for small screens
  },
  1024: {
    slidesPerView: 3,
  },
}

onMounted(() => {
  NewsService.getNews().then((data: string | any[]) => (articles.value = data.slice(0, 9)))
})
</script>

<template>
  <section class="relative px-7 py-6 bg-alu-texture">
    <div class="relative z-40 flex flex-col items-center gap-y-10">
      <div>
        <h3>
          Dernières <strong>actualités</strong>
        </h3>
        <hr class="mx-auto mt-5 h-px max-w-65 w-full border-none bg-[#ddd] text-left">
      </div>

      <div class="flex items-center gap-x-4">
        <div class="swiper-button-prev-custom-news i-fa6-solid-chevron-left text-2xl text-primary !overflow-hidden" />

        <Swiper
          ref="swiperRef"
          :space-between="20"
          :modules="modules"
          :navigation="{
            nextEl: '.swiper-button-next-custom-news',
            prevEl: '.swiper-button-prev-custom-news',
          }"
          :breakpoints
          class="w-43 sm:w-270"
        >
          <SwiperSlide v-for="article in articles" :key="article.id">
            <article-swiper-card :article />
          </SwiperSlide>
        </Swiper>

        <div class="swiper-button-next-custom-news i-fa6-solid-chevron-right text-2xl text-primary" />
      </div>

      <a class="w-fit bg-primary text-white btn hover:brightness-70" href="/">
        Voir toutes les actualités
      </a>
    </div>
  </section>
</template>
