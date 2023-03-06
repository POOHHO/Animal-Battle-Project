<script setup>
import { ref } from "vue"
import { init, show, playBtn, howToPlayBtn, backtoMain, characters, mainGame, emptyName, backtogame, pause, tryagain } from "./main.js"
import path from "./assets/path_data.json"
import {
  player, monster, level, turn, turns, win, wins,
  playerTurn, getCard, nextTurn, getLoser, getLoserCard
} from "./assets/game/gameplay.js"
init()
const hover = "hover:-translate-y-1 hover:bg-teal-400 duration-300"

function getCardSource(card) {
  return path.card.replace("%card%", card)
  //src/assets/background/card/%card%.png
  //src/assets/background/card/K.png

}

const charCard = ref(0)

function nextChar() {
  charCard.value >= characters.length-1 ? charCard.value = 0 : charCard.value++
}

function previousChar() {
  charCard.value <= 0 ? charCard.value = characters.length-1 : charCard.value--
}
</script>
<!-- :style="`background-image: url('${path.mainimages}');`" -->
<template>
  <div v-show="show.mainBackground" class="w-screen h-screen bg-cover"
    :style="`background-image: url('${path.mainimages}');`">
    <div v-show="show.mainMenu" class="w-full h-full ">
      <div class="flex-col flex items-center w-full h-full justify-center">
        <div class="flex justify-center m-5">
          <img :src="path.animal_battle" alt="animal-battle" class="w-full h-full">
        </div>
        <div
          class="mb-4 w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
          @click="playBtn()">
          <img :src="path.play" alt="play-btn" class="w-full h-full">
        </div>
        <div
          class="w-52 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
          @click="howToPlayBtn()">
          <img :src="path.howToPlay" alt="how-to-play-btn" class="w-full h-full">
        </div>
      </div>
    </div>


    <!-- menu Characters -->

    <div v-show="show.characterSelect" class="flex flex-col items-center w-screen h-screen justify-center max-lg:hidden">
    
      <div class="flex flex-col items-center space-y-4">
        <div class="text-center text-black m04b absolute z-10 top-8" v-show="show.nameEmptyAlert">
          <div class="p-2 bg-red-600 items-center text-white leading-none rounded-full flex" role="alert">
            <span class="flex rounded-full bg-white uppercase px-2 text-xs font-bold mr-3 text-black">Error!</span>
            <span class="font-semibold mr-2 text-left flex-auto">Enter Your Name</span>
          </div>
        </div>
        <h1 class="text-5xl justify-center flex text-center m04b choose-character">Choose Character</h1>
        <label class="text-2xl text-white shadow-table m04b" for="YOURNAME">Your Name:</label>
        <input v-model="player.name" class="bg-slate-50 border-4 border-slate-600 bg-opacity-65 py-2q px-20 text-center m04b" type="text" placeholder="ENTER YOUR NAME" maxlength="18">
      </div>

      <div class="w-full flex justify-center overflow-x-scroll items-center space-x-4 p-5">
        <div v-for="(item, index) in characters" :key="index">
          <div @click="player.name.trim() === '' ? emptyName() : mainGame(item.id)"
            class="px-12 py-[3.25rem] rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 bg-center bg-cover cursor-pointer"
            :style="`background-image: url('${item.bg}')`">
            <div class="space-y-3">
              <h2 class="flex text-3xl text-black m04b">
                <span class="character-name text-white">{{ item.character }}</span>
              </h2>
              <img :src="item.icon" alt="" class="w-full h-full bg-white bg-opacity-60">
              <div class="flex flex-col items-center m04b">
                <table class="shadow-table text-right text-white m04b">
                  <tr>
                    <td class="text-left">HP :</td>
                    <td>{{ item.health }}</td>
                  </tr>
                  <tr>
                    <td>CRIT :</td>
                    <td>{{ item.crit }}</td>
                  </tr>
                  <tr>
                    <td>LUCK :</td>
                    <td>{{ item.luck }}</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-[10%] w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer m-4"
        @click="backtoMain()">
        <img :src="path.back" alt="" class="w-full h-full">
      </div>

    </div>


   
      <div v-show="show.characterSelect" class="w-screen h-screen lg:hidden flex flex-col justify-center items-center space-y-4">

        <div class="w-full flex justify-center items-center">
          <h1 class="text-2xl text-current m04b choose-character text-center">Choose Character</h1>
        </div>

        <div class="w-full flex flex-col justify-center items-center">
          <div class="text-center text-black m04b absolute z-10 top-8" v-show="show.nameEmptyAlert">
            <div class="p-2 bg-red-600 items-center text-white leading-none rounded-full inline-flex" role="alert">
              <span class="flex rounded-full bg-white uppercase px-2 text-xs font-bold mr-3 text-black">Error!</span>
              <span class="font-semibold mr-2 text-left flex-auto">Enter Your Name</span>
            </div>
          </div>
          <input v-model="player.name" class="w-auto bg-slate-50 border-4 border-slate-600 bg-opacity-65  text-center m04b"
            type="text" placeholder="ENTER YOUR NAME" maxlength="18">
        </div>

        <div class="w-auto flex flex-row justify-center">
          <div class="flex flex-row justify-center w-full h-full">
            <button @click="previousChar" class="pr-2 text-4xl text-white"><span class="pb-1 px-1 bg-black rounded-full bg-opacity-50 font-bold">&#60</span></button>
            <div  @click="player.name.trim() === '' ? emptyName() : mainGame(charCard)" 
            class="px-2 py-[3.25rem] space-y-2 items-center justify-center flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer bg-center bg-contain bg-no-repeat" :style="`background-image: url('${characters[charCard].bg}')`">
              <h2 class="m04b text-l character-name text-white">{{ characters[charCard].character }}</h2>
              <img :src="characters[charCard].icon" alt="" class="w-2/3 bg-black bg-opacity-60">
              <div class="flex flex-col items-center m04b">
                <table class="shadow-table text-left text-white text-sm">
                    <tr>
                      <td>HP :</td>
                      <td>{{ characters[charCard].health }}</td>
                    </tr>
                    <tr>
                      <td>CRIT :</td>
                      <td>{{ characters[charCard].crit }}</td>
                    </tr>
                    <tr>
                      <td>LUCK :</td>
                      <td>{{ characters[charCard].luck }}</td>
                    </tr>
                  </table>
                </div>
            </div>
            <button @click="nextChar" class="pl-2 text-4xl text-white"><span class="pb-1 px-1 bg-black rounded-full bg-opacity-50 font-bold">&#62</span></button>
          </div>
        </div>
        <div class="w-full h-[13%] flex justify-center">
          <img :src="path.back" alt="" class=" h-[50%]">
        </div>
      </div>

    

    <!-- how to play -->
    <div class="flex-col flex items-center w-full h-full justify-center" v-show="show.howToPlay">
      <div class="justify-center flex">
        <img :src="path.howToPlay" alt="" class="w-[30rem] h-full">
      </div>
      <div class="flex flex-col justify-center p-[3.4rem] w-[30rem] h-[31rem]"
        :style="`background-image: url('${path.howToPlayBg}'); background-position: center; background-repeat: no-repeat; `">
        <ul class="text-black text-4xl font-semibold tracking-wider overflow-y-scroll thai-pix">
          <li>* จะมีตัวละครให้ผู้เล่นเลือกเล่นทั้งหมด 3 ตัว โดยแต่ละตัวละครจะมีค่าสถานะ ที่ต่างกันไป ประกอบด้วย
            ค่าพลังชีวิต ค่าอัตราคริ ค่าโชคชะตา</li>
          <li>* หลังจากเลือกตัวละครเสร็จ ก็จะได้ต่อสู้กับมอนสเตอร์ โดยผู้เล่นจะต้องกด Attack
            ซึ่งจะมีการสลับกันสุ่มไพ่ของแต่ละฝั่งเพื่อนำค่าของไพ่มาเปรียบเทียบกัน</li>
          <li>* ไพ่ที่สุ่มจากน้อยไปมากจะประกอบด้วย A 2 3 4 5 6 7 8 9 10 J Q K</li>
          <li>* ถ้าฝั่งไหนมีค่ามากกว่าก็จะมีผลแพ้ชนะโดยจะมีผลต่อค่าพลังชีวิตของตัวละครแต่ละฝั่ง
            ถ้าหากไพ่มีการเสมอกันก็ไม่เป็นผล</li>
          <li>* เลเวลของเกมจะเพื่อขึ้นเรื่อยๆเมื่อสามารถกำจัดมอนสเตอร์ได้ และจะมีมอนสเตอร์เกิดมาใหม่</li>
          <li>* เกมนี้จะจบก็ต่อเมื่อผู้เล่นมีค่าพลังชีวิตเป็นศูนย์ เกมก็จะแสดงผลเลเวลสูงสุดที่ผู้เล่นเล่นถึง</li>
        </ul>
      </div>
      <div
        class="w-32 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        @click="backtoMain()">
        <img :src="path.back" alt="back-btn" class="w-full h-full">
      </div>
    </div>
  </div>
  <div v-show="show.mainGame"
    class="screen w-screen h-screen overflow-x-hidden font-semibold flex flex-col justify-between text-white">
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
    <div class="flex-1 flex justify-between items-center bg-contain bg-repeat-x bg-center bg-[#18181b] max-lg:-my-32"
      :style="`background-image: url('${path.mainGameBg}')`">
      <img class="h-1/2 ml-14 -scale-x-100 max-lg:h-1/4"
        :class="show.monsterAttack ? 'on-damage' : (turn === 0 ? 'character-turn' : '')" :src="player.getImage()"
        alt="player-idle">
      <img class="h-1/3 mr-14 max-lg:h-1/5"
        :class="show.playerAttack ? 'on-damage' : (turn === 1 ? 'character-turn' : '')" :src="monster.getImage()"
        :alt="monster.getImage()">
    </div>
    <!-- ACTION BAR -->
    <div class="flex flex-wrap items-center justify-center p-5 bg-zinc-900 max-lg:flex-col text-2xl">
      <!-- ATTACK BTN -->
      <button :disabled="!show.attackButton" @click="playerTurn()"
        class="flex-1 py-8 mr-5 w-full bg-emerald-500 text-white shadow-md spacing disabled:bg-zinc-600 hover:bg-teal-600"
        disabled>ATTACK</button>
      <!-- PLAYER -->
      <div class="flex flex-1 w-full py-3">
        <div class="shadow-md w-32 h-32 bg-zinc-800">
          <img class="opacity-85" :src="player.getIcon()" alt="player-icon">
        </div>
        <div class="flex-1 grid space-y-1 items-center ml-5">
          <p class="flex flex-col">
            <span class="font-bold text-emerald-500 drop-shadow-lg" v-text="player.name"></span>
          <div>
            <span>{{ `HP: ${player.health}` }}</span>
            <span v-show="show.monsterAttack" class="text-red-600">{{ `-${monster.damage}` }}</span>
            <span>{{ `/${player.maxHealth} (${player.character.character})` }} </span>
          </div>
          </p>
          <!-- HEALTH BAR -->
          <div class="bg-zinc-800 h-7 shadow-md mr-3">
            <div class="bg-emerald-400 h-7 mr-3" :style="`width: ${player.getPercentHealth()}%`"></div>
          </div>
        </div>
      </div>
      <!-- VS -->
      <p>VS</p>
      <!-- MONSTER -->
      <div class="flex flex-1 py-3 w-full md:ml-5">
        <div class="shadow-md w-32 h-32  bg-zinc-800 flex justify-center items-end">
          <img class="opacity-85 w-32 h-20" :src="path.rapterIcon" alt="monster-icon">
        </div>
        <div class="flex-1 grid space-y-1 items-center ml-5">
          <p class="flex flex-col">
            <span class="font-bold text-red-500 drop-shadow-lg" v-text="monster.name"></span>
          <div>
            <span>{{ `HP: ${monster.health}` }}</span>
            <span v-show="show.playerAttack" class="text-red-600">{{ `-${player.damage}` }}</span>
            <span>{{ `/${monster.maxHealth}` }} </span>
          </div>
          </p>
          <!-- HEALTH BAR -->
          <div class=" bg-zinc-800 h-7 shadow-md mr-3">
            <div class="bg-red-500 h-7 mr-3" :style="`width: ${monster.getPercentHealth()}%`"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- CARD -->
    <div class="flex">
      <div v-show="show.cardAttack || show.summaryAttack"
        class="absolute inset-0 flex items-center justify-center bg-zinc-700 bg-opacity-20 space-x-3 z-20">
        <div class="flex flex-col space-y-3">
          <div class="flex text-2xl shadow-xl bg-zinc-900 p-5 items-center justify-center">
            <!-- SUMMARY WIN -->
            <div v-show="show.summaryAttack">
              <span :class="win === 0 ? 'text-emerald-500' : (win === 2 ? 'text-emerald-500' : 'text-red-500')">{{
                wins[win] }}</span><span v-show="win !== 2">&nbsp;WIN</span>
            </div>
            <!-- TURN -->
            <div v-show="!show.summaryAttack">
              <!-- turns[0] -->
              <span :class="turn === 0 ? 'text-emerald-500' : 'text-red-500'">{{ turns[turn] }}</span>&nbsp;CARD
            </div>
          </div>
          <div class="flex justify-between w-53 max-w-2xl bg-gray shadow-xl text-3xl bg-white text-zinc-700">
            <img class="w-full h-full" :src="getCardSource(getCard())" :alt="getCard()">
          </div>
          <button class="p-2 text-white spacing bg-emerald-600 shadow-lg text-2xl" @click="nextTurn()"
            :class="hover">NEXT TURN</button>
        </div>
        <!-- SUMMARY LOSE -->
        <div class="flex flex-col space-y-3" v-show="show.summaryAttack && win !== 2">
          <div class="flex text-sm shadow-xl bg-zinc-900 p-5 items-center justify-center ">
            <span :class="win === 0 ? 'text-red-500' : 'text-emerald-500'">{{ getLoser() }}</span>&nbsp;LOSE
          </div>
          <div class="flex justify-between max-w-2xl w-24 bg-white shadow-xl text-md text-zinc-700">
            <img class="w-full h-full" :src="getCardSource(getLoserCard())" :alt="getLoserCard()">
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen"
        v-show="show.playerDead">
        <div>
          <img :src="path.gameOver" alt="" class="w-96">
        </div>
        <div class="flex justify-center m-8 space-x-5">
          <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl" @click="tryagain()">TRY
            AGAIN</button>
          <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl"
            @click="backtoMain()">BACK TO MAIN</button>
        </div>
      </div>
      <div class="flex  justify-center items-center absolute inset-0 bg-zinc-700 bg-opacity-90 w-screen h-screen"
        v-show="show.pause">
        <div class="justify-center space-y-5 flex flex-col items-center w-96">
          <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4  text-xl w-1/2"
            @click="backtogame()">RESUME</button>
          <button class="bg-emerald-500 hover:bg-teal-600 text-white font-bold py-2 px-4 text-xl w-1/2"
            @click="backtoMain()">BACK TO MAIN</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
  font-family: "upheavtt";
  src: url("./assets/font/upheavtt.ttf") format("truetype");
}

@font-face {
  font-family: "m04b";
  src: url(./assets/font/m04b.ttf);
}

@font-face {
  font-family: "thai-pix";
  src: url(./assets/font/2005_iannnnnAMD.ttf);
}

.thai-pix {
  font-family: "thai-pix";
}

.m04b {
  font-family: "m04b";
}

.screen,
.spacing {
  font-family: "upheavtt";
  letter-spacing: 0.12em;
}

.character-turn {
  filter: drop-shadow(0.3rem 0 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 0.3rem 0 rgba(255, 255, 255, 0.5)) drop-shadow(-0.3rem 0 0 rgba(255, 255, 255, 0.5)) drop-shadow(0 -0.3rem 0 rgba(255, 255, 255, 0.5));
}

.on-damage {
  filter: drop-shadow(0.3rem 0 0 rgb(239, 68, 68)) drop-shadow(0 0.3rem 0 rgb(239, 68, 68)) drop-shadow(-0.3rem 0 0 rgb(239, 68, 68)) drop-shadow(0 -0.3rem 0 rgb(239, 68, 68));
}

.stroke-text {
  filter: drop-shadow(0.5px 0 0 white) drop-shadow(0 0.5px 0 white) drop-shadow(-0.5px 0 0 white) drop-shadow(0 -0.5px 0 white);
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
}

.choose-character {
  filter: drop-shadow(1px 0 0 black) drop-shadow(0 1px 0 black) drop-shadow(-1px 0 0 black) drop-shadow(0 -1px 0 black);
}

.shadow-table {
  filter: drop-shadow(3px 0 0 black) drop-shadow(0 3px 0 black) drop-shadow(-3px 0 0 black) drop-shadow(0 -3px 0 black);
}

.character-name {
  filter: drop-shadow(4px 0 0 black) drop-shadow(0 4px 0 black) drop-shadow(-4px 0 0 black) drop-shadow(0 -4px 0 black);
}
</style>
