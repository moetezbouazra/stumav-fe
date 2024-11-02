<template>
  <section class="parallax relative px-7 py-6" style="background-image: url('https://www.cna.com.tn/assets/images/parallax/devis.jpg');">
    <div class="after:bg-primary after:absolute after:inset-0 after:z-30 after:block after:opacity-50 after:content-empty">
      <div class="relative z-40 flex flex-col items-center gap-y-10">
        <div>
          <h3 class="text-left text-white">
            <strong>Demandez votre devis</strong> en ligne
          </h3>
          <hr class="my-8 h-px max-w-65 w-full border-none bg-white text-left">
          <p text-white>
            Accessible 24h/24, 7j/7, l'outil de devis en ligne vous permet d'envoyer un devis en ligne sur un produit précis.<br>Remplissez le formulaire ci-dessous et renvoyez le. Le service de conseil de STUMAV se chargera d’y répondre au plus bref delai.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="mx-auto text-left container">
      <div class="flex flex-wrap -mx-4">
        <!-- Form Section -->
        <div class="mb-8 w-full px-4 lg:mb-0 lg:w-2/3">
          <form id="ContactViewForm" action="/contacts/view" class="rounded-lg bg-white p-8 space-y-6" enctype="multipart/form-data" method="post" accept-charset="utf-8">
            <input type="hidden" name="_method" value="POST">
            <input id="ContactMenuId" type="hidden" name="data[Contact][menu_id]" value="14">

            <!-- Societe -->
            <div>
              <input id="ContactSociete" type="text" name="data[Contact][societe]" placeholder="Société *" required class="w-full border-gray-300 rounded-lg p-2.5">
            </div>

            <!-- Nom and Prénom -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <input id="ContactNom" type="text" name="data[Contact][nom]" placeholder="Nom *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
              <div>
                <input id="ContactPrenom" type="text" name="data[Contact][prenom]" placeholder="Prénom *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
            </div>

            <!-- Téléphone and Email -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <input id="ContactGsm" type="text" name="data[Contact][gsm]" placeholder="Téléphone *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
              <div>
                <input id="contact-email" type="email" name="data[Contact][email]" placeholder="Adresse e-mail *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
            </div>

            <!-- Adresse -->
            <div>
              <input id="contact-address" type="text" name="data[Contact][address]" placeholder="Adresse *" required class="w-full border-gray-300 rounded-lg p-2.5">
            </div>

            <!-- Sujet -->
            <div>
              <input id="contact-subject" type="text" name="data[Contact][sujet]" placeholder="Sujet *" required class="w-full border-gray-300 rounded-lg p-2.5">
            </div>

            <!-- Message -->
            <div>
              <textarea id="ContactMessage" name="data[Contact][message]" rows="4" placeholder="Rédiger votre demande *" required class="w-full border-gray-300 rounded-lg p-2.5" />
            </div>

            <!-- Pièce Jointe -->
            <div>
              <input id="contact-file" type="file" name="data[Contact][attached]" class="file:mr-4 !h-full !w-fit file:cursor-pointer file:border-0 !border-none file:px-4 file:py-2 file:text-sm file:text-white hover:file:bg-[#E6D134]">
            </div>

            <!-- Submit Buttons -->
            <div class="flex pt-4 space-x-4">
              <button type="submit" name="contact_submit" class="bg-primary text-white btn hover:bg-[#E6D134]">
                Envoyer
              </button>
              <button type="reset" class="btn hover:bg-[#3c3c3c]">
                Annuler
              </button>
            </div>
          </form>
        </div>

        <!-- Contact Information Section -->
        <div class="m-12 w-full px-4 md:m-0 lg:w-1/3 md:pt-14">
          <h3 class="text-[28px]">
            Nos <strong>coordonnées</strong>
          </h3>
          <div class="space-y-6">
            <div class="flex items-end space-x-4">
              <i class="i-fa6-solid-location-dot text-lg text-secondary" />
              <div>
                <span class="text-[11px] text-light font-600 uppercase">Adresse</span>
                <p class="text-[15px] text-gray-800 font-semibold leading-[2px]">
                  Route de Gabès km 6 Sfax
                </p>
              </div>
            </div>
            <div class="flex items-end space-x-4">
              <i class="i-fa6-solid-phone text-lg text-secondary" />
              <div>
                <span class="text-[11px] text-light font-600 uppercase">Téléphone</span>
                <p class="text-[15px] text-gray-800 font-semibold leading-[2px]">
                  (+216) 73 482 398
                </p>
              </div>
            </div>
            <div class="flex items-end space-x-4">
              <i class="i-fa6-solid-fax text-lg text-secondary" />
              <div>
                <span class="text-[11px] text-light font-600 uppercase">Fax</span>
                <p class="text-[15px] text-gray-800 font-semibold leading-[2px]">
                  (+216) 74 665 094
                </p>
              </div>
            </div>
            <div class="flex items-end space-x-4">
              <i class="i-fa6-solid-envelope text-lg text-secondary" />
              <div>
                <span class="text-[11px] text-light font-600 uppercase">E-mail</span>
                <p class="text-[15px] text-gray-800 font-semibold leading-[2px]">
                  contact@stumav.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
