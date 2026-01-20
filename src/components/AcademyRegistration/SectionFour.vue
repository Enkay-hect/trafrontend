<template>
  <section class="h-full flex flex-col bg-gray-50 rounded-xl border border-gray-200">

    <div class="px-6 py-4 border-b bg-white rounded-t-xl">
      <h2 class="text-2xl font-semibold text-gray-800">
        Final Acknowledgement & Uploads
      </h2>
      <p class="text-gray-600 mt-1">
        Review terms, upload documents, and complete your registration
      </p>
    </div>


    <div class="flex-1 overflow-y-auto px-6 py-6 space-y-8">
      <!-- Terms -->
      <div class="bg-white border rounded-lg p-6 space-y-4">
        <h3 class="text-lg font-semibold text-gray-800">
          Terms & Conditions
        </h3>

        <p class="text-gray-700 text-sm leading-relaxed">
          By completing this form, you acknowledge and agree to the terms and
          conditions of enrollment in Techroom Academy, which include:
        </p>

        <ul class="list-disc pl-5 space-y-3 text-gray-700 text-sm">
          <li>
            <strong>Fee Payment Structure:</strong> Tuition is broken down into
            monthly installments. Students are expected to make an initial
            deposit of at least 30% upon registration and complete each monthly
            installment within the first 2 weeks of the month.
          </li>

          <li>
            <strong>Attendance:</strong> Failure to attend classes for more than
            a week without a formal notice to the tutor may result in an extended
            learning duration, subject to an extra charge of 10,000 NGN per month
            for the extended time.
          </li>

          <li>
            <strong>Test:</strong> A test will be given at the end of every course
            and results will be generated to determine the next stage of
            learning. Students who fail after 3 trials may be advised to
            withdraw.
          </li>

          <li>
            <strong>Internship:</strong> Students may apply for internship after
            completion. Outstanding interns may be absorbed into Techroom
            Elites as contract developers or designers.
          </li>
        </ul>

        <label class="flex items-start gap-3 pt-4">
          <input
            type="checkbox"
            v-model="store.agreedToTerms"
            class="mt-1"
          />
          <span class="text-sm text-gray-700">
            I have read and agree to the terms and conditions above
          </span>
        </label>
      </div>

      <!-- Account Details -->
      <div class="bg-white border rounded-lg p-6">
        <h3 class="text-lg font-semibold text-gray-800 mb-4">
          Payment Account Details
        </h3>

        <div class="space-y-2 text-sm text-gray-700">
          <p><strong>Account Number:</strong> 7007648373</p>
          <p><strong>Account Name:</strong> Techroom Limited</p>
          <p><strong>Bank Name:</strong> Carbon</p>
          <p><strong>Amount: ₦{{ store.totalAmount }}</strong></p>
        </div>
      </div>

      <!-- Uploads -->
      <div class="bg-white border rounded-lg p-6 space-y-6">
        <h3 class="text-lg font-semibold text-gray-800">
          Upload Required Documents
        </h3>

        <!-- Passport -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Passport / Selfie Photograph
          </label>
          <input
            type="file"
            accept="image/*"
            @change="e => handleFileUpload(e, 'passportPhoto')"
            class="block w-full text-sm"
          />
        </div>

        <!-- Proof -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Proof of Payment
          </label>
          <input
            type="file"
            accept="image/*,application/pdf"
            @change="e => handleFileUpload(e, 'paymentProof')"
            class="block w-full text-sm"
          />
        </div>
      </div>
    </div>

    <!-- Submit Button -->
      <div class="px-6 py-4 border-t bg-white rounded-b-xl">
        <button
          :disabled="!store.canSubmit || apiStore.submitting"
          @click="submitFinal"
          class="ml-auto px-8 py-3 rounded-lg bg-blue-800 text-white"
        >
          Submit Application
        </button>
      </div>
  </section>
</template>

<script setup>
import { useRegistrationStore } from '@/stores/UserRegistrationStore.js'
import { RegistrationApiStore } from '@/stores/RegistrationApiStore.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useRegistrationStore()

const apiStore = RegistrationApiStore()

const submitFinal = async () => {
  try {
    await apiStore.submitFullRegistration(store)
    alert('Submission successful') 
    router.push('/')
  } catch (e) {
    console.error(e)
    alert('Submission failed. Please try again.')
  }
}


const handleFileUpload = (event, type) => {
  const file = event.target.files[0]
  if (!file) return

  store.updateUploads({
    [type]: file,
  })
}

</script>

