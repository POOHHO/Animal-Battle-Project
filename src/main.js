import { Character } from "./assets/entity/character.js"
import { Monster } from "./assets/entity/monster.js"
import { player,monster } from "./assets/game/gameplay.js"
import { ref } from "vue"
import path from "./assets/path_data.json"
let monsters = []
let characters = []

const show = ref({
    //ELEMENT
    cardAttack: false,
    attackButton: true,
    summaryAttack: false,
    monsterDamage: false,
    playerDamage: false,
    playerDead: false,
    pause:false,
    monsterImg: true,
    //BG
    mainBackground: true,
    howToPlay: false,
    mainMenu: true,
    characterSelect: false,
    mainGame: false,
    nameEmptyAlert: false,
    dropcoin: false,
    adventureCamp: false
})

function setShow(id,isShow) {
    show.value[id] = isShow
}

function playBtn() {
    setShow("characterSelect",true)
    setShow("mainMenu",false)
}

function howToPlayBtn() {
    setShow("howToPlay",true)
    setShow("mainMenu",false)
}
function backtoMain(){
    setShow("howToPlay",false)
    setShow("characterSelect",false)
    setShow("playerDead",false)
    setShow("mainGame",false)
    setShow("mainMenu",true)
    setShow("mainBackground",true)
    setShow("pause",false)
    player.value.name = ""
}

function campGame(character){
    setShow("characterSelect",false)
    setShow("mainMenu",false)
    setShow("howToPlay",false)
    setShow("mainBackground",false)
    setShow("adventureCamp",true)
    player.value.selectCharacter(character)
    monster.value.setMaxHealth()
}

function mainGame(character){
    setShow("characterSelect",false)
    setShow("mainMenu",false)
    setShow("howToPlay",false)
    setShow("mainBackground",false)
    setShow("adventureCamp",false)
    setShow("mainGame",true)
    player.value.selectCharacter(character)
    monster.value.setMaxHealth()
}

function backtogame(){
    setShow("characterSelect",false)
    setShow("playerDead",false)
    setShow("mainGame",true)  
    setShow("pause",false)
    
}

function tryagain(){
    setShow("mainBackground",true)
    setShow("characterSelect",true)
    setShow("playerDead",false)
    setShow("mainGame",false)
    setShow("pause",false)
    player.value.name = ""

}

function pause(){
    setShow("pause",true)
}

function emptyName() {
    popup("nameEmptyAlert",3000)
}

function respawnDelay() {
    popup("dropcoin",1500)
    unpopup("monsterImg", 2000)
}

function unpopup(id,delay) {
    setShow(id,false)
    if (delay) setTimeout(() => setShow(id,true),delay)
}
function popup(id,delay) {
    setShow(id,true)
    if (delay) setTimeout(() => setShow(id,false),delay)
}

function init() {
    monsters = [
        new Monster("Rapter",50,"rapter",10),
        new Monster("Amadilo",50,"amadilo",15),
        new Monster("Lionking",50,"lionKing",20) 

    ]
    characters = [
        new Character(0,"Foxster",250,3,99,path.bgCard1,path.foxsterIcon,path.Foxster),
        new Character(1,"Bearior",1,1,1,path.bgCard2,path.beariorIcon,path.Bearior),
        new Character(2,"Raccoon",250,99,3,path.bgCard3,path.raccoonIcon,path.Raccoon)
    ]

    randomMonster()
}

function randomMonster() {
    const randomIndex = Math.floor(Math.random()*monsters.length)
    monster.value = monsters[randomIndex]
}

import db from "../data/db.json"
function randomGachaItem(){
    const randomIndex = Math.floor(Math.random() * db.items.length);
    const items = db.items[randomIndex]
    player.value.inventory.push(items.id)
    return items

}
function randomGachaSkill(){
    let randomIndex = Math.floor(Math.random() * db.skills.length);
    return db.skills[randomIndex]
}
export { 
    unpopup, popup, init, characters, monsters, show, playBtn, 
    howToPlayBtn, backtoMain, mainGame, emptyName, backtogame, pause, 
    tryagain, randomMonster, respawnDelay,campGame,randomGachaItem,randomGachaSkill
}