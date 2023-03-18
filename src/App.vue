<script setup>
import { init, show } from "./main.js"
import HowToPlay from "./pages/HowToPlay.vue"
import CharacterSelector from "./pages/CharacterSelector.vue"
import Game from "./pages/Game.vue"
import MainMenu from "./pages/MainMenu.vue"
import path from "./assets/path_data.json"
import AdventureCamp from "./pages/AdventureCamp.vue"

init()

</script>

<template>
  <div v-show="show.mainBackground" class="w-screen h-screen bg-cover"
    :style="`background-image: url('${path.mainimages}');`">
    <CharacterSelector v-if="show.characterSelect" />
    <div v-show="show.mainMenu || show.howToPlay" class="flex-col flex items-center w-full h-full justify-center">
      <MainMenu v-if="show.mainMenu" />
      <HowToPlay v-if="show.howToPlay" />
    </div>
  </div>
  <div v-show="show.mainGame"
    class="screen w-screen h-screen overflow-x-hidden font-semibold flex flex-col justify-between text-white">
    <Game/>
  </div>
  <div v-show="show.adventureCamp" class="screen w-screen h-screen bg-cover"
    :style="`background-image: url('${path.adventure}');`">
        <AdventureCamp/>
  </div>
</template>

<style>
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

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: black;
}

.shadow-table {
  filter: drop-shadow(3px 0 0 black) drop-shadow(0 3px 0 black) drop-shadow(-3px 0 0 black) drop-shadow(0 -3px 0 black);
}

.stroke-text {
  filter: drop-shadow(0.5px 0 0 white) drop-shadow(0 0.5px 0 white) drop-shadow(-0.5px 0 0 white) drop-shadow(0 -0.5px 0 white);
}

.stroke-black-text {
  filter: drop-shadow(2.5px 0 0 black) drop-shadow(0 2.5px 0 black) drop-shadow(-2.5px 0 0 black) drop-shadow(0 -2.5px 0 black);
}
</style>
