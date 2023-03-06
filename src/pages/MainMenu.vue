<script setup>
import { playBtn, howToPlayBtn } from "../main.js"
import path from "../assets/path_data.json"
</script>
<template>
    <div class="flex justify-center m-5">
        <img :src="path.animal_battle" alt="animal-battle" class="w-full h-full">
    </div>
    <div class="mb-4 w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        @click="playBtn()">
        <img :src="path.play" alt="play-btn" class="w-full h-full">
    </div>
    <div class="w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        @click="howToPlayBtn()">
        <img :src="path.howToPlay" alt="how-to-play-btn" class="w-full h-full">
    </div>
</template>
<style scoped></style>