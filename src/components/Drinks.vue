<template>
    <div class="grid min-h-screen grid-cols-1 gap-3 p-8 sm:grid-cols-2 md:grid-cols-3 place-items-center">
      <DrinkItem v-for="drink in drinks" :key="drink.id" :drink="drink" />
    </div>
    
    <div class="flex justify-center" v-if="!drinks.length">
        <span>
            There are no drinks available.
        </span>
    </div>
</template>


<script setup>
import DrinkItem from './DrinkItem.vue';

defineProps({
    drinks : {
        require : true,
        type : Object
    }
})

</script>