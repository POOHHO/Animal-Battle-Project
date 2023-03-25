<script setup>
import { mainGame } from "../main.js"
import Inventory from "../components/Inventory.vue"
import { player, coin } from "../assets/game/gameplay"
import Gachapon from "../components/gachapon/Gachapon.vue";
</script>
 
<template>
    <p class="p-5 text-center font-bold text-4xl absolute text-white bg-zinc-900 w-full">COIN : {{ coin.getCoin() }}</p>
    <div class="flex w-full h-full justify-around items-center">
        <Gachapon/>
        <button class="screen bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                @click="mainGame(player)">ADVENTURE</button>

        <Inventory :player="player"/>
    </div>
</template>
 
<style scoped></style>