<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Stumav',
  meta: [
    {
      name: 'description',
      content: 'Stumav est une société à responsabilité limitée fondée en 2013, située dans la zone industrielle de Jemmal. Spécialisée dans [votre domaine d\'activité], nous offrons des solutions innovantes pour répondre à vos besoins.',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
