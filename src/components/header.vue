<script setup lang="ts">
import { ref } from 'vue'
import logo from '@/components/icons/palette.vue'
import drapeau from '@/components/icons/Ellipse.vue'
import { RouterLink } from 'vue-router'

const menuIsOpen = ref(false)
const toggleMenu = ref(false)
const showMenu = ref(false)

</script>


<template>
  <header class=" bg-gris-fonce flex items-center justify-between px-4 h-20 border-b-2 border-b-fond-site ">
  

    <RouterLink to="/">
      <logo/>
    </RouterLink>
    <button
      class="w-6 h-3 flex flex-col justify-between lg:hidden"
      @pointerdown="menuIsOpen = !menuIsOpen"
    >
    <span
        class="block bg-blanc font-bold h-[2px] w-full rounded-full transition duration-300"
        :class="{ '-translate-y-[5px] ': menuIsOpen }"
      ></span>
      <span
        class="block bg-blanc font-bold h-[2px] w-full rounded-full transition duration-300"
        :class="{ '-translate-y-[5px] ': menuIsOpen }"
      ></span>
      <span
        class="block bg-blanc font-bold h-[2px] w-full rounded-full transition duration-300"
        :class="{ '-translate-y-[5px] ': menuIsOpen }"
      ></span>
    </button>
   
    <nav class="invisible bg-gris-fonce fixed z-10 inset-0 mt-20 px-6 py-12 flex flex-col justify-between lg:visible lg:opacity-100 lg:static lg:bg-transparent lg:mt-0 lg:flex-row lg:flex-1" :class="{ '!visible !opacity-100': menuIsOpen }">
  <ul class="flex flex-col gap-4 lg:flex-row">
    <li>
      <RouterLink class="text-blanc font-bold p-4 block rounded-lg active" to="/neo-xposition">Néo-xposition</RouterLink>
      <ul class="ml-8">
        <li class="sm:hidden">
        <hr class="border-t border-white my-4 w-80">
      </li>
        <li class="lg:hidden">
          <RouterLink class="text-blanc font-bold p-4 block rounded-lg" to="/neo-xposition">Qu’est-ce-que le néo-classicisme ?</RouterLink>
        </li>
        <li class="lg:hidden">
          <RouterLink class="text-blanc font-bold p-4 block rounded-lg" to="/Proposer une IA">Frise des œuvres</RouterLink>
        </li>
        <li class="lg:hidden">
          <RouterLink class="text-blanc font-bold p-4 block rounded-lg" to="/Mariegabrielle">Marie-Gabrielle Capet</RouterLink>
        </li>
        <li class="lg:hidden">
          <RouterLink class="text-blanc font-bold p-4 block rounded-lg" to="/Proposer une IA">Marie-Denise Villers</RouterLink>
        </li>
        <li class="lg:hidden">
          <RouterLink class="text-blanc font-bold p-4 block rounded-lg" to="/Proposer une IA">Franz Xaver Winterhalter</RouterLink>
        </li>
        <li class="lg:hidden">
          <RouterLink class="text-blanc font-bold p-4 block rounded-lg" to="/infos">Antonio Canova</RouterLink>
        </li>
        <li class="sm:hidden">
        <hr class="border-t border-white my-4 w-80">
      </li>
      </ul>
    </li>

    <li>
      <RouterLink class="text-blanc p-4 font-bold block rounded-lg" to="/Contact">Billetterie</RouterLink>
    </li>
    <li>
      <RouterLink class="text-blanc p-4 font-bold block rounded-lg" to="/contact">Contact</RouterLink>
    </li>

  </ul>
</nav>

<div class=" hidden lg:flex items-center gap-4 px-4 lg:flex-row">
  <RouterLink to="/">
    <drapeau/>
  </RouterLink>
  
</div>

  </header>
</template>

