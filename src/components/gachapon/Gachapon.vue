<script setup>
import { ref } from "vue";
import RandomGachapon from "./RandomGachapon.vue";
import GachaponModal from "./GachaponModal.vue";

const props = defineProps({ 
  gachaItemIcon: { type:String,required: true},
  gachaPotionIcon: { type:String, required:true},
  player: { type: Object, required: true },
  myItems: { required: true},
  myPlayers: { required: true}
})

const itemModal = "item-modal"
const potionModal = "potion-modal"
const gachaponModal = "gachapon-modal"

const modalId = ref('')
const outputItem = ref('')
const outputPotion = ref('')
const setModal = (id) => modalId.value = id
const randomItem = (output) => { outputItem.value = output; setModal(itemModal) }
const randomPotion = (output) => { outputPotion.value = output; setModal(potionModal) }


</script>
 
<template>
  <label :for="gachaponModal" class="btn">GACHAPON</label>

  <input type="checkbox" :id="gachaponModal" class="modal-toggle" />

  <div class="modal">
    <div class="modal-box bg-neutral-focus">
      <div class="flex flex-col items-center">
        <div class="text-white text-5xl pb-5">GACHAPON SHOP</div>
        <div class="flex">
          <RandomGachapon :modal-id="itemModal" :random-item="true" :icon-path="gachaItemIcon" @random="randomItem" 
            :my-players="myPlayers" :my-items="myItems" :player="player"
          />
          <RandomGachapon :modal-id="potionModal" :random-potion="true" :icon-path="gachaPotionIcon" @random="randomPotion" 
            :my-players="myPlayers" :my-items="myItems" :player="player"
          />
        </div>
      </div>
      <div class="flex">
        <label :for="gachaponModal" class="btn btn-sm absolute right-2 top-2 bg-neutral hover:bg-red-500">✕</label>
      </div>
    </div>
  </div>
  <GachaponModal :modal-id="modalId" :output="modalId === itemModal ? outputItem : outputPotion"/>
</template>
 
<style scoped></style>