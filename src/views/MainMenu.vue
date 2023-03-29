<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import path from "../assets/path_data.json"
import Background from "../components/Background.vue";
// const audio = new Audio("music/Undertale_sans.mp3")
// const isPlaying = ref(false)
// const playPuauseSong = () => {
//     console.log(audio);
//     audio.volume = 0.2
//     audio.loop = true
//     isPlaying.value = !isPlaying.value
//     if (isPlaying.value) audio.play()
//     else audio.pause()
// }
</script>
<template>
    <Background :background-image="path.mainimages" :center="true">
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
    </Background>
</template>
<style scoped></style>