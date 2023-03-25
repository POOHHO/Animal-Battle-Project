<script setup>
import path from "../assets/path_data.json"
import { player, coin,monster } from "../assets/game/gameplay"
import Gachapon from "../components/gachapon/Gachapon.vue";
import Inventory from "../components/inventory/Inventory.vue";
import { RouterLink } from "vue-router";

const monsterReset = () => monster.value.setMaxHealth()

</script>
 
<template>
    <div class="screen h-screen w-screen bg-cover" :style="`background-image: url('${path.adventure}');`">
        <p class="p-5 text-center font-bold text-4xl absolute text-white bg-zinc-900 w-full">COIN : {{ coin.getCoin() }}</p>
        <div class="flex w-full h-full justify-around items-center">
            <Gachapon />
            <router-link to="/game" class="bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                @click="monsterReset()">
                ADVENTURE
            </router-link>

            <Inventory :player="player" />
        </div>
    </div>
</template>
 
<style scoped>
</style>