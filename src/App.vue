<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Stumav - Accessoires et Ferrures pour Portes et Fenêtres en Aluminium',
  meta: [
    {
      name: 'description',
      content: 'Stumav est une entreprise tunisienne spécialisée dans la vente en gros d\'accessoires et ferrures pour portes et fenêtres en aluminium. Distribution et livraison sur tout le territoire tunisien.',
    },
    {
      name: 'keywords',
      content: 'stumav, aluminium, ferrures, accessoires, portes, fenêtres, tunisie, jemmal, gros, distribution',
    },
    {
      name: 'author',
      content: 'Stumav',
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
    // Open Graph tags
    {
      property: 'og:title',
      content: 'Stumav - Accessoires et Ferrures pour Portes et Fenêtres en Aluminium',
    },
    {
      property: 'og:description',
      content: 'Stumav est une entreprise tunisienne spécialisée dans la vente en gros d\'accessoires et ferrures pour portes et fenêtres en aluminium.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:url',
      content: 'https://stumav.com',
    },
    {
      property: 'og:image',
      content: 'https://stumav.com/logo-wide.webp',
    },
    {
      property: 'og:site_name',
      content: 'Stumav',
    },
    {
      property: 'og:locale',
      content: 'fr_TN',
    },
    // Twitter Card tags
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Stumav - Accessoires et Ferrures pour Portes et Fenêtres en Aluminium',
    },
    {
      name: 'twitter:description',
      content: 'Stumav est une entreprise tunisienne spécialisée dans la vente en gros d\'accessoires et ferrures pour portes et fenêtres en aluminium.',
    },
    {
      name: 'twitter:image',
      content: 'https://stumav.com/logo-wide.webp',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
    {
      rel: 'canonical',
      href: 'https://stumav.com',
    },
  ],
  htmlAttrs: {
    lang: 'fr',
  },
})
</script>

<template>
  <RouterView />
</template>
