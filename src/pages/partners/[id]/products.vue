<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import Button from 'primevue/button'
import { PartnerProductsService, type Product } from '~/services/partners/partnersProducts'
import ProductsGrid from '~/components/products/ProductsGrid.vue'
import type { Partner } from '~/services/partners/partnersList'
import { PartnersService } from '~/services/partners/partnersList'

const route = useRoute()
const router = useRouter()
const partnerId = computed(() => (route.params as { id: string }).id)
const partnerName = ref('')

const products = ref<Product[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)

PartnersService.getPartnerById(partnerId.value).then((data: Partner | undefined) => {
  if (data) {
    partnerName.value = data.title
  }
  else {
    partnerName.value = 'Unknown partner'
  }
})

onMounted(async () => {
  try {
    isLoading.value = true
    products.value = await PartnerProductsService.getPartnerProducts(partnerId.value)
    if (products.value.length === 0) {
      error.value = 'This partner currently has no products available.'
    }
  }
  catch (err) {
    error.value = 'Failed to load products. Please try again later.'
    console.error(err)
  }
  finally {
    isLoading.value = false
  }
})

function navigateToPartners() {
  router.push('/partners/')
}

const homeItem = ref({
  icon: 'pi pi-home',
  command: () => router.push('/'),
})

const breadcrumbItems = computed(() => [
  {
    label: 'Partners',
    command: () => router.push('/partners/'),
  },
  {
    label: `Partner ${partnerId.value}`,
    command: () => router.push(`/partners/${partnerId.value}/products`),
  },
])

function handleBreadcrumbClick(event: { item: { command: () => void } }) {
  if (event.item.command) {
    event.item.command()
  }
}
</script>

<template>
  <section class="bg-gray-50 px-4 py-12 lg:px-8 md:px-6">
    <div class="mx-auto max-w-7xl">
      <div class="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <Breadcrumb
            class="!bg-transparent"
            :home="homeItem"
            :model="breadcrumbItems"
            @item-click="handleBreadcrumbClick"
          />
          <h1 class="mt-2 text-3xl text-primary font-bold">
            Produits de <span class="text-[#E6D134]">{{ partnerName }}</span>
          </h1>
        </div>
        <Button
          class="!bg-primary opacity-90 !border-gray-300 !text-white hover:opacity-100"
          icon="pi pi-arrow-left"
          label="Retour aux partenaires"
          outlined
          @click="navigateToPartners"
        />
      </div>

      <div class="border border-[#e2e8f0] rounded-lg bg-white p-6 pb-0">
        <ProgressSpinner
          v-if="isLoading"
          class="mx-auto my-16"
        />

        <Message
          v-else-if="error"
          severity="error"
          :closable="false"
          class="mb-6"
        >
          {{ error }}
          <Button
            label="Browse Other Partners"
            icon="pi pi-users"
            class="mt-2"
            @click="navigateToPartners"
          />
        </Message>

        <ProductsGrid
          v-else
          :products="products"
        />
      </div>
    </div>
  </section>
</template>
