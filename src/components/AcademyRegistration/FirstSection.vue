<template>
  <!-- Full viewport minus navbar -->
  <section class=" flex items-center justify-center bg-gray-50 px-4 ">

    <!-- Card -->
    <div
      class="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col mt-10 mb-10"
    >
      <!-- Header -->
      <div class="mb-6">
        <p class="text-sm text-gray-500">Step 1 of 4</p>
        <h2 class="text-2xl font-semibold text-gray-900 mt-1">
          Personal Information
        </h2>
      </div>

      <!-- Scrollable Form Body -->
      <div class="flex-1 overflow-y-auto pr-2">
        <form class="grid grid-cols-1 md:grid-cols-2 gap-5">

          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Email address <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              placeholder="example@email.com"
              class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              WhatsApp Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+234..."
              class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          <!-- Gender -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Gender <span class="text-red-500">*</span>
            </label>
            <div class="mt-2 flex items-center gap-6">
              <label class="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="Male"
                  v-model="form.gender"
                  class="text-blue-600"
                />
                Male
              </label>

              <label class="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="Female"
                  v-model="form.gender"
                  class="text-blue-600"
                />
                Female
              </label>
            </div>
          </div>

          <!-- DOB -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Date of birth <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.dob"
              type="date"
              class="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

       
          <!-- Gender -->
          <div>
            <label class="block text-sm font-medium text-gray-700">
              Gender <span class="text-red-500">*</span>
            </label>
            <div class="mt-2 flex items-center gap-6">
              <label class="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="single"
                  v-model="form.maritalStatus"
                  class="text-blue-600"
                />
                Single
              </label>

              <label class="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  value="Married"
                  v-model="form.maritalStatus"
                  class="text-blue-600"
                />
                Married
              </label>
            </div>
          </div>

        </form>
      </div>

      <!-- Footer -->
      <!-- <div class="pt-6 flex justify-center">
        <button
          @click="submitStep"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-12 py-3 rounded-lg shadow-md transition"
        >
          Next
        </button>
      </div> -->
    </div>

  </section>


</template>

<script setup>
import { computed } from 'vue'
import { useRegistrationStore } from '@/stores/UserRegistrationStore.js'


const store = useRegistrationStore()

const form = computed({
  get: () => store.personalInfo,
  set: (val) => store.updatePersonalInfo(val),
})

const submitStep = () => {
  store.nextStep()
}
</script>

