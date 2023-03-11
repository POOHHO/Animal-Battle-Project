<script setup>
import { show, pause } from "../main.js"
import path from "../assets/path_data.json"
import { player, monster, level, turn, turns } from "../assets/game/gameplay.js"
import ActionBar from "../components/ActionBar.vue";
import GamblingCard from "../components/GamblingCard.vue";
import Menu from "../components/Menu.vue";
import { computed } from "vue";

const computedPlayerDamaged = computed(() => {
    if (show.value.monsterAttack) return 'on-damage'
    else if (turn.value === 0) return 'character-turn'
    else return ''
})
const computedMonsterDamaged = computed(() => {
    if (show.value.playerAttack) return 'on-damage'
    else if (turn.value === 1) return 'character-turn'
    else return ''
})
</script>
<template>
    <!-- HEADER TAB -->
    <div class="flex-none flex justify-between text-2xl px-8 bg-zinc-900 shadow-md z-10 items-center">
        <div class="flex flex-col">
            <p>LEVEL: {{ level }}</p>
            <p>TURN: {{ turns[turn] }}</p>
        </div>
        <!-- pause -->
        <button :disabled="show.playerDead"
            class="h-1/2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer disabled:invisible"
            @click="pause()">
            <img class="h-full" :src="path.pause" alt="pause-btn">
        </button>
    </div>
    <!-- BODY GAME -->
    <div class="flex-1 flex justify-between items-center bg-contain bg-repeat-x bg-center bg-[#18181b] lg:h-1/2 max-lg:-my-16 max-lg:bg-cover"
        :style="`background-image: url('${path.mainGameBg}')`">
        <img class="h-1/2 ml-12 -scale-x-100 max-lg:h-1/4" :class="computedPlayerDamaged" :src="player.getImage()"
            alt="player-idle">
        <div class="flex flex-col justify-center items-center h-1/3 mr-12 max-lg:h-1/5 space-y-1">
            <p class="text-white stroke-black-text text-xl">{{ monster.name }}</p>
            <div class="flex items-center bg-zinc-800 h-3 w-24 border-[3px]">
                <div class="bg-red-500 h-3 w-24 border-y-[3px]" :style="`width: ${monster.getPercentHealth()}%`"></div>
            </div>
            <img class="h-full" :class="computedMonsterDamaged" :src="monster.getImage()"
                :alt="monster.getImage()">
        </div>
    </div>
    <!-- ACTIONBAR -->
    <ActionBar />
    <!-- CARD -->
    <GamblingCard />
    <Menu />
</template>
<style scoped>
.on-damage {
    filter: drop-shadow(0.3rem 0 0 rgb(239, 68, 68)) drop-shadow(0 0.3rem 0 rgb(239, 68, 68)) drop-shadow(-0.3rem 0 0 rgb(239, 68, 68)) drop-shadow(0 -0.3rem 0 rgb(239, 68, 68));
}
.character-turn {
    filter: drop-shadow(0.3rem 0 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 0.3rem 0 rgba(255, 255, 255, 0.5)) drop-shadow(-0.3rem 0 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 -0.3rem 0 rgba(255, 255, 255, 0.5));
}
</style>