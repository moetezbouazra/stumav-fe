<script setup lang="ts">
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperCore from 'swiper'
import { PartnersService } from '~/services/partners'

const modules = [Pagination, Navigation]
const breakpoints = {
  640: {
    slidesPerView: 1, // 1 slide per view for small screens
  },
  1024: {
    slidesPerView: 5, // 6 slides per view for large screens
  },
}
const partners = ref()
const swiperRef = ref<SwiperCore>()

onMounted(() => {
  PartnersService.getPartners().then((data: string | any[]) => (partners.value = data.slice(0, 9)))
})
</script>

<template>
  <section class="relative bg-white px-7 py-6">
    <div class="relative z-40 flex flex-col items-center gap-y-10">
      <div>
        <h3>
          Nos <strong>partenaires</strong>
        </h3>
        <hr class="mx-auto mt-5 h-px max-w-65 w-full border-none bg-[#ddd] text-left">
      </div>

      <Swiper
        ref="swiperRef"
        :space-between="18"
        :modules="modules"
        class="w-43 sm:w-270"
        autoplay
        :breakpoints
      >
        <SwiperSlide v-for="partner in partners" :key="partner.id">
          <img :src="partner.image" :alt="partner.name" class="w-42.5 border border-[#d1d2d4]">
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
