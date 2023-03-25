<script setup>
const props = defineProps({
    output: {require: true},
    modalId: {type: String,require: true}
})
</script>

<template>
    <input type="checkbox" :id="modalId" class="modal-toggle bg-neutral" />
    <div class="modal">
        <div class="modal-box break-all bg-base-100">
            <div class="text-white text-center  text-4xl pb-5">YOU GET THIS!!</div>
            <h1 class="text-center text-3xl text-cyan-200" > {{ output.name }}</h1>
            <img :src="output.imgPath" :alt="output.name">
            <div class="modal-action">
                <label :for="modalId" class="btn w-full">CLOSE</label>
            </div>
        </div>
    </div>
</template>