<script setup lang="ts">
import hero from '@/components/hero.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <hero/>
  <body>
    
    <form class=" bg-lightblue mt-[-164px]" >
  
      <div class="max-w- mx-auto my-10 bg-blanc rounded-xl shadow-md p-5">
  <h2 class="text-left text-xl mt-3">Néo-xposition entre le 13 avril et le 23 juin 2021</h2>
  <h2 class="text-left text-xl mt-3">Retrouvez-nous ici : Fondation Cartier, 261 Bd Raspail, 75014 Paris</h2>
  <p class="text-lefft font-Source-Sans-Pro">Horaires d’ouverture :</p>
  <p>Tous les jours de 11h à 20h, sauf le lundi.</p>
  <p>Nocturne le mardi, jusqu'à 22h.</p>
  <p>La fermeture des salles débute à 19h45 (21h45 les mardis).</p>
  <p class="text-left font-Source-Sans-Pro mt-3">Tarifs :</p>
  <p>Plein tarif ⇒ <span class="text-rouge">11€</span></p>
  <p>Tarif réduit ⇒ <span class="text-rouge">7,50€</span></p>
  <p>Réduction 13 - 25 ans ⇒<span class="text-rouge"> 5€</span></p>
  <p>Fondation Cartier Pass ⇒<span class="text-rouge">18€ - 50€</span> </p>
</div>

  

  <div class="flex justify-end mt-[-48px]">
    <button class="bg-gris-fonce hover:bg-gray-400 text-blanc py-2 px-14 rounded inline-flex items-center lg:flex-row">
      <span>Billetterie</span>
    </button>
  </div>
</form>

<form class= 'flex items-center justify-center min-h-screen ' >
    <div class="max-w- mx-auto my-10 p-8 bg-blanc border border-blanc rounded-lg shadow  ">
   
   <h5 class="mb-8 text-xl font-semibold text-left font-Catamaran ">Artistes de l’exposition et oeuvres exposées</h5>

<div class="mb-6 font-Source-Sans-Pro"> <p>Marie-Gabrielle</p> <p>CapetMarie-Denise</p> <p>VillersFranz Xaver </p> <p>WinterhalterAntonio Canova</p> <p>... et bien d’autres artistes encore ... </p>  </div>

</div>
</form>
<section >
  <div class="container mx-auto sm:p-[290px] mt-[-413px] ">
  <div class="grid grid-cols-1  sm:grid-cols-2 gap-16 p-[90px]">
    <div class="mb-4">
      <div class="relative bg-white rounded border">
        <picture class="block bg-gray-200 border-b">
          <img class="block" src="/imgs/mariegabi.png" alt="Card 1">
        </picture>
        <div class="p-6 bg-blanc">
          <h3 class="text-lg text-center">
              Marie-Gabrielle Capet
              (1761 - 1818)
          </h3>
      
          <h3 class="bg:gris-fonce font-source-sans-pro text-base  text-right">
            <a class="stretched-link" href="http://localhost:5173/Mariegabrielle" title="en lire plus ">
              en lire plus
            </a>
          </h3>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <div class="relative bg-white rounded border">
        <picture class="block bg-gray-200 border-b">
          <img class="block" src="/imgs/mariedenis.png" alt="Card 2">
        </picture>
        <div class="p-6 bg-blanc">
          <h3 class="text-lg text-center">
              Marie-Denise Villers
              (1774 - 1821)
          </h3>
      
          <h3 class="bg:gris-fonce font-source-sans-pro text-base  text-right">
            <a class="stretched-link" href="http://localhost:5173/Mariegabrielle" title="en lire plus ">
              en lire plus
            </a>
          </h3>
        </div>
        
      </div>
    </div>

    <div class="mb-4">
      <div class="relative bg-white rounded border">
        <picture class="block bg-gray-200 border-b">
          <img class="block" src="/imgs/waver.png" alt="Card 3">
        </picture>
        <div class="p-6 bg-blanc">
          <h3 class=" text-center">
              Franz Xaver Winterhalter
              (1805 - 1873)
          </h3>
      
          <h3 class="bg:gris-fonce font-source-sans-pro text-base  text-right">
            <a class="stretched-link" href="http://localhost:5173/Mariegabrielle" title="en lire plus ">
              en lire plus
            </a>
          </h3>
        </div>
      </div>
    </div>

    <div class="mb-4">
      <div class="relative bg-white rounded border">
        <picture class="block bg-gray-200 border-b">
          <img class="block" src="/imgs/anonio.png" alt="Card 4">
        </picture>
        <div class="p-6 bg-blanc">
          <h3 class="text-lg text-center">
              <p>Antonio Canova</p>
       
              (1751 - 1802) 
          </h3>
      
          <h3 class="bg:gris-fonce font-source-sans-pro text-base  text-right">
            <a class="stretched-link" href="http://localhost:5173/Mariegabrielle" title="en lire plus ">
              en lire plus
            </a>
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
        
     
    <RouterView />
  </body>
</template>