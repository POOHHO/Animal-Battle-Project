# PROJECT2-SEC-1-SoyJuTheLegend

#### สมาชิกกลุ่ม

64130500016 ฌานพล ทิพวัน (พล) 20% ทำ feature ระบบค่าเงิน, ใช้ขวดเลือด และ ทำระบบ gachapon, ทำ router ของ view<br>
64130500024 ดวงเจริญ สิวะสุธรรม (ริว) 24% วางโครงสร้าง Project, ออกแบบ UI และ refractor โค้ด<br>
64130500040 ธีรศักดิ์ เจียระนานนท์ (ดิว) 18% ทำ feature player slot, วางโครงสร้างข้อมูล db json, ทำ fetch ข้อมูล<br> 
64130500048 ปวริศ พงษ์รัตน์ (นิวตัน) 20% ทำ feature ช่องเก็บของ, ใช้ขวดเลือด, ลบไอเทม และ ทำระบบ gachapon<br>
64130500056 พัชรพล แปลนาค (พู) 18% ทำ feature login, แยก component ส่งค่า (prop, emits), ทำ fetch ข้อมูล

## Features Application
<h5>Animal Bettle กลุ่มของเราเป็นเกมแนว Turn Based ธีม Pixcel Art</h5>
 <ul>
1. MainMenu เป็นหน้าแรกเพื่อที่สามารถกดเข้าสู่หน้า Login หรือ Howtoplay<br>
2. CharacterSelector สามารถ CreateAccount , Login , RemoveAccount หรือ FilterหาAccountที่สร้างไว้ได้<br>
3. AdventureCamp สามารถเข้าได้ 3 อย่างเป็น<br>
<li> Gachapon เป็นการสุ่มitemและpotion </li>
<li> Inventory จากการสุ่ม Gachapon จะถูกส่งมาที่ Inventory สามารถสวมใส่Itemเพื่อเพิ่มค่าสถาณะของตัวละคร </li>
<li> Adventure จะพาเข้าสู่หน้าเข้าเกม </li>
</ul>

## Manual
 <ul>
<li>เกมแนว turnBased เป็นเกมต่อสู้สลับฝั่งกันเล่นโดยการจั่วไพ่เพื่อหาผู้ชนะมาในธีม animal pixel Art</li>
  <li>ในหน้า Howtoplay จะมีอธิบายวิธีการเล่นตัวเกม</li>
  <li>หน้าเลือก Slot ตัวละครที่สามารถสร้างตัวละครและลบตัวละครได้</li>
  <li>หน้าเลือกตัวละครจะสามารถกรอกชื่อผู้เล่นและมีตัวละครให้เลือกทั้งหมด3ตัวและจะให้ตั้งรหัสผ่านเพื่อนใช้login</li>
  <li>แต่ละตัวละครจะมีค่าสถานะที่แตกต่างกันจะส่งผลต่อgameplay</li>
 <li>หลังเลือกตัวละครจะเข้าสู่หน้าแคมป์ในหน้าแคมป์จะมี gachapon inventory และ adventureเพื่อเข้าสู่หน้าต่อสู้</li>
  <li>เข้าสู้หน้าเกมจะแสดงตัวละครของผู้เล่นที่ได้เลือกมาจะได้ต่อสู้กับมอนเตอร์</li>
  <li>การต่อสู้จะเป็นการกดปุ่มAttackเพื่อเริ่มเทิร์น ระบบจะทำการสุ่มการ์ดออกมาให้ผู้เล่นและการ์ดของมอนเตอร์</li>
  <li>หลังจากสุ่มการ์ดแล้วจะเข้าสู่ Summary Turn เพื่อหาค่าการ์ดของฝ่ายที่มากกว่ากัน </li>
  <li>ตัวเกมจะสลับกันสู้จนกว่าจะรู้ผลแพ้ชนะและถ้าผู้เล่นชนะจะได้รับcoinเพื่อที่จะสามารถไปสุ่มในGachaponได้</li>
</ul>

 ## Feature Video
 https://youtu.be/2FdJ_k7E87c
 ## Canvas Component Design & UI Design
 https://www.canva.com/design/DAFe37B0piA/Hot1GbHIXvfYbGBBOV1hVA/edit?utm_content=DAFe37B0piA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
 
 ## Inspiration
 สมาชิกภายในกลุ่มชอบในการเล่นเกมเลยเลือกที่จะทำ Projectนี้เกี่ยวกับเกม มีคนในกลุ่มชอบเกี่ยวกับ Pixcel เลยที่จะเลือกทำเกมที่มาในธีม pixcel และได้มาในชื่อเกม Animal Bettle เป็นเกมต่อสู้แนว TrunBased   
 ## SOURCE REFERENCES
- https://www.dafont.com/m04fatal-fury.font (m04fatal-fury font)
- https://www.dafont.com/upheaval.font (upheaval font)
- https://github.com/joseph-coyne/vue-rpg (game inspiration and reference) (ใช้เป็น data ตัวอย่างเพื่อเป็นการ design ตัวเกมของเรา)
