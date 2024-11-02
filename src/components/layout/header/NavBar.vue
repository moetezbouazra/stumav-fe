<script setup lang="ts">
import InputIcon from 'primevue/inputicon'

const items = ref([
  {
    label: 'Accueil',
    link: '/',
  },
  {
    label: 'A Propos',
    link: '/about',
  },
  // {
  //   label: 'Produits',
  //   link: '/products',
  // },
  {
    label: 'Nos Partenaires',
    link: '/partners',
  },
  // {
  //   label: 'Devis en Ligne',
  //   link: '/quotation',
  // },
  {
    label: 'Contact',
    link: '/contact',
  },
])
const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="card bg-primary">
    <Menubar :model="items">
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center" :class="[route.path === item.link ? 'bg-primary bg-[#E6D134]' : '']" v-bind="props.action" @click="router.push(item.link)">
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
      <template #buttonicon>
        <div class="i-fa6-solid-bars text-white" />
      </template>
    </Menubar>
  </div>
</template>
