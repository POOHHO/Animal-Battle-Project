<script setup>
import { show } from "../main.js"
import { player, monster, playerTurn } from "../assets/game/gameplay.js"
import Action from "./button/Action.vue";
import GamblingCard from "./GamblingCard.vue";
</script>
<template>
    <GamblingCard />
     <div class="flex flex-wrap justify-between p-5 bg-zinc-900 max-lg:flex-col text-2xl gap-y-2">
        <!-- ACTION BTN -->
        <div class="flex flex-1">
            <Action :disabled="!show.attackButton || !show.monsterImg" @click="playerTurn()"  >ATTACK</Action>
            <Action disabled>SKILL</Action>
            <Action disabled>ITEM</Action>
        </div>
        <!-- PLAYER -->
        <div class="flex lg:w-1/3 items-center">
            <img class="shadow-md w-24 h-24 bg-zinc-800 opacity-85" :src="player.getIcon()" alt="player-icon">
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