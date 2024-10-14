<script setup lang="ts">
import { PartnersService } from '~/services/partners'

const partners = ref()

onMounted(() => {
  PartnersService.getPartners().then((data: string | any[]) => (partners.value = data.slice(0, 9)))
})
</script>

<template>
  <section class="px-8 py-16 text-left lg:px-0">
    <div class="mx-auto md:max-w-270 container">
      <div>
        <h3>
          Nos <strong>partenaires</strong>
        </h3>
        <hr class="my-6 h-px max-w-65 w-full border-none bg-[#ddd] text-left">
      </div>

      <div class="flex flex-wrap justify-center gap-6">
        <img v-for="partner in partners" :key="partner.id" :src="partner.image" :alt="partner.name" class="w-42.5 border border-[#d1d2d4]">
      </div>
    </div>
  </section>
</template>
