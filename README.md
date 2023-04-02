# PROJECT2-SEC-1-SoyJuTheLegend

#### สมาชิกกลุ่ม

64130500016 ฌานพล ทิพวัน (พล)<br>
64130500024 ดวงเจริญ สิวะสุธรรม (ริว)  
64130500040 ธีรศักดิ์ เจียระนานนท์ (ดิว)<br> 
64130500048 ปวริศ พงษ์รัตน์ (นิวตัน)<br>
64130500056 พัชรพล แปลนาค (พู) 

## Features Application
 <ul>
   <li>setshow() การเซ็ทเปิดปิดหน้าต่างๆ</li>
   <li>popup() ตัวคอยdelayในการแสดงหน้านั้นๆ</li>
   <li>init() เก็บขอมูลของ character และ monter</li>
   <li>nextTurn() เป็นตัวกำหนดTurnว่าเป็นTurnของใคร</li>
   <li>Attack() เป็นตัวคำนวณDamage</li>
   <li>randomCard() random การ์ดตั้งแต่ 1-12 แลพคำนวณตามค่าluckของcharacterนั้นๆ</li>
   <li>summaryTurn() ค่อยคำนวณว่าฝ่ายไหนชนะพร้อมแสดงค่าDamage</li>
   <li>getCard() เป็น function ที่ return การ์ดของplayerและmonterเพ่อนนำมาแสดง</li>
   <li>dead() เมื่อผู้เล่นมีเลือดเท่ากับ 0 จะแสดงgameover</li>
   <li>getCardSource() เปิดค้นหาการ์ดเพื่อมาแสดง</li>
</ul>

## Manual
 <ul>
<li>เกมแนว turnbase เป็นเกมต่อสู้สลับฝั่งกันเล่นโดยการจั่วไพ่เพื่อหาผู้ชนะมาในธีม animal pixel Art</li>
  <li>ในหน้า Howtoplay จะมีอธิบายวิธีการเล่นตัวเกม</li>
  <li>หน้าเลือกตัวละครจะสามารถกรอกชื่อผู้เล่นและมีตัวละครให้เลือกทั้งหมด3ตัว</li>
  <li>แต่ละตัวละครจะมีค่าสถานะที่แตกต่างกันจะส่งผลต่อgameplay</li>
  <li>เข้าสู้หน้าเกมจะแสดงตัวละครของผู้เล่นที่ได้เลือกมาจะได้ต่อสู้กับมอนเตอร์</li>
  <li>การต่อสู้จะเป็นการกดปุ่มAttackเพื่อเริ่มเทิร์น ระบบจะทำการสุ่มการ์ดออกมาให้ผู้เล่นและการ์ดของมอนเตอร์</li>
  <li>หลังจากสุ่มการ์ดแล้วจะเข้าสู่ Summary Turn เพื่อหาค่าการ์ดของฝ่ายที่มากกว่ากัน </li>
  <li>ตัวเกมจะสลับกันสู้จนกว่าจะรู้ผลแพ้ชนะ</li>
</ul>

 ## SOURCE REFERENCES
- https://www.dafont.com/m04fatal-fury.font (m04fatal-fury font)
- https://www.dafont.com/upheaval.font (upheaval font)
- https://github.com/joseph-coyne/vue-rpg (game inspiration and reference) (ใช้เป็น data ตัวอย่างเพื่อเป็นการ design ตัวเกมของเรา)
