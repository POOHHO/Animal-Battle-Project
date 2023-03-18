<script setup>
import { show, mainGame } from "../main.js"
import path from "../assets/path_data.json"
import InventoryVue from "../components/Inventory.vue";

import { player, coin } from "../assets/game/gameplay";
import Gachapon from "../components/Gachapon.vue";




</script>
 
<template>
    <div v-show="show.adventureCamp" class="w-screen h-screen bg-cover"
        :style="`background-image: url('${path.adventure}');`">
        <p class="p-3 font-bold text-4xl">COIN : {{ coin.getCoin() }}</p>
        <div class="flex flex-row w-screen h-screen">
            <div class="w-1/3 flex items-center justify-center">
              <Gachapon/>
                <!-- <label
                    class="bg-gray-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-gray-500 hover:border-blue-500 rounded " >Gachapon</label> -->
            </div>
            <div class="w-1/3 flex items-center justify-center">
                <button
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    @click="mainGame(player)">adventure</button>
            </div>
            <div class="w-1/3 flex items-center justify-center">
                <InventoryVue :player="player" />
            </div>

        </div>
    </div>
</template>
 
<style scoped></style>