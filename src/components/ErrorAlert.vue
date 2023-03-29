<script setup>
const props = defineProps({
    errorText: {type: String,default:''}
})
</script>
<template>
    <div class="text-center text-black m04b absolute z-10 top-8">
        <div class="p-2 bg-red-600 items-center text-white leading-none rounded-full flex" role="alert">
            <span
                :class="`text-xs flex rounded-full bg-white uppercase px-2 font-bold mr-3 text-black`">Error!</span>
            <span class="font-semibold mr-2 text-left flex-auto">{{ errorText }}</span>
        </div>
    </div>
</template>
<style scoped></style>