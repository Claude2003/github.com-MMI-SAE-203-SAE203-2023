<script setup lang="ts">
import fiches from '@/components/gabifivhe.vue'
import { RouterView } from 'vue-router'
import bouton from '@/components/bouton.vue'
</script>

<template>
  <bouton/>
  <body>
    <div class="flex items-center justify-center min-h-screen">
      <div class="relative mt-24">
        <div class="absolute top-[-60px] left-1/2 transform -translate-x-1/2 w-32 h-32 overflow-hidden mx-auto rounded-full">
          <img class="object-cover w-full h-full" src="/imgs/mariegabi.png" alt="Profile picture">
        </div>
        <fiches/>
      </div>
    </div>
    <RouterView />
  </body>
</template>