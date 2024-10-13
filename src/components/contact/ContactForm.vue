<template>
  <section>
    <div class="mx-auto text-left container">
      <div class="mx-25 flex flex-wrap">
        <!-- Form Section -->
        <div class="mx-auto mb-8 w-full px-4 lg:mb-0 lg:w-2/3">
          <form id="ContactViewForm" action="/contacts/view" class="rounded-lg bg-white p-8 space-y-6" enctype="multipart/form-data" method="post" accept-charset="utf-8">
            <h3 class="text-[28px]">
              Nous <strong>Contacter</strong>
            </h3>
            <input type="hidden" name="_method" value="POST">
            <input id="ContactMenuId" type="hidden" name="data[Contact][menu_id]" value="14">
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

            <!-- Message -->
            <div>
              <textarea id="ContactMessage" name="data[Contact][message]" rows="4" placeholder="Rédiger votre demande *" required class="w-full border-gray-300 rounded-lg p-2.5" />
            </div>

            <!-- Submit Buttons -->
            <div class="flex pt-4 space-x-4">
              <button type="submit" name="contact_submit" class="bg-primary text-white btn hover:bg-[#d78a1c]">
                Envoyer
              </button>
              <button type="reset" class="btn hover:bg-[#3c3c3c]">
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
