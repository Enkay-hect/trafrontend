<template>
  <section class="w-full bg-[#070b3a] text-white">
    <div
      class="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
    >

      
      <div class="space-y-8">

        <div class="flex items-center gap-2">
          <div class="text-2xl font-bold">TechRoom LOGO here</div>
        </div>

        <div>
          <h2 class="text-2xl font-semibold mb-4">
            We would love to hear from you
          </h2>
          <p class="text-gray-300 max-w-md leading-relaxed">
            Discover a vibrant community where tech skills meet state-of-the-art
            workspaces. We provide hands-on training, collaborative workspaces,
            and resources to elevate your tech journey.
          </p>
        </div>

        <div class="flex items-start gap-3 text-gray-300">
          <span class="mt-1">📍</span>
          <span>
            433, Nwaniba Rd, Doren Kaden Estate, Uyo Nigeria
          </span>
        </div>

        <div class="flex items-center gap-3 text-gray-300">
          <span>📞</span>
          <span>+235 768 90854654</span>
        </div>

        <div class="flex items-center gap-4 pt-4">
          <div
            class="w-10 h-10 rounded-full bg-white text-[#070b3a] flex items-center justify-center font-bold cursor-pointer"
          >
            f
          </div>
          <div
            class="w-10 h-10 rounded-full bg-white text-[#070b3a] flex items-center justify-center font-bold cursor-pointer"
          >
            ◎
          </div>
        </div>
      </div>

      <div class="w-full max-w-lg ml-auto">
        <h3 class="text-lg font-medium mb-6">
          Send us a message
        </h3>

        <form class="space-y-5">
          <input
            type="text"
            placeholder="Name"
            class="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />

          <input
            type="email"
            placeholder="Email"
            class="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />

          <textarea
            rows="5"
            placeholder="Message"
            class="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none"
          ></textarea>

          <button
            type="submit"
            class="w-full bg-white text-[#070b3a] font-semibold py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>
