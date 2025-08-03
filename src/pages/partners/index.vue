<script setup lang="ts">
import { PartnersService } from '~/services/partners/partnersList'

const partners = ref()

onMounted(() => {
  PartnersService.getPartners().then((data: string | any[]) => (partners.value = data.slice(0, 9)))
})
</script>

<template>
  <div />
</template>
