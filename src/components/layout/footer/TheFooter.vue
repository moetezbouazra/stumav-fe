<script setup lang="ts">
</script>

<template>
  <footer class="bg-[#3c3c3c] pt-10 text-white font-300">
    <div class="mx-auto max-w-270 px-8 md:px-0 container">
      <div class="flex flex-wrap justify-between">
        <div>
          <div class="mb-6">
            <h4 class="mb-8 text-2xl">
              Heures <strong>d'ouverture</strong>
            </h4>
            <ul>
              <li>Lundi au Vendredi : 8:00-17:00</li>
              <li>Samedi : 8:00-14:00</li>
            </ul>
            <a href="/" class="mt-6 block">
              <img src="/images/logo.svg" alt="STUMAV" class="w-24 grayscale-100 hover:grayscale-0">
            </a>
          </div>
        </div>

        <div>
          <div class="mb-6">
            <h4 class="mb-8 text-2xl">
              <strong>Informations</strong>
            </h4>
            <ul>
              <li><a href="/sites/1/accueil" class="hover:text-gray-400">Accueil</a></li>
              <li><a href="/sites/4/a-propos" class="hover:text-gray-400">A propos</a></li>
              <li><a href="/sites/2/produits" class="hover:text-gray-400">Produits</a></li>
              <li><a href="/sites/13/nos-partenaires" class="hover:text-gray-400">Nos partenaires</a></li>
              <li><a href="/sites/14/devis-en-ligne" class="hover:text-gray-400">Devis en ligne</a></li>
              <li><a href="/sites/5/contact" class="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>

        <div>
          <div class="mb-6">
            <h4 class="mb-8 text-2xl">
              Nous <strong>contacter</strong>
            </h4>
            <div class="ju mb-4 flex items-center">
              <i class="i-fa6-solid-location-dot mr-4" />
              <span>Zone industrielle Jemmel</span>
            </div>
            <div class="mb-4 flex items-center">
              <i class="i-fa6-solid-envelope mr-4" />
              <a href="mailto:stumav1@gmail.com" class="hover:text-gray-400">stumav1@gmail.com</a>
            </div>
            <div class="flex items-center">
              <i class="i-fa6-solid-phone mr-4" />
              <span>(+216) 29 402 440</span>
            </div>
          </div>
        </div>

        <div>
          <div class="mb-6">
            <h4 class="mb-8 text-2xl">
              <strong>Suivez</strong>-nous!
            </h4>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/profile.php?id=100089451492132&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              width="100%"
              height="130"
              class="overflow-hidden border-none"
              scrolling="no"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#272727] py-4 text-center text-sm">
      <div class="mx-auto max-w-270">
        <div class="w-full flex flex-wrap justify-center gap-y-4 md:justify-between container">
          <div />
          <div class="order-2 px-5 md:px-0">
            Stumav <Copyright-icon class="mb-1 inline" /> 2024 All Rights Reserved. Powered by <a href="http://www.incentino.com" class="hover:text-gray-400" target="_blank">Incentino</a>
          </div>
          <div class="order-1 flex flex-wrap items-center justify-end md:order-3">
            <div class="mt-4 flex justify-center md:mt-0 md:w-1/3 md:justify-end space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100089451492132/" class="hover:text-gray-400" title="Facebook"><Facebook-icon /></a>
              <a href="#" class="hover:text-gray-400" title="Google +"><Instagram-icon /></a>
              <a href="#" class="hover:text-gray-400" title="Linkedin"><Linkedin-icon /></a>
              <a href="#" class="hover:text-gray-400" title="Youtube"><Youtube-icon /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
