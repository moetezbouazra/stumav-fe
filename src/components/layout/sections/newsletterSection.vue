<template>
  <section class="parallax relative py-10 bg-cover bg-center" style="background-image: url('https://www.cna.com.tn/assets/images/parallax/newsletter.jpg');">
    <div class="absolute inset-0 bg-primary opacity-30" />
    <div class="relative mx-auto max-w-270 text-left container">
      <div id="newsletter" class="flex flex-col items-center md:flex-row md:items-start">
        <div class="mb-6 w-full md:mb-0 md:w-1/2">
          <h2 class="mb-2 text-2xl text-white font-300 md:text-3xl">
            S'abonner à notre Newsletter
          </h2>
          <p class="text-white">
            Recevez les dernières offres et Actualités.
          </p>
        </div>
        <div class="mt-auto w-full md:w-1/2">
          <form id="NewslettreViewForm " action="#" class="flex" method="post" accept-charset="utf-8">
            <input id="newsletter_mail" name="data[Newslettre][mail]" required class="h-10 flex-grow border border-0 border-gray-300 bg-white px-4 py-2 text-gray-700 focus:outline-none" autocomplete="off" maxlength="255" type="email">
            <button class="h-10 rounded-none border-none bg-[#5E81A2] px-6 py-1 text-white font-300 btn hover:bg-blue-700">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
