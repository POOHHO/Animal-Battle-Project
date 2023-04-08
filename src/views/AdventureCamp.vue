<script setup>
import { useItems } from "../assets/game/items";
import { usePlayers } from "../assets/game/players";
import { auth,player,monster } from "../init.js";
import path from "../assets/path_data.json"

import Gachapon from "../components/gachapon/Gachapon.vue";
import Inventory from "../components/inventory/Inventory.vue";
import { RouterLink } from "vue-router";
import { onMounted,onBeforeMount } from "vue";
import router from "../router";

onBeforeMount(() => {
    if (!auth.value) router.push("/")
})

const myItems = useItems()
const myPlayers = usePlayers()
onMounted(async () => {
    await myItems.fetchItems()
    player.value.maxHeal()
    monster.value.setMaxHealth()
})

</script>
<template>
    <div class="screen h-screen w-screen bg-cover" :style="`background-image: url('${path.adventure}');`">
        <p class="p-5 text-center font-bold text-4xl absolute text-white bg-zinc-900 w-full flex justify-between">
            <span>COIN {{ player.coin.getCoin() }}</span>
            <router-link to="/" class="bg-emerald-500 px-3 rounded-sm hover:bg-red-500 cursor-pointer">MAIN MENU</router-link>
        </p>
        <div class="flex w-full h-full justify-around items-center">
            <Gachapon :gacha-item-icon="path.gachapon1" :gacha-potion-icon="path.gachapon2" :player="player" :my-items="myItems" :my-players="myPlayers"/>
            <router-link to="/game" class="bg-blue-500 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
               >
                ADVENTURE
            </router-link>

            <Inventory :player="player" :my-items="myItems" :my-players="myPlayers"/>
        </div>
    </div>
</template>
<style scoped>
</style>