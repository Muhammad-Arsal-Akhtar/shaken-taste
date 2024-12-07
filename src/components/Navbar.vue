<template>
    <header class="flex items-stretch justify-between bg-white shadow-md h-14">
        <router-link :to="{ name: 'home' }" class="inline-flex items-center h-full px-5 hover:bg-green-200">
            Home
        </router-link>

        <div class="flex items-center gap-1">
            <router-link :to="{ name: 'byName' }"
                class="inline-flex items-center h-full px-2 transition-colors hover:bg-green-200">
                Cocktails by Name
            </router-link>

            <router-link :to="{ name: 'byLetter' }"
                class="inline-flex items-center h-full px-2 transition-colors hover:bg-green-200">
                Cocktails By Letter
            </router-link>

            <router-link :to="{ name: 'ingredient' }"
                class="inline-flex items-center h-full px-2 transition-colors hover:bg-green-200">
                Cocktails By Ingredients
            </router-link>
        </div>
    </header>
</template>