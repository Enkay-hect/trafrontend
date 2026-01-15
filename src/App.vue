<template >
  
  <Navbar />

  <RouterView />
  
</template>

<script setup>
import Navbar from '@/components/NavbarComponent/Navbar.vue';
import { RouterView } from 'vue-router';

</script>

<style>

</style>