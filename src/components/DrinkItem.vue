<template>
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <router-link :to="{ name: 'drinkDetails', params: { id : drink.id } }">
        <img class="rounded-t-lg w-[383px] h-[255px]" :src="drink.image" :alt="drink.imageAlt" />
      </router-link>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{drink.name}}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
        <VideoButton :href="drink.video" />
      </div>
    </div>

</template>

<script setup>
import VideoButton from '@/components/VideoButton.vue';

defineProps({
  drink: {
    require : true,
    type : Object
  },
})

</script>