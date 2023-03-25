<script setup>
import path from "../../assets/path_data.json"
import RandomGachapon from "./RandomGachapon.vue";
import { ref } from "vue";
import GachaponModal from "./GachaponModal.vue";


const outputItem = ref('')
const outputSkill = ref('')
const randomItem = (output) => { outputItem.value = output }
const randomSkill = (output) => {outputSkill.value = output}

const itemModal = "item-modal"
const skillModal = "skill-modal"
const gachaponModal = "gachapon-modal"
</script>
 
<template>
  <label :for="gachaponModal" class="btn">GACHAPON</label>

  <input type="checkbox" :id="gachaponModal" class="modal-toggle" />

  <div class="modal">
    <div class="modal-box">
      <div class="flex flex-col items-center">
        <!-- <img class="w-5/6 pb-5" :src="path.gachaponIcon"> -->
        <div class="text-white text-5xl pb-5">GACHAPON SHOP</div>
        <div class="flex">
          <RandomGachapon :modal-id="itemModal" :random-item="true" :icon-path="path.gachapon1" @random="randomItem" />
          <RandomGachapon :modal-id="skillModal" :random-skill="true" :icon-path="path.gachapon2" @random="randomSkill" />
        </div>
      </div>
      <div class="flex">
        <label :for="gachaponModal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
      </div>
    </div>
  </div>
  <GachaponModal :modal-id="itemModal" :output="outputItem"/>
  <GachaponModal :modal-id="skillModal" :output="outputSkill" />
</template>
 
<style scoped></style>