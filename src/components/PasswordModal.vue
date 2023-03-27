<script setup>
import { player } from "../assets/game/gameplay.js"

const props = defineProps({
    modalId: {type: String,require: true}
})

</script>
 
<template>
<div>
    <input type="checkbox" :id="modalId" class="modal-toggle bg-neutral-focus" />
    <div class="modal">
    <input  type="text" id="password"
            v-model="player.password"
            class="` modal-toggle border-4 border-slate-600 text-slate-900 bg-white text-center m04b paddingX paddingY`" 
            placeholder="ENTER YOUR PASSWORD" maxlength="18">
    </div>
</div>
</template>
 
<style scoped>

</style>