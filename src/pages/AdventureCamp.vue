<script setup>
import { mainGame } from "../main.js"
import Inventory from "../components/Inventory.vue"
import { player, coin } from "../assets/game/gameplay"

</script>
 
<template>
    <p class="p-3 font-bold text-4xl absolute">COIN : {{ coin.getCoin() }}</p>
    <div class="flex w-full h-full justify-around items-center">
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">GACHAPON</button>
        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                @click="mainGame(player)">ADVENTURE</button>

        <Inventory :player="player"/>
    </div>
</template>
 
<style scoped></style>