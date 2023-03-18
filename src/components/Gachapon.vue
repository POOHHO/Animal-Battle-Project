<script setup>
import path from "../assets/path_data.json"
import { randomGashaItem,randomGashaSkill,itemimg,itemname,skillimg,skillname } from "../main.js"


</script>
 
<template>
 <label for="my-modal-3" class="btn">GACHAPON</label>
  
 <input type="checkbox" id="my-modal-3" class="modal-toggle" />

<div class="modal w-screen h-screen">
  <div class="modal-box w-full h-11/12 max-w-7xl relative">
    <div class="flex flex-col items-center">
      <div class="w-10/12">
        <img class="w-11/12" :src="path.gashaponword">
      </div>
      <div class="flex flex-row space-x-20  ">
      <div class="flex flex-col w-10/12 ">
        <h1 class="text-center mt-8 text-3xl text-cyan-200 textarea-bordered">ITEMS</h1>
        <img class="scale-75 " :src="path.gashapon" />
        <label for="my-modal-4" class="btn w-1/3 ml-24 " @click="randomGashaItem()"
          >100COIN</label
        >
      </div>
      <div class="flex flex-col w-10/12 ">
        <h1 class="text-center mt-8 text-3xl text-cyan-200 textarea-bordered">SKILLS</h1>
        <img class="scale-75" :src="path.gashapon2" />
        <label for="my-modal-5" class="btn w-1/3  ml-24" @click="randomGashaSkill()"
          >100COIN</label
        >
      </div>
    </div>
   
    </div>
    <div class="flex">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
    </div>
  </div>
</div>
<div>
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-1/4">
      <h1 class="text-center text-3xl text-cyan-200 textarea-bordered"> {{ itemname }}</h1>
      <img :src="itemimg">
      <div class="modal-action">
        <label for="my-modal-4" class="btn">Yay!</label>
      </div>
    </div>
  </div>
</div>
<div>
  <input type="checkbox" id="my-modal-5" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box w-1/4">
      <h1 class="text-center text-3xl text-cyan-200 textarea-bordered"> {{ skillname }}</h1>
      <img :src="skillimg">
      <div class="modal-action">
        <label for="my-modal-5" class="btn">Yay!</label>
      </div>
    </div>
  </div>
</div>
</template>
 
<style scoped>

</style>