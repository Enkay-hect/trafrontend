<script setup>
</script>

<template>
  <section class="w-full bg-gray-200 py-16 lg:py-24" id="workspace">
    <div class="max-w-7xl mx-auto px-6">


      <motion-div
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-center"
      >
        <h2 class="text-3xl font-bold text-gray-900 mt-5 mb-5">
          Welcome to Techroom
        </h2>
      </motion-div>



      <motion-div
        :initial="{ opacity: 0, scale: 0.97 }"
        :enter="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.6, ease: 'easeOut' }"
        class="mt-10"
      >
        <div
          class="relative w-full h-96 lg:h-[550px] rounded-2xl overflow-hidden bg-gray-200 border border-gray-300 flex items-center justify-center"
        >
          <span class="text-gray-500 text-xl font-semibold text-center px-4">
            <img
               
                src="/images/Welcome/welcome.png"
                alt=""
                class="absolute inset-0 w-full h-full object-cover"
            />
          </span>
        </div>
      </motion-div>



      <motion-div
        :initial="{ opacity: 0, y: 25 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
        class="mt-10 max-w-4xl"
      >
        <h3 class="font-semibold text-lg text-gray-900 mb-2 mt-10">Our workspace</h3>

        <p class="text-gray-700 leading-relaxed mb-4">
          Discover a vibrant community where tech skills meet state-of-the-art workspaces.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          We provide hands-on training, collaborative workspaces, and resources to elevate
          your tech journey. Discover a vibrant community where tech skills meet
          state-of-the-art workspaces.
        </p>
      </motion-div>



      <motion-div
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.3 }"
        class="mt-10"
      >
        <div
          class="bg-white shadow-sm rounded-xl border border-gray-200 px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-between"
        >

        <div class="flex items-center gap-3">
            <span class="text-xl">💺</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">100+ Seats</p>
            </div>
          </div>


          <div class="flex items-center gap-3">
            <span class="text-xl">🔌</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">24/7</p>
              <p class="text-gray-600 text-xs">Power supply</p>
            </div>
          </div>


          <div class="flex items-center gap-3">
            <span class="text-xl">📶</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">Wifi</p>
              <p class="text-gray-600 text-xs">Availability</p>
            </div>
          </div>


          <div class="flex items-center gap-3">
            <span class="text-xl">🕑</span>
            <div>
              <p class="font-semibold text-gray-900 text-sm">9am - 7pm</p>
              <p class="text-gray-600 text-xs">Monday - Saturday</p>
            </div>
          </div>
        </div>
      </motion-div>



      <motion-div
        :initial="{ opacity: 0, y: 15 }"
        :enter="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.35 }"
        class="mt-8 flex justify-center"
      >
        <a href="https://workspace.techroom.ng/" target="_blank"
          class="px-8 py-3 bg-[#0f1b58] text-white font-medium rounded-lg hover:bg-[#0c1545] transition"
        >
          Subscribe for workspace
        </a>
      </motion-div>

    </div>
  </section>
</template>

<style scoped>

</style>
