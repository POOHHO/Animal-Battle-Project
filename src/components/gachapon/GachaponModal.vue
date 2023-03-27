<script setup>
const props = defineProps({
    output: {require: true},
    modalId: {type: String,require: true}
})
</script>

<template>

    <div class="modal" :id="modalId">
        <div class="modal-box break-all bg-neutral">
            <div class="text-white text-center  text-4xl pb-5">YOU GET THIS!!</div>
            <h1 class="text-center text-3xl text-emerald-500" > {{ output.name }}</h1>
            <img :src="output.imgPath" :alt="output.name">
            <div class="modal-action">
                <label :for="modalId" class="btn border-0 w-full bg-neutral-focus hover:bg-red-500">CLOSE</label>
            </div>
        </div>
    </div>
</template>