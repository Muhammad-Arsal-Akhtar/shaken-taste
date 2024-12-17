<template>
  <div class="flex flex-col p-8">
    <Loader v-if="isLoading" />
    <Drinks :drinks="drinks" v-else />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '@/axiosClient';
import Drinks from '@/components/Drinks.vue';
import Loader from '@/components/Loader.vue';


let alphabets = "abcdefghijklmnopqrstuvwxyz";
function getRandomAlphabet() {
  let randomIndex = Math.floor(Math.random() * alphabets.length)
  return alphabets[randomIndex]
}

const drinks = ref([])
const isLoading = ref(true)

onMounted(() => {
  axiosClient.get(`/search.php?f=${getRandomAlphabet()}`)
    .then(({ data }) => {
      if (data.drinks) {
        drinks.value = data.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          imageAlt: drink.strDrinkAlternate,
          image: drink.strDrinkThumb,
          video: drink.strVideo,
        }));
        console.log(drinks.value)
      } else {
        drinks.value = [];
      }
    })
    .catch((error) => {
      console.error("Error fetching drinks:", error);
      drinks.value = [];
    })
    .finally(() => {
      isLoading.value = false;
    });

})

</script>