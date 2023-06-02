<script setup lang="ts">
import { RouterView } from 'vue-router'
import  CardVue from '@/components/Card.vue';
import hero from '@/components/hero.vue'
import { allMArtistes } from '@/backend';

const artisteListe = await allMArtistes();
  

</script>



<template>
  <hero/>

  <div class="flex justify-end mt-[-163px]">
  <button class="bg-gris-fonce hover:bg-gray-400 text-blanc py-4 px-20 rounded inline-flex items-center lg:flex-row">
    <RouterLink to="/infos">En savoir plus</RouterLink>
  </button>
</div>

  <main>
    
    <CardVue  v-for="unartiste in artisteListe" :key="unartiste.id"
     v-bind="{...unartiste}"/>
  </main>
  
 
  
  

</template>
