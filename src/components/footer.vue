<script setup lang="ts">
import { ref } from 'vue'
import FacebookIcon from '@/components/icons/facebook.vue'
import InstagramIcon from '@/components/icons/instagram.vue'
import TwitterIcon from '@/components/icons/twiter.vue'
import TiktokIcon from '@/components/icons/tiktok.vue'
import MMI from '@/components/icons/MMI.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="bg-gray-900 text-white py-8 px-10 flex flex-col items-start sm:items-center">
  <nav class="space-y-3">
    <ul>
      <li><a href="#" class="font-bold">Contacter-nous</a></li>
      <li><a href="#" class="font-bold">Billetterie</a></li>
      <li><a href="#" class="font-bold">Mentions légales</a></li>
      <li class="sm:hidden">
        <hr class="border-t border-white  my-4 w-80">
      </li>
      <li><a href="#" class="font-bold">Suivez-nous</a></li>
   
    </ul>
  </nav>

  <div class="space-y-3 my-8 flex flex-col items-start sm:items-center">
    <ul class="flex gap-4">
      <li>
        <a href="https://tiktok.com" aria-label="tiktok" class="font-bold">
          <TiktokIcon />
        </a>
      </li>
      <li>
        <a href="https://facebook.com" aria-label="facebook" class="font-bold">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="https://twitter.com" aria-label="twitter" class="font-bold">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" aria-label="instagram" class="font-bold">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="https://mmi-montbeliard.nathanvanbignootvincler.fr/" aria-label="MMI" class="font-bold">
          <MMI/>
        </a>
      </li>
    </ul>
  </div>
</footer>

</template>
