<template>
  <section class="w-full bg-white py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">

      <div>
        <div class="inline-block bg-gray-200 text-gray-800 text-sm font-medium px-6 py-3 rounded-full">
          Do you want to design or develop your website or mobile app?
        </div>

        <h2 class="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mt-6">
          Let's build it for you
        </h2>

        <p class="text-gray-700 text-lg leading-relaxed max-w-2xl mt-8">
          At Techroom, we specialize in designing and building high-quality websites and mobile apps that drive growth and success for our clients. Whether you're a startup or an established business, our team combines technical expertise with creativity to develop seamless, user-friendly digital experiences. From concept to completion, we focus on delivering solutions that are tailored to meet your unique needs. Trust Techroom to bring your digital ideas to life with precision, innovation, and a commitment to excellence.
        </p>

        <motion-div
          while-hover="{ scale: 1.05, y: -4 }"
          class="inline-block mt-10"
        >
          <a href="https://techroomservices.com/contact" target="_blank"
            class="bg-[#1e3a8a] hover:bg-[#162e6e] text-white font-semibold rounded-full px-10 py-4 text-lg">
            Contact Us
          </a>
        </motion-div>
      </div>


      <div class="relative">

        <div class="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 -z-10">
          <div class="w-full h-full bg-orange-100 rounded-full blur-3xl opacity-60 flex items-center justify-center">
            <span class="text-orange-600 font-medium">BOTTOM-LEFT DECORATIVE BG HERE</span>
          </div>
        </div>


        <div class="relative z-10 flex justify-center">
          <div class="rounded-xl w-full max-w-lg aspect-[3/4] flex items-center justify-center">
            <span class="">

                <img
                    src="/images/Contact/person.png"
                    alt="Academy Cover"
                    class="w-full h-full object-cover"
                />
            </span>
          </div>
        </div>


        <div class="absolute top-10 right-0 w-48 h-48 lg:w-64 lg:h-64 -z-10">
          <div class="w-full h-full bg-orange-100 rounded-full blur-3xl opacity-40"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
</style>