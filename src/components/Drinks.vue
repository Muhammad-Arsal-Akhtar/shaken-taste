<template>
    <div class="grid grid-cols-1 gap-3 p-8 sm:grid-cols-2 md:grid-cols-3 place-items-center">
        <DrinkItem v-for="drink in drinks" :key="drink.id" :drink="drink" />
    </div>

    <div class="flex justify-center" v-if="!drinks.length">
        <a
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><slot /></h5>
        </a>
    </div>
</template>


<script setup>
import DrinkItem from './DrinkItem.vue';

defineProps({
    drinks: {
        require: true,
        type: Object
    }
})

</script>