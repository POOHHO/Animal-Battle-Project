<script setup>
import { ref } from "vue";
import Forward from "./icon/Forward.vue";
import CharacterCard from "./CharacterCard.vue"

const props = defineProps({ characters: { type: Array,required: true }, myPlayers: {required: true}} )
const size = props.characters.length-1
const selectId = ref(0)
const next = () =>  selectId.value >= size ? selectId.value = 0 : selectId.value++
const previous =  () => selectId.value <= 0 ? selectId.value = size : selectId.value--
</script>
<template>
    <button class="pl-2 -scale-x-100" @click="previous()">
        <Forward class="bg-black rounded-md bg-opacity-50" />
    </button>
    <div v-for="(item, index) in characters" :key="index" v-show="item.id === selectId">
        <CharacterCard :char-id="item.id" :characters="characters" :my-players="myPlayers"/>
    </div>
    <button class="pl-2" @click="next()">
        <Forward class="bg-black rounded-md bg-opacity-50" />
    </button>
</template>
<style scoped></style>