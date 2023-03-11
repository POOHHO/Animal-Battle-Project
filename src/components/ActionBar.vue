<script setup>
import { show } from "../main.js"
import { player, monster, playerTurn } from "../assets/game/gameplay.js"
</script>
<template>
     <div class="flex flex-wrap items-center justify-center p-5 bg-zinc-900 max-lg:flex-col text-2xl space-y-1">
        <!-- ATTACK BTN -->
        <button :disabled="!show.attackButton" @click="playerTurn()"
            class="flex-1 py-6 mr-5 w-full bg-emerald-500 text-white shadow-md spacing disabled:bg-zinc-600 hover:bg-teal-600"
            disabled>ATTACK</button>
        <!-- PLAYER -->
        <div class="flex flex-1 items-center w-full">
            <div class="shadow-md w-24 h-24 bg-zinc-800">
                <img class="opacity-85" :src="player.getIcon()" alt="player-icon">
            </div>
            <div class="flex-1 ml-5">
                <div class="flex flex-col">
                    <span class="font-bold text-emerald-500 drop-shadow-lg" v-text="player.name"></span>
                    <div>
                        <span>{{ `HP: ${player.health}` }}</span>
                        <span v-show="show.monsterAttack" class="text-red-600">{{ `-${monster.damage}` }}</span>
                        <span>{{ `/${player.maxHealth} (${player.character.character})` }} </span>
                    </div>
                    <!-- HEALTH BAR -->
                    <div class="bg-zinc-800 h-6 shadow-md mr-3">
                        <div class="bg-emerald-400 h-6 mr-3" :style="`width: ${player.getPercentHealth()}%`"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>