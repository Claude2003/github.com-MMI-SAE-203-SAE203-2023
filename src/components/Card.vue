<script setup lang="ts">
import { pb } from '@/backend'
import type  { ArtistesResponse } from '@/pocketbase-types'
const props: ArtistesResponse = defineProps<ArtistesResponse>()


const img0 = props.Photo?.[0]
  const urlImg0 = img0 ? pb.getFileUrl(props, img0, { thumb: '100x250' }) : '/image-not-found.png'
  console.log(urlImg0)
</script>

<template>
  
  

  
<article class= 'group grid grid-cols-1 mt- sm:grid-cols-[2fr_11fr] gap-[-1px] p-[90px]'>
         
  <picture >
    <img class="block" src="/imgs/mariegabi.png" alt="Card 1">
        </picture>

        <div class="p-6 mt-[-px] bg-blanc">
          <h3 class="text-lg text-center">
            {{ Nom_de_l_artiste }}
            {{ Prenom }}
            <p> ( {{ Annee_de_naissance }} - {{Annee_de_deces}})</p>
          </h3>
          <h3 class="bg:gris-fonce font-source-sans-pro text-base  text-right">
  <RouterLink to="/Mariegabrielle">en lire plus</RouterLink>
</h3>

        </div>
        
      </article>
      
 



</template>