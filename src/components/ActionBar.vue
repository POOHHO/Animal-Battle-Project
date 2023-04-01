<script setup>
import { show } from "../main.js"
import Action from "./button/Action.vue";
import ItemVue from "./inventory/Item.vue";

const props = defineProps({ player: Object, monster: Object, cards: { type: Array, default: () => []}})

function randomPlayerCard(){
    const random = Math.floor(Math.random() * 100)
    const luck = props.player.luck
    const cardSize = props.cards.length
    const breakpoint = cardSize-4

    let randomCard = ""
    if (random < luck) randomCard = Math.floor(Math.random() * 4) + breakpoint
    else randomCard = Math.floor(Math.random() * cardSize)

    return randomCard
}
</script>
<template>
    <!-- <GamblingCard :turns="turns" :turn="turn" :win="win" @next-turn="nextTurn"/> -->
     <div class="flex flex-wrap justify-between p-5 bg-zinc-900 max-lg:flex-col text-2xl gap-y-2">
        <!-- ACTION BTN -->
        <div class="flex flex-1">
            <Action :disabled="!show.attackButton || !show.monsterImg" @click="$emit('attack',randomPlayerCard())"  >ATTACK</Action>
           <Action><ItemVue :player="player"/></Action>
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