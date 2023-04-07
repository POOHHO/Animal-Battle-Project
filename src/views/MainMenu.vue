<script setup>
import { RouterLink } from "vue-router";
import path from "../assets/path_data.json"

</script>
<template>
    <div class="w-screen h-screen bg-cover" :style="`background-image: url('${path.mainimages}');`">
        <div class="flex flex-col items-center w-full h-full justify-center">
            <div class="flex justify-center m-5">
                <img :src="path.animalBattle" alt="animal-battle" class="w-full h-full">
            </div>
            <router-link to="/PlayerSlot"
                class="mb-4 w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">
                <img :src="path.play" alt="play-btn" class="w-full h-full">
            </router-link>
            <router-link to="/how-to-play"
                class="w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer">
                <img :src="path.howToPlay" alt="how-to-play-btn" class="w-full h-full">
            </router-link>
        </div>
    </div>
</template>
<style scoped></style>