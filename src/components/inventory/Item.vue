<script setup>
import { player } from "../../assets/game/gameplay"
import path from '../../assets/path_data.json'
import { ref } from "vue";


</script>
 
<template>
    
    <label for="my-modal-6" class="btn2 w-full h-full">ITEM</label>

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle  w-screen">
  <div class="modal-box w-screen ">
      <div class="flex flex-col w-full">
        <div class="flex flex-row "> 
        <img :src="path.potionHealth" class="w-24 h-24 justify-center items-center"/>
        <p  class="mt-6">increase player Health</p>
        <button @click="player.usePotion()" class="btn mt-8 w-100 text-xl">X{{ player.duplicateHealth() }}</button>
        </div>
        <div class="flex flex-row ">
        <img :src="path.potionMana" class="w-24 h-24 justify-center items-center"/>
        <p  class="mt-6">increase player Mana</p>
        <button class="btn mt-8 w-100 text-xl">X{{ player.duplicateMana() }}</button>
        </div>
   </div>
      <div class="modal-action">
      <label for="my-modal-6" class="btn">BACK</label>
    </div>
  </div>
</div>
</template>
 
<style scoped>
.btn2 {
    display: inline-flex;
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    border-color: transparent;
    border-color: hsl(var(--n) / var(--tw-border-opacity));
    text-align: center;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    
}
</style>