<script setup lang="ts">
import fiche2 from '@/components/fiche2.vue'
import { RouterView } from 'vue-router'
import bouton from '@/components/bouton.vue'
</script>

<template>
  <bouton/>
  <body>
    <div class="flex items-center justify-center min-h-screen">
      <div class="relative mt-24">
        <div class="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden mx-auto">
          <img class="object-cover w-full h-full" src="/imgs/agirl.png" alt="Profile picture">
        </div>
        <fiche2/>
      </div>
    </div>
    <RouterView />
  </body>
</template>
