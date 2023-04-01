<script setup>
import path from "../assets/path_data.json"
import Back from "../components/button/Back.vue";
</script>
<template>
    <div class="w-screen h-screen bg-cover" :style="`background-image: url('${path.mainimages}');`">
        <div class="flex flex-col items-center w-full h-full justify-center">
            <div class="flex justify-center">
                <img :src="path.howToPlay" alt="how-to-play" class="w-[30rem] h-full">
            </div>
            <div class="flex justify-center p-[3.4rem] w-[30rem] h-[31rem] bg-center bg-no-repeat"
                :style="`background-image: url('${path.howToPlayBg}');`">
                <div class="text-black text-3xl font-semibold tracking-wider overflow-y-scroll thai-pix">
                    <p>* จะมีตัวละครให้ผู้เล่นเลือกเล่นทั้งหมด 3 ตัว โดยแต่ละตัวละครจะมีค่าสถานะ ที่ต่างกันไป ประกอบด้วย
                        ค่าพลังชีวิต ค่าอัตราคริ ค่าโชคชะตา</p>
                    <p>* หลังจากเลือกตัวละครเสร็จ ก็จะได้ต่อสู้กับมอนสเตอร์ โดยผู้เล่นจะต้องกด Attack
                        ซึ่งจะมีการสลับกันสุ่มไพ่ของแต่ละฝั่งเพื่อนำค่าของไพ่มาเปรียบเทียบกัน</p>
                    <p>* ไพ่ที่สุ่มจากน้อยไปมากจะประกอบด้วย A 2 3 4 5 6 7 8 9 10 J Q K</p>
                    <p>* ถ้าฝั่งไหนมีค่ามากกว่าก็จะมีผลแพ้ชนะโดยจะมีผลต่อค่าพลังชีวิตของตัวละครแต่ละฝั่ง
                        ถ้าหากไพ่มีการเสมอกันก็ไม่เป็นผล</p>
                    <p>* เลเวลของเกมจะเพื่อขึ้นเรื่อยๆเมื่อสามารถกำจัดมอนสเตอร์ได้ และจะมีมอนสเตอร์เกิดมาใหม่</p>
                    <p>* เกมนี้จะจบก็ต่อเมื่อผู้เล่นมีค่าพลังชีวิตเป็นศูนย์ เกมก็จะแสดงผลเลเวลสูงสุดที่ผู้เล่นเล่นถึง</p>
                </div>
            </div>
            <Back />
        </div>
    </div>
</template>
<style scoped></style>