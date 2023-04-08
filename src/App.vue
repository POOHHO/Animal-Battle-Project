<script setup>
import { init } from "./init.js"
import { RouterView } from "vue-router";
init()

</script>

<template>
    <router-view></router-view>
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
