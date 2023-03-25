<script setup>
import { show, backtoMain, tryagain, backtogame ,backtocamp } from "../main.js"
import path from "../assets/path_data.json"
</script>
<template>
    <!-- PLAYER DEAD -->
    <div class="flex flex-col justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen" v-show="show.playerDead">
        <img :src="path.gameOver" alt="" class="w-56">
        <div class="flex justify-center m-8 space-x-5">
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl" @click="tryagain()">
                TRY AGAIN
            </button>
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl" @click="backtoMain()">
                BACK TO MAIN
            </button>
        </div>
    </div>
    <!-- PAUSE -->
    <div class="flex  justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen" v-show="show.pause">
        <div class="justify-center space-y-5 flex flex-col items-center w-96">
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4  text-xl w-1/2"
                @click="backtogame()">RESUME</button>
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl w-1/2"
                @click="backtocamp()">BACK TO CHAMP</button>
        </div>
    </div>
</template>
<style scoped></style>