<script setup>
import { ref, onMounted, computed } from 'vue';
import Background from '../components/Background.vue';
import path from "../assets/path_data.json"
import { getPlayer } from "../assets/game/data-handler.js"
import { players } from '../assets/game/gameplay';
import { player } from '../assets/game/gameplay';


onMounted(async () => {
    players.value = await getPlayer()
})

const searchKeyword = ref('')
const filterPlayers = computed(() => {
    return players.value.filter((player) =>
        player.name?.toLowerCase().includes(searchKeyword.value.toLowerCase())
    )
})

const enterAccount = (account) => {
    player.value.name = account.name
    player.value.maxHealth = account.maxHealth
    player.value.health = account.health
    player.value.luck = account.luck
    player.value.crit = account.crit
    player.value.weapon = account.weapon
    player.value.armor = account.armor
    player.value.accessory = account.accessory
    player.value.coin.coin = account.coin.coin
    player.value.inventory = account.inventory
    player.value.potions = account.potions
    player.value.level = account.level

    player.value.selectCharacter(account.character.id)
}

</script>
 
<template>
    <Background :background-image="path.mainimages" :center="true">
        <div class="w-full h-full flex flex-col items-center justify-center space-y-4 screen">
            <div class="justify-center items-center flex w-full h-1/6 text-center">
                <h1 class="text-5xl text-slate-900">Choose your account</h1>
            </div>
            <div class="w-3/4">
                <input type="text" placeholder="search name..."
                    class="text-center w-full py-1 text-2xl bg-white text-slate-900 border-4 border-slate-700"
                    v-model.trim="searchKeyword">
            </div>
            <div class="w-3/4 h-full bg-slate-900 space-y-2 p-2 overflow-hidden flex flex-col">
                <router-link to="/character-selector">
                    <div class="p-2 w-full text-center bg-emerald-500 hover:bg-teal-600">

                        <button class="text-3xl text-white" @click="player.name = ''">create account...</button>

                    </div>
                </router-link>
                <div class="overflow-scroll flex-1 h-full space-y-2">
                    <div class="p-2 text-2xl w-full bg-slate-600 hover:bg-emerald-400 cursor-pointer" v-for="player of filterPlayers" @click="enterAccount(player)">
                        <router-link to="/camp">
                            <div class="modal">

                            </div>
                            <div class="flex gap-x-4">
                                <img :src="player.character.icon" alt="" class="w-24 h-24">
                                <div class="flex-row text-slate-200">
                                    <p class="">HP {{ player.health }}</p>
                                    <p class="">LUCK {{ player.luck }}</p>
                                    <p class="">CRIT {{ player.crit }}</p>
                                </div>
                            </div>
                            <div class="flex">
                                <h1 class="text-emerald-100">{{ player.name }}</h1>&nbsp;
                                <p class="">LEVEL {{ player.level }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </Background>
</template>

<style scoped>
::-webkit-scrollbar {
    display: none;
}
</style>