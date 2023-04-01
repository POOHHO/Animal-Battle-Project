<script setup>
import { show,player } from "../main.js"
import path from "../assets/path_data.json"
import router from "../router/index.js";

const backToGame = () => {
    show.value.pause = false
}
const backToCamp = () => {
    show.value.pause = false
    router.go(-1)
}
const tryAgain = () => {
    show.value.playerDead = false
    show.value.pause = false
    player.value.maxHeal()
    router.push("/camp")
}
const backToMain = () => {
    show.value.playerDead = false
    show.value.pause = false
    router.push("/")
    player.value.name = ""
}

</script>
<template>
    <!-- PLAYER DEAD -->
    <div class="flex flex-col justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen" v-show="show.playerDead">
        <img :src="path.gameOver" alt="" class="w-56">
        <div class="flex justify-center m-8 space-x-5">
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl" @click="tryAgain()">
                BACK TO CAMP
            </button>
            <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 text-xl" @click="backToMain()">
                BACK TO MAIN
            </button>
        </div>
    </div>
    <!-- PAUSE -->
    <div class="flex  justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen" v-show="show.pause">
        <div class="justify-center space-y-5 flex flex-col items-center w-96">
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4  text-xl w-1/2"
                @click="backToGame()">RESUME</button>
            <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl w-1/2"
                @click="backToCamp()">BACK TO CAMP</button>
        </div>
    </div>
</template>
<style scoped></style>