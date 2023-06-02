
<template>
<div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden mt-9 rounded-lg md:h-96">
        <div class="duration-700 ease-in-out" data-carousel-item>
            <img src="/imgs/eugenie.png" class="absolute block w-1/2 sm:w-1/3 md:w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="card">
        </div>
        <div class="duration-700 ease-in-out" data-carousel-item>
            <img src="/imgs/soustrastre.png" class="absolute block w-1/2 sm:w-1/3 md:w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="card">
        </div>
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="/imgs/princess.png" class="absolute block w-1/2 sm:w-1/3 md:w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="card">
        </div>
        <div class=" duration-700 ease-in-out" data-carousel-item>
            <img src="/imgs/three.png" class="absolute block w-1/2 sm:w-1/3 md:w-1/4 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="card">
        </div>
    </div>

    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
            <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30">
            <svg aria-hidden="true" class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

</template>