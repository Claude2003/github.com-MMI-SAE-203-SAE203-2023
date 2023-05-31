<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import Footer from './components/footer.vue'
import contact from '@/pages/sous dossier/contact.vue'
import bouton from '@/components/bouton.vue'
</script>



<template>
  
  

  <!-- Les pages s'affichent ici -->
  <RouterView />
  <Header/>
  <bouton/>
  <contact/>
<Footer/>
</template>
