<!-- File: /src/components/products/ProductsGrid.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import DataView from 'primevue/dataview'
import Select from 'primevue/select'
import Button from 'primevue/button'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import type { Product } from '~/services/partners/partnersProducts'

defineProps<{
  products: Product[]
}>()

const router = useRouter()
const { width } = useWindowSize()
const layout = ref<'grid' | 'list'>('list')

const gridOptions = ref({
  paginator: true,
  rows: 8,
  paginatorPosition: 'bottom' as const,
  currentPageReportTemplate: 'Showing {first} to {last} of {totalRecords} products',
  dataKey: 'id',
})

const sortOptions = ref([
  { label: 'Prix élevé à faible', value: '!price' },
  { label: 'Prix faible à élevé', value: 'price' },
  { label: 'Note élevée à faible', value: '!rating' },
  { label: 'Note faible à élevée', value: 'rating' },
  { label: 'Nom A-Z', value: 'name' },
  { label: 'Nom Z-A', value: '!name' },
])

const sortKey = ref()
const sortOrder = ref()
const sortField = ref()

function onSortChange(event: { value: { value: string } }) {
  const value = event.value.value
  sortOrder.value = value.startsWith('!') ? -1 : 1
  sortField.value = value.replace('!', '')
}

function getSeverity(product: Product) {
  switch (product.inventoryStatus) {
    case 'En stock':
      return 'success'
    case 'Stock faible':
      return 'warning'
    case 'Repture de stock':
      return 'danger'
    default:
      return null
  }
}

const isMobile = computed(() => width.value < 768)

onMounted(() => {
  layout.value = isMobile.value ? 'grid' : 'list'
})
</script>

<template>
  <div class="products-container">
    <DataView
      :value="products"
      :layout="layout"
      :paginator="gridOptions.paginator"
      :rows="gridOptions.rows"
      :paginator-position="gridOptions.paginatorPosition"
      :current-page-report-template="gridOptions.currentPageReportTemplate"
      :data-key="gridOptions.dataKey"
      :sort-order="sortOrder"
      :sort-field="sortField"
    >
      <template #header>
        <div class="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 class="text-left text-2xl text-primary font-bold">
              Produits partenaires
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              Parcourez notre collection exclusive proposée par nos partenaires de confiance.
            </p>
          </div>
          <div class="w-full flex items-center gap-4 md:w-auto">
            <Select
              v-if="!isMobile"
              v-model="layout"
              :options="['grid', 'list']"
              option-label=""
              class="w-28"
            >
              <template #value="slotProps">
                <div class="flex items-center gap-2">
                  <span class="capitalize">{{ slotProps.value }}</span>
                </div>
              </template>
              <template #option="slotProps">
                <div class="flex items-center gap-2">
                  <i :class="`pi i-carbon-${slotProps.option}`" />
                  <span class="capitalize">{{ slotProps.option }}</span>
                </div>
              </template>
            </Select>
          </div>
        </div>
      </template>

      <template #grid="{ items }">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          <div
            v-for="product in items"
            :key="product.id"
            class="col-span-1"
          >
            <div class="surface-card border-round h-full flex flex-col overflow-hidden border-1 shadow-sm transition-all hover:shadow-md">
              <div class="relative">
                <img
                  :src="product.image || '/images/products/product-image-placeholder.svg'"
                  :alt="product.name"
                  class="h-48 w-full object-cover"
                >
              </div>
              <div class="flex flex-1 flex-col p-4">
                <div class="mb-2 flex items-start justify-between">
                  <h3 class="text-lg text-gray-900 font-semibold line-clamp-2">
                    {{ product.name }}
                  </h3>
                </div>
                <div v-if="product.rating" class="mb-3 flex items-center">
                  <Rating :model-value="product.rating" readonly :cancel="false" class="mr-2 [&>span]:text-sm" />
                  <span class="text-sm text-gray-500">{{ product.rating.toFixed(1) }}</span>
                </div>
                <p class="text-surface-600 mb-4 text-sm line-clamp-3">
                  {{ product.description }}
                </p>
                <div class="mt-auto flex justify-between gap-2">
                  <!-- <Button
                    icon="pi pi-shopping-cart"
                    label="Acheter "
                    size="small"
                    :disabled="product.inventoryStatus === 'Repture de stock'"
                    class="flex-1 bg-[#E6D134]"
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #list="{ items }">
        <div class="flex flex-col">
          <div
            v-for="(product, index) in items"
            :key="product.id"
            class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center"
            :class="{ 'border-t border-surface-200': index !== 0 }"
          >
            <div class="relative sm:w-40">
              <img
                class="block w-full rounded object-cover sm:h-32"
                :src="product.image || '/images/products/product-image-placeholder.svg'"
                :alt="product.name"
              >
            </div>
            <div class="flex flex-1 flex-col justify-between gap-6 md:flex-row md:items-center">
              <div class="flex flex-row items-start justify-between gap-2 md:flex-col">
                <div>
                  <div class="text-left text-lg font-medium">
                    {{ product.name }}
                  </div>
                  <p class="text-surface-500 mt-2 text-sm line-clamp-2">
                    {{ product.description }}
                  </p>
                </div>
                <div v-if="product.rating" class="bg-surface-100 rounded-full p-1">
                  <div class="bg-surface-0 flex items-center justify-center gap-2 rounded-full px-3 py-1 shadow-sm">
                    <span class="text-surface-900 text-sm font-medium">{{ product.rating.toFixed(1) }}</span>
                    <i class="pi pi-star-fill text-sm text-yellow-500" />
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-4 md:items-end">
                <div class="flex flex-row-reverse gap-2 md:flex-row">
                  <!-- <Button
                    icon="pi pi-shopping-cart"
                    label="Acheter "
                    size="small"
                    :disabled="product.inventoryStatus === 'Repture de stock'"
                    class="whitespace-nowrap bg-[#E6D134]"
                  /> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #empty>
        <div class="flex flex-col items-center justify-center py-16">
          <i class="pi pi-inbox text-5xl text-gray-300" />
          <p class="mt-4 text-gray-500">
            No products available from this partner.
          </p>
          <Button
            label="Browse All Partners"
            icon="pi pi-arrow-left"
            class="mt-4"
            @click="router.push('/partners/')"
          />
        </div>
      </template>
    </DataView>
  </div>
</template>

<style scoped>
.products-container {
  @apply px-4 py-6 md:px-6 lg:px-8;
}

:deep(.p-paginator) {
  @apply mt-8 border-t border-gray-200 pt-6;
}

:deep(.p-dataview-header) {
  @apply bg-transparent px-0 py-0;
}

:deep(.p-dataview-content) {
  @apply bg-transparent;
}

:deep(.p-dropdown) {
  @apply w-full;
}
</style>
