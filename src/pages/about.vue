<script setup lang="ts">
useHead({
  title: 'À propos de Stumav - Entreprise d\'Accessoires et Ferrures en Aluminium',
  meta: [
    {
      name: 'description',
      content: 'Découvrez l\'histoire de Stumav, entreprise tunisienne créée en 2013 spécialisée dans la vente en gros d\'accessoires et ferrures pour portes et fenêtres en aluminium. Distribution sur tout le territoire tunisien.',
    },
    {
      name: 'keywords',
      content: 'stumav, à propos, entreprise, tunisie, jemmal, aluminium, ferrures, accessoires, histoire, 2013',
    },
    // Open Graph tags
    {
      property: 'og:title',
      content: 'À propos de Stumav - Entreprise d\'Accessoires et Ferrures en Aluminium',
    },
    {
      property: 'og:description',
      content: 'Découvrez l\'histoire de Stumav, entreprise tunisienne créée en 2013 spécialisée dans la vente en gros d\'accessoires et ferrures pour portes et fenêtres en aluminium.',
    },
    {
      property: 'og:url',
      content: 'https://stumav.com/about',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://stumav.com/about',
    },
  ],
})
</script>

<template>
  <section class="py-16 text-left">
    <div class="mx-auto max-w-4xl px-4 container">
      <div>
        <h3>
          À propos de <strong>Stumav</strong>
        </h3>
        <hr class="my-6 h-px max-w-65 w-full border-none bg-[#ddd] text-left">
      </div>

      <div>
        <p class="mb-4 text-gray-700 font-light">
          <strong>STUMAV</strong> est une entreprise commerciale créée en 2013 spécialisée dans la vente <strong>en Gros</strong> des accessoires et ferrures pour les portes et fenêtres en aluminium. Elle fait la distribution et la livraison de ces produits sur tout le territoire de la Tunisie.
        </p>
        <p class="mb-4 text-gray-700 font-light">
          Elle représente des produits de différentes marques et différentes gammes en partenariat avec des géants et célèbres fabricants.
        </p>
        <p class="mb-4 text-gray-700 font-light">
          <strong>STUMAV</strong> est devenue, malgré son jeune âge, une des entreprises principales dans son secteur et elle aspire à devenir la meilleure.
        </p>

        <div class="mt-6">
          <h4 class="mb-2 text-xl text-gray-800 font-semibold">
            Le dépôt et le siège social de la société sont situés dans la ville de Jemmal au centre-est de la Tunisie :
          </h4>
          <ul class="text-gray-700 list-disc list-inside">
            <li><strong>Tel : 73482398</strong></li>
            <li><strong>Mail : hichem@stumav.com</strong></li>
            <li><strong>Mail : contact@stumav.com</strong></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
