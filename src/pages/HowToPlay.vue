<script setup>
import { backtoMain } from "../main.js"
import path from "../assets/path_data.json"
</script>
<template>
    <div class="justify-center flex">
        <img :src="path.howToPlay" alt="" class="w-[30rem] h-full">
    </div>
    <div class="flex flex-col justify-center p-[3.4rem] w-[30rem] h-[31rem] bg-center bg-no-repeat" :style="`background-image: url('${path.howToPlayBg}');`">
        <ul class="text-black text-4xl font-semibold tracking-wider overflow-y-scroll thai-pix">
            <li>* จะมีตัวละครให้ผู้เล่นเลือกเล่นทั้งหมด 3 ตัว โดยแต่ละตัวละครจะมีค่าสถานะ ที่ต่างกันไป ประกอบด้วย
                ค่าพลังชีวิต ค่าอัตราคริ ค่าโชคชะตา</li>
            <li>* หลังจากเลือกตัวละครเสร็จ ก็จะได้ต่อสู้กับมอนสเตอร์ โดยผู้เล่นจะต้องกด Attack
                ซึ่งจะมีการสลับกันสุ่มไพ่ของแต่ละฝั่งเพื่อนำค่าของไพ่มาเปรียบเทียบกัน</li>
            <li>* ไพ่ที่สุ่มจากน้อยไปมากจะประกอบด้วย A 2 3 4 5 6 7 8 9 10 J Q K</li>
            <li>* ถ้าฝั่งไหนมีค่ามากกว่าก็จะมีผลแพ้ชนะโดยจะมีผลต่อค่าพลังชีวิตของตัวละครแต่ละฝั่ง
                ถ้าหากไพ่มีการเสมอกันก็ไม่เป็นผล</li>
            <li>* เลเวลของเกมจะเพื่อขึ้นเรื่อยๆเมื่อสามารถกำจัดมอนสเตอร์ได้ และจะมีมอนสเตอร์เกิดมาใหม่</li>
            <li>* เกมนี้จะจบก็ต่อเมื่อผู้เล่นมีค่าพลังชีวิตเป็นศูนย์ เกมก็จะแสดงผลเลเวลสูงสุดที่ผู้เล่นเล่นถึง</li>
        </ul>
    </div>
    <div class="w-32 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"
        @click="backtoMain()">
        <img :src="path.back" alt="back-btn" class="w-full h-full">
    </div>
</template>
<style scoped></style>