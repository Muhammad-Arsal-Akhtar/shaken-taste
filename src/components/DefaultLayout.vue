<template>
    <div class="h-full bg-gray-200">
        <navbar />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script setup>
import Navbar from './Navbar.vue';
</script>