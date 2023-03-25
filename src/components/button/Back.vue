<script setup>
import path from "../../assets/path_data.json"

const props = defineProps(["height","width"])
</script>
<template>
    <div class="h-[10%] flex justify-center hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer" @click="$router.go(-1)">
        <img :src="path.back" alt="back-btn" :class="`h-${height} w-${width}`">
    </div>
</template>
<style scoped></style>