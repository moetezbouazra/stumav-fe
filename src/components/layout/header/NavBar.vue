<script setup lang="ts">
import InputIcon from 'primevue/inputicon'

const items = ref([
  {
    label: 'Accueil',
  },
  {
    label: 'A Propos',
  },
  {
    label: 'Produits',
  },
  {
    label: 'Nos Partenaires',
  },
  {
    label: 'Devis en Ligne',
  },
  {
    label: 'Contact',
  },
])
</script>

<template>
  <div class="card bg-primary">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" v-bind="props.action">
          <span>{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <IconField>
            <InputText placeholder="Search" type="text" class="h-[80%] w-32 !text-primary !h-8 sm:w-auto !bg-white" />
            <InputIcon class="pi pi-search !text-primary" />
          </IconField>
        </div>
      </template>
    </Menubar>
  </div>
</template>
