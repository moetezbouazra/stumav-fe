<script setup>
import { ref } from 'vue'
import axios from 'axios'

// Define reactive form data
const formData = ref({
  nom: '',
  prenom: '',
  gsm: '',
  email: '',
  message: '',
})

const successMessage = ref('')
const errorMessage = ref('')

// Function to handle form submission
async function submitForm() {
  try {
    const formDataToSend = new FormData()
    formDataToSend.append('lastName', formData.value.nom)
    formDataToSend.append('firstName', formData.value.prenom)
    formDataToSend.append('phone', formData.value.gsm)
    formDataToSend.append('email', formData.value.email)
    formDataToSend.append('message', formData.value.message)

    // Send form data to API
    const response = await axios.post('https://stumav.com/backend/contact', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    // Check for success response and handle it
    if (response.data && response.data.notification_id) {
      successMessage.value = 'Message envoyé avec succès ! '
      errorMessage.value = ''
      formData.value = { nom: '', prenom: '', gsm: '', email: '', message: '' }
    }
  }
  catch (error) {
    successMessage.value = ''
    errorMessage.value = 'L\'envoi du message a échoué. Veuillez réessayer.'
    console.error('an error has occured: ', error)
  }
}
</script>

<template>
  <section>
    <div class="mx-auto text-left container">
      <div class="flex flex-wrap md:mx-25">
        <!-- Form Section -->
        <div class="mx-auto mb-8 w-full px-4 lg:mb-0 lg:w-2/3">
          <form
            id="ContactViewForm"
            class="rounded-lg bg-white p-8 space-y-6"
            enctype="multipart/form-data"
            @submit.prevent="submitForm"
          >
            <h3 class="text-[28px]">
              Nous <strong>Contacter</strong>
            </h3>

            <!-- Nom and Prénom -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <input v-model="formData.nom" type="text" placeholder="Nom *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
              <div>
                <input v-model="formData.prenom" type="text" placeholder="Prénom *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
            </div>

            <!-- Téléphone and Email -->
            <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <input v-model="formData.gsm" type="text" placeholder="Téléphone *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
              <div>
                <input v-model="formData.email" type="email" placeholder="Adresse e-mail *" required class="w-full border-gray-300 rounded-lg p-2.5">
              </div>
            </div>

            <!-- Message -->
            <div>
              <textarea v-model="formData.message" rows="4" placeholder="Rédiger votre demande *" required class="w-full border-gray-300 rounded-lg p-2.5" />
            </div>

            <!-- Success or Error Messages -->
            <div v-if="successMessage" class="text-green-500">
              {{ successMessage }}
            </div>
            <div v-if="errorMessage" class="text-red-500">
              {{ errorMessage }}
            </div>

            <!-- Submit Buttons -->
            <div class="flex pt-4 space-x-4">
              <button type="submit" class="bg-primary text-white btn hover:bg-[#d78a1c]">
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
