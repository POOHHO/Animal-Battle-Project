<script setup>
import { player } from "../../assets/game/gameplay"

const potion = player.value.potions
function test(){
    console.log(potion);
}
</script>
 
<template>
    
    <label for="my-modal-6" class="btn2 w-full h-full">ITEM</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box w-full ">
  
   <div v-for="(value) in potion">
    <div>
   <img class="w-32" :src="value.imgPath">
   {{ value.name }}
   <p> {{ player.amountPotion() }}</p>
   </div>

   </div>
    <div class="modal-action">
      <label for="my-modal-6" class="btn2">Yay!</label>
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