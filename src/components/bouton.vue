<script setup lang="ts">
import { ref } from 'vue'

import { RouterLink } from 'vue-router'

</script>




 <template>
<div class="flex justify-center font-indie-flower lg:mt-8">
  <div class="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gris-fonce hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-gris-fonce focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0" role="group">
    <router-link to="/Mariegabrielle" class=" border border-gris-fonce inline-block rounded-l bg-blanc px-7 pb-2.5 pt-3 text-sm  uppercase leading-normal text-gris-fonce transition duration-150 ease-in-out hover:bg-gris-fonce focus:gris-fonce focus:outline-none focus:ring-0 active:bg-gris-fonce" data-te-ripple-init data-te-ripple-color="light">
      Artiste
    </router-link>
    <router-link to="/agirl" class=" border border-gris-fonce inline-block bg-blanc px-7 pb-2.5 pt-3 text-sm uppercase leading-normal text-gris-foncetransition duration-150 ease-in-out hover:bg-gris-fonce focus:bg-gris-fonce focus:outline-none focus:ring-0 active:bg- bg-gris" data-te-ripple-init data-te-ripple-color="light">
      A gril
    </router-link>
    <router-link to="/Atelier" class="border border-gris-fonce inline-block rounded-r bg-blanc px-7 pb-2.5 pt-3 text-sm  uppercase leading-normal text-gris-fonce transition duration-150 ease-in-out hover:bg-gris-fonce focus:bg-gris-fonce focus:outline-none focus:ring-0 active:bg-gris-fonce" data-te-ripple-init data-te-ripple-color="light">
      Atelier
    </router-link>
    <router-link to="/frise" class="border border-gris-fonce inline-block rounded-r bg-blanc px-7 pb-2.5 pt-3 text-sm  uppercase leading-normal text-gris-fonce transition duration-150 ease-in-out hover:bg-gris-fonce focus:bg-gris-fonce focus:outline-none focus:ring-0 active:bg-gris-fonce" data-te-ripple-init data-te-ripple-color="light">
      Frise
    </router-link>
  </div>
</div>

  



</template>
