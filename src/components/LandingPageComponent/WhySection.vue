<template>
  <section
    class="w-full bg-[#0b1636] bg-cover bg-center py-20 lg:py-28"
    style="background-image: url('/images/whysection/background.jpg')"
  >
    <div class="max-w-7xl mx-auto px-6">


      <h2 class="text-center text-white text-2xl lg:text-3xl font-semibold mb-12">
        Why Techroom?
      </h2>


      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        <div
          v-for="(item, i) in reasons"
          :key="i"
          class="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center"
        >


        <img :src="item.icon" alt="" class="w-14 h-14 mb-5" />


        <h3 class="font-semibold text-gray-900 text-lg mb-3">
            {{ item.title }}
          </h3>


          <p class="text-gray-600 text-sm leading-relaxed">
            {{ item.desc }}
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
const reasons = [
  {
    title: "Steady power supply",
    icon: "/images/whysection/ion_bulb-sharp.png",
    desc:
      "Enjoy the convenience of a steady, uninterrupted power supply, ensuring your workspaces stay active and fully functional around the clock. Our facilities are equipped to support all your tech needs without interruptions.",
  },
  {
    title: "Serene environment",
    icon: "/images/whysection/mingcute_seat-fill.png",
    desc:
      "Enjoy the convenience of a steady, uninterrupted power supply, ensuring your workspaces stay active and fully functional around the clock. Our facilities are equipped to support all your tech needs without interruptions.",
  },
  {
    title: "Wifi Services",
    icon: "/images/whysection/material-symbols_wifi.png",
    desc:
      "Enjoy the convenience of a steady, uninterrupted power supply, ensuring your workspaces stay active and fully functional around the clock. Our facilities are equipped to support all your tech needs without interruptions.",
  },
  {
    title: "Seasoned Teachers",
    icon: "/images/whysection/icon-park-solid_avatar.png",
    desc:
      "Enjoy the convenience of a steady, uninterrupted power supply, ensuring your workspaces stay active and fully functional around the clock. Our facilities are equipped to support all your tech needs without interruptions.",
  },
  {
    title: "Mentorship",
    icon: "/images/whysection/verified-check-svgrepo-com.svg",
    desc:
      "Enjoy the convenience of a steady, uninterrupted power supply, ensuring your workspaces stay active and fully functional around the clock. Our facilities are equipped to support all your tech needs without interruptions.",
  },
  {
    title: "100% Satisfaction",
    icon: "/images/whysection/IT-consultancy.png",
    desc:
      "Enjoy the convenience of a steady, uninterrupted power supply, ensuring your workspaces stay active and fully functional around the clock. Our facilities are equipped to support all your tech needs without interruptions.",
  },
];
</script>

<style scoped>

</style>
