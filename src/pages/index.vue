<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})

useHead({
  title: 'Stumav - Accessoires et Ferrures pour Portes et Fenêtres en Aluminium | Accueil',
  meta: [
    {
      name: 'description',
      content: 'Découvrez Stumav, votre partenaire de confiance pour les accessoires et ferrures de portes et fenêtres en aluminium en Tunisie. Distribution en gros et livraison partout en Tunisie.',
    },
    {
      name: 'keywords',
      content: 'stumav, aluminium, ferrures, accessoires, portes, fenêtres, tunisie, jemmal, gros, distribution, vente, livraison',
    },
    // Open Graph tags
    {
      property: 'og:title',
      content: 'Stumav - Accessoires et Ferrures pour Portes et Fenêtres en Aluminium',
    },
    {
      property: 'og:description',
      content: 'Découvrez Stumav, votre partenaire de confiance pour les accessoires et ferrures de portes et fenêtres en aluminium en Tunisie.',
    },
    {
      property: 'og:url',
      content: 'https://stumav.com',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://stumav.com',
    },
  ],
})
</script>

<template>
  <div>
    <hero-section />
    <about-section />
    <latest-products-section />
    <!-- <latest-news-section /> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
