<script setup>
import { show } from "../main.js"
import { player, monster, playerTurn } from "../assets/game/gameplay.js"
</script>
<template>
     <div class="flex flex-wrap justify-between p-5 bg-zinc-900 max-lg:flex-col text-2xl gap-y-2">
        <!-- ATTACK BTN -->
        <div class="flex flex-1">
            <button :disabled="!show.attackButton || !show.monsterImg" @click="playerTurn()"
                class="flex-1 py-6 w-full bg-emerald-500  text-white shadow-md spacing disabled:bg-zinc-600 disabled:text-zinc-400 hover:bg-teal-600 lg:mr-5"
                disabled>ATTACK</button>
            <button disabled class="flex-1 py-6 w-full bg-emerald-500  text-white shadow-md spacing disabled:bg-zinc-600 disabled:text-zinc-400 hover:bg-teal-600 lg:mr-5">
                SKILL
            </button>
            <button disabled class="flex-1 py-6 w-full bg-emerald-500 text-white shadow-md spacing disabled:bg-zinc-600 disabled:text-zinc-400 hover:bg-teal-600 lg:mr-5">
                ITEM
            </button>
        </div>
        <!-- PLAYER -->
        <div class="flex lg:w-1/3 items-center">
            <div class="shadow-md w-24 h-24 bg-zinc-800">
                <img class="opacity-85" :src="player.getIcon()" alt="player-icon">
            </div>
            <div class="flex-1 ml-5">
                <div class="flex flex-col">
                    <span class="font-bold text-emerald-500 drop-shadow-lg">{{ `${player.name} ( ${player.character.character} )` }}</span>
                    <div>
                        <span>{{ `HP ${player.health}` }}</span>
                        <span v-show="show.monsterAttack" class="text-red-600">{{ `-${monster.damage}` }}</span>
                        <span>{{ `/${player.maxHealth}` }} </span>
                    </div>
                    <!-- HEALTH BAR -->
                    <div class="flex justify-between">
                        <div class="bg-zinc-800 h-6 shadow-md mr-3 w-full">
                            <div class="bg-emerald-400 h-6 mr-3" :style="`width: ${player.getPercentHealth()}%`"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>