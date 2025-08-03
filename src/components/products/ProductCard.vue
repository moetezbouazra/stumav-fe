<script setup lang="ts">
import Card from 'primevue/card'
import Button from 'primevue/button'
import Rating from 'primevue/rating'
import Tag from 'primevue/tag'
import type { Product } from '~/services/partners/partnersProducts'

defineProps<{
  product: Product
}>()

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
</script>

<template>
  <Card class="h-full shadow-sm transition-all hover:shadow-md">
    <template #header>
      <div class="relative">
        <img
          :src="product.image || '/images/products/product-image-placeholder.svg'"
          :alt="product.name"
          class="h-48 w-full object-cover"
        >
      </div>
    </template>
    <template #title>
      <div class="flex items-start justify-between">
        <span class="line-clamp-2">{{ product.name }}</span>
      </div>
    </template>
    <template #subtitle>
      <Rating
        v-if="product.rating"
        :model-value="product.rating"
        readonly
        :cancel="false"
        class="[&>span]:text-sm"
      />
    </template>
    <template #content>
      <p class="text-sm text-gray-600 line-clamp-3">
        {{ product.description }}
      </p>
    </template>
    <template #footer>
      <div class="flex justify-between gap-2">
        <!-- <Button
          icon="pi pi-shopping-cart"
          label="Acheter "
          class="p-button-sm flex-1 bg-[#E6D134]"
          :disabled="product.inventoryStatus === 'Repture de stock'"
        /> -->
      </div>
    </template>
  </Card>
</template>
