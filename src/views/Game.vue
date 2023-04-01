<script setup>
import { show } from "../main.js"
import path from "../assets/path_data.json"
import { player, monster, level, turn, turns } from "../assets/game/gameplay.js"
import ActionBar from "../components/ActionBar.vue";
import GamblingCard from "../components/GamblingCard.vue";
import Menu from "../components/Menu.vue";
import { computed,onBeforeMount,onMounted } from "vue";
import { useItems } from "../assets/game/items";
import router from "../router";
import { auth } from "../main";
const myItems = useItems()
onBeforeMount(() => {
    if (!auth.value) router.push("/")
})
onMounted(async () => {
    await myItems.fetchItems()
})

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
const pause = () => show.value.pause = true

</script>
<template>
    <div class="screen w-screen h-screen overflow-x-hidden font-semibold flex flex-col justify-between text-white">
        <!-- HEADER TAB -->
        <div class="flex-none flex justify-between text-2xl px-8 bg-zinc-900 shadow-md z-10 items-center">
            <div class="flex flex-col">
                <p>LEVEL: {{ level }}</p>
                <p>TURN: {{ turns[turn] }}</p>
                <p>COIN: {{ player.coin.getCoin() }}</p>
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

            <img class="h-1/2 ml-12 -scale-x-100 max-lg:h-1/4" :src="player.getImage()" :class="computedPlayerDamaged"
                alt="player-idle">
            <div class="flex flex-col justify-center items-center h-1/3 mr-12 max-lg:h-1/5">
                <div v-show="show.monsterImg" class="flex stroke-black-text text-white text-2xl">
                    <p class="stroke-red-text">{{ monster.name }}</p>
                    <p class="text-red-500" v-show="show.playerAttack">&nbsp;{{ `-${player.getFinalDamage()}` }}</p>
                </div>
                <div v-show="show.monsterImg" class="border-white border-[3px] rounded-sm">
                    <div class="flex items-center bg-zinc-800 h-3 w-24 border-[3.5px] border-zinc-800">
                        <div class="bg-red-500 h-3 w-24 border-y-[3.5px] border-zinc-800"
                            :style="`width: ${monster.getPercentHealth()}%`"></div>
                    </div>
                </div>
                <img v-show="show.monsterImg" class="h-full my-2 py-2" :class="computedMonsterDamaged"
                    :src="monster.getImage()" :alt="monster.getImage()">
                <img v-show="show.dropCoin" class="h-full animate-bounce -scale-50" :src="path.coin" :alt="path.coin">
            </div>
        </div>
        <!-- ACTIONBAR -->
        <ActionBar />
        <!-- CARD -->
        <GamblingCard />
        <Menu />
    </div>
</template>
<style scoped>
.on-damage {
    filter: drop-shadow(0.3rem 0 0 rgb(239, 68, 68)) drop-shadow(0 0.3rem 0 rgb(239, 68, 68)) drop-shadow(-0.3rem 0 0 rgb(239, 68, 68)) drop-shadow(0 -0.3rem 0 rgb(239, 68, 68));
}

.character-turn {
    filter:
        drop-shadow(0.25rem 0 0 rgba(255, 255, 255, 0.6)) drop-shadow(0 0.25rem 0 rgba(255, 255, 255, 0.6)) drop-shadow(-0.25rem 0 0 rgba(255, 255, 255, 0.6)) drop-shadow(0 -0.25rem 0 rgba(255, 255, 255, 0.6));
}

.stroke-red-text {
    filter: drop-shadow(1.0px 0 0 rgb(239, 68, 68)) drop-shadow(0 1.0px 0 rgb(239, 68, 68)) drop-shadow(-1.0px 0 0 rgb(239, 68, 68)) drop-shadow(0 -0.5px 0 rgb(239, 68, 68));
}
</style>