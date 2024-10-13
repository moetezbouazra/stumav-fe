<script setup lang="ts">
import { ContactService } from '~/services/contact'

const contacts = ref()

onMounted(() => {
  ContactService.getContact().then((data: string | any[]) => (contacts.value = data.slice(0, 9)))
})
</script>

<template>
  <map-embed />
  <h3 class="mx-12 mx-auto mb-6 mt-12 max-w-270 w-full px-4 text-left text-[28px] container">
    Nos <strong>coordonnées</strong>
  </h3>

  <contact-card v-for="contact in contacts" :key="contact.id" :contact />
  <contact-form />
</template>
