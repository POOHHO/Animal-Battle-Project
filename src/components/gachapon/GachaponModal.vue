<script setup>
const props = defineProps({
    output: {require: true},
    modalId: {type: String,required: true}
})
</script>

<template>
    <input type="checkbox" :id="modalId" class="modal-toggle bg-neutral-focus" />
    <div class="modal" :id="modalId">
        <div class="modal-box break-all bg-neutral flex flex-col items-center">
            <div class="text-white text-center  text-4xl pb-5">YOU GET THIS!!</div>
            <h1 class="text-center text-3xl text-emerald-500" > {{ output.name }}</h1>
            <img class="w-32 h-32" :src="output.imgPath" :alt="output.name">
            <div class="modal-action w-full">
                <label :for="modalId" class="btn border-0 w-full bg-neutral-focus hover:bg-red-500">CLOSE</label>
            </div>
        </div>
    </div>
</template>