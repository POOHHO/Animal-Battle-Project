<script setup>
import path from "../../assets/path_data.json"

</script>
<template>
    <div class="flex justify-center hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer w-32" @click="$router.go(-1)">
        <img :src="path.back" alt="back-btn">
    </div>
</template>
<style scoped></style>