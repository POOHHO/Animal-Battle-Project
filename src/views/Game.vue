<script setup>
import { show,unpopup,popup,player, monster, auth } from "../init.js"
import { useItems } from "../assets/game/items";
import path from "../assets/path_data.json"

import ActionBar from "../components/ActionBar.vue";
import GamblingCard from "../components/GamblingCard.vue";
import Menu from "../components/Menu.vue";
import { computed,onBeforeMount,onMounted } from "vue";
import router from "../router";
import { ref } from "vue";

const myItems = useItems()
const turn = ref(0) //0 = PLAYER, 1 = MONSTER, 2 = SUMMARY
const win = ref(0)  //0 = PLAYER, 1 = MONSTER, 2 = DRAW
//ARRAY
const turns = [ "PLAYER","MONSTER", "SUMMARY" ] 
const cards = [ "A", "2","3","4","5","6","7","8","9","10","J","Q","K"]
const wins = [ "PLAYER","MONSTER","DRAW" ]

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


const nextTurn = (currentTurn) => {
    if (currentTurn === 0) {
        monsterTurn()
        turn.value++ //TURN 1
    } else if (currentTurn === 1) {
        summaryTurn()
        turn.value++        
    } else {
        //CARD SHOW
        unpopup("summaryAttack")
        unpopup("cardAttack")
        //ATTACK BUTTON
        popup("attackButton")
        if (win.value === 0) player.value.playerAttack()
        else if (win.value === 1) monster.value.monsterAttack()    
        turn.value = 0
    }
}

const monsterTurn = () => {
    randomMonsterCard()
    popup("cardAttack")
}
const summaryTurn = () => {
    const monsterDamage = monster.value.cardDamage
    const playerDamage = player.value.cardDamage

    if (playerDamage > monsterDamage) win.value = 0
    else if (monsterDamage > playerDamage) win.value = 1
    else win.value = 2
   
    popup("summaryAttack")
}
const randomMonsterCard = () => {
    const randomCard = Math.floor(Math.random()*cards.length) //0-12
    monster.value.cardName = cards[randomCard]
    monster.value.cardDamage = randomCard+1
}

const playerAttack = (randomCard) => {
    unpopup("attackButton")
    player.value.cardName = cards[randomCard]
    player.value.cardDamage = randomCard+1
    popup("cardAttack")
}
const resumeOrCamp = (actionId) => {
    show.value[actionId] = false
    if (actionId === "playerDead") router.push("/camp") //CAMP
}
const mainOrCamp = (actionId) => {
    show.value[actionId] = false
    if (actionId === "playerDead") router.push("/") //MAIN
    else router.push("/camp") //CAMP
}
</script>
<template>
    <div class="screen w-screen h-screen overflow-x-hidden font-semibold flex flex-col justify-between text-white">
        <!-- HEADER TAB -->
        <div class="flex-none flex justify-between text-2xl px-8 bg-zinc-900 shadow-md z-10 items-center">
            <div class="flex flex-col">
                <p>LEVEL: {{ player.level }}</p>
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
        <ActionBar :player="player" :monster="monster" :cards="cards" :my-items="myItems" :show="show" @attack="playerAttack"/>
        <!-- CARD -->
        <GamblingCard :player="player" :monster="monster" :turns="turns" :turn="turn" :win="win" :wins="wins" :show="show" :card-path="path.card" @next-turn="nextTurn"/>
        <Menu :game-over-icon="path.gameOver" :show="show" @camp-or-resume="resumeOrCamp" @camp-or-main="mainOrCamp"/>
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