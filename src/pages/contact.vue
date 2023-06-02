
<script setup lang="ts">
import { ref } from 'vue'

import {RouterView} from 'vue-router'

</script>
<template>
  

  <div class="bg-lightblue font-source-sans-pro flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">

        <div>
          <label class="block uppercase tracking-wide text-gray-700 text-xs  mb-2" for="grid-first-name">
            Nom (obligatoire)
          </label>
          <div class="mt-2">
            <input id="grid-first-name" name="first-name" type="text" autocomplete="given-name" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blanc placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blanc sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label class="block uppercase tracking-wide text-gray-700 text-xs mb-2" for="grid-last-name">
            Prénom (obligatoire)
          </label>
          <div class="mt-2">
            <input id="grid-last-name" name="last-name" type="text" autocomplete="family-name" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blanc placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs  mb-2">E-mail (obligatoire) </label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blanc placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

                


        <div>
          <label class="block uppercase tracking-wide  text-xs  mb-2" for="grid-first-text">
            Objet du message(obligatoire)
          </label>
          <div class="mt-2">
            <input id="grid-first-text" name="first-text" type="text" autocomplete="given-name" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-blanc placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        
        <div>
  <label for="message" class="block uppercase tracking-wide text-gray-700 text-xs  mb-2">Message</label>
  <textarea id="message" name="message" class="block w-full rounded-md border border-gray-300 p-2"></textarea>
</div>
        

        <div class="flex justify-center">
        <button class="bg-gris-fonce hover:bg-gray-400 text-blanc  py-2 px-14 border-radius: 0.5rem rounded inline-flex items-center lg:flex-row">
          <span>Envoyer</span>
          </button>
</div>

      </form>

      

    </div>
  </div>

  <RouterView />
  

</template>