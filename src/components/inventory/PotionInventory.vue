<script setup>
import { computed } from 'vue';
const props = defineProps({ player: Object, myItems: { required: true} })

const modalId = "potionModal"
const getPotions = () => {
  const potions = props.player.potions
  let count = {}
  potions.forEach((key) => {
    if (!count.hasOwnProperty(key)) count[key] = { item: props.myItems.getPotionById(key), amount: 0 }
    count[key].amount = count[key].amount + 1
  })
  return count
}  
const computedPotion = computed(() => props.player.potions.length <= 0)
</script>
 
<template>
  <label :for="modalId" class="w-full h-full flex justify-center items-center cursor-pointer">POTION</label>

  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <div class="text-red-500" v-show="computedPotion">YOUR POTION IS EMPTY</div>
      <div class="flex justify-between items-center space-y-4" v-for="(potion, index) in getPotions()" :key="index">
        <img :src="potion.item.imgPath" class="w-16 h-16 " />
        <p class="flex flex-col">{{ potion.item.name }}<span>{{ `[+HP ${potion.item.health}]` }}</span></p>
        <button @click="player.usePotion(potion.item)"
          class="btn text-xl text-white hover:bg-emerald-500 border-0 w-16">X{{
            potion.amount }}</button>
      </div>

      <div class="modal-action">
        <label :for="modalId" class="btn w-full hover:bg-red-500 border-0">CLOSE</label>
      </div>

    </div>
  </div>
</template>
 
<style scoped></style>