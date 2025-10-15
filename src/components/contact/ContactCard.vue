<script setup lang="ts">
import type { ContactData } from '~/services/contact'

defineProps({
  contact: {
    type: Object as PropType<ContactData>,
    required: true,
  },
})
</script>

<template>
  <section>
    <div class="mx-12 mx-auto my-2 max-w-270 w-full px-4 container">
      <div
        class="text-md mb-4 py-8 font-light custom-shadow"
      >
        <div class="grid grid-cols-1 justify-around gap-8 md:grid-cols-2 lg:flex md:gap-0">
          <div>
            <div class="i-fa6-solid-store mx-auto mb-2 text-3xl text-primary" />
            <h5 class="text-[20px] text-primary font-600">
              Siège social
            </h5>
          </div>

          <div>
            <div class="i-fa6-solid-location-dot mx-auto mb-2 text-xl text-primary" />

            <p class="text-center">
              <strong class="text-primary">Adresse</strong>
              <br>
              <a :href="`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`" target="_blank" class="hover:text-primary">
                {{ contact.address }}
              </a>
            </p>
          </div>
          <div>
            <div class="i-fa6-solid-envelope mx-auto mb-2 text-xl text-primary" />

            <p class="text-center">
              <strong class="text-primary">Email</strong>
              <br>
              <a :href="`mailto:${contact.email}`" class="hover:text-primary">
                {{ contact.email }}
              </a>
            </p>
          </div>

          <div>
            <div class="i-fa6-solid-phone mx-auto mb-2 text-xl text-primary" />
            <p class="text-center">
              <strong class="text-primary">Téléphone</strong>
            </p>
            <div v-for="phone in contact.phones" :key="phone" class="text-center">
              <a :href="`tel:${phone.replace(/\s/g, '')}`" class="hover:text-primary">
                {{ phone }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
