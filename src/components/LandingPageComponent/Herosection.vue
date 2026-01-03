<template>

  <section class="relative w-full py-20" 
    style="background-image: url(./images/HeroSection/HeroBG.jpg); 
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;" >
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


      <Transition mode="out-in" name="fade-slide">
        <motion-div
          :key="currentSlide"
          :initial="{ opacity: 0, x: -60 }"
          :enter="{ opacity: 1, x: 0 }"
          :transition="{ duration: 1.5, ease: 'easeOut' }"
          class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >

        <div>
            <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {{ slides[currentSlide].title }}
            </h1>

            <p class="text-gray-600 text-lg mb-8 max-w-xl">
              {{ slides[currentSlide].desc }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4">

              <!-- <button
                class="px-8 py-3 border border-teal-500 text-teal-600 font-medium rounded-xl hover:bg-teal-50 transition"
              >
                {{ slides[currentSlide].btnSecondary }}
              </button> -->


              <a :href="slides[currentSlide].link" target="_blank"
                class="px-8 py-3 bg-[#1e3a8a] text-white font-medium rounded-xl hover:bg-[#162c6b] transition"
              >
                {{ slides[currentSlide].btnPrimary }}
              </a>
            </div>
          </div>


          <div class="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-gray-200 border-2 border-dashed">
            <img
                v-if="currentSlide === 0"
                src="/images/HeroSection/workspaceheroimage.jpg"
                alt=""
                class="absolute inset-0 w-full h-full object-cover"
            />

            <img
                v-else
                src="/images/HeroSection/academyheroimage.jpg"
                alt=""
                class="absolute inset-0 w-full h-full object-cover"
            />
            </div>

        </motion-div>
      </Transition>

    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

    const slides = [
      {
          key: "workspace",
          title: "Premium Workspace for Builders & Creators",
          desc: "A creative environment that gives you access to tools, community, and limitless inspiration to build your next big idea.",
          btnPrimary: "Get Membership",
          btnSecondary: "Take a Tour",
          link: "https://workspace.techroom.ng/"
      },
      {
          key: "academy",
          title: "Master Frontend, Backend, Figma, Data Analytics & App Development",
          desc: "Learn essential tech skills through structured, hands-on lessons designed to guide you from beginner to professional.",
          btnPrimary: "Explore Our Courses",
          btnSecondary: "Explore All Courses",
          link: "https://forms.gle/FTWqkCZn1dpqSPjJ6"
      },
    ];

    const currentSlide = ref(0);
    let interval = null;

    onMounted(() => {
    interval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % slides.length;
    }, 3000);
    });

    onBeforeUnmount(() => {
    clearInterval(interval);
    });
</script>




<style>

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
