<script setup>
import { player } from "../../assets/game/gameplay"
import path from '../../assets/path_data.json'

const modalId = "potionModal"
</script>
 
<template>
  <label :for="modalId" class="w-full h-full flex justify-center items-center cursor-pointer">ITEM</label>

  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="flex">
      <img :src="path.potionHealth" class="w-24 h-24 justify-center items-center" />
      <p class="mt-6">Increase Player Health</p>
      <button @click="player.usePotion()" class="btn mt-8 w-100 text-xl text-white hover:bg-emerald-500 border-0">X{{ player.duplicateHealth() }}</button>
    </div>
      <div class="modal-action">
        <label :for="modalId" class="btn w-full hover:bg-red-500 border-0">CLOSE</label>
      </div>

    </div>
  </div>

</template>
 
<style scoped></style>