import { Player } from "../entity/player.js"
import { popup,unpopup } from "../../main.js"
import { ref } from 'vue'

//DEFAULT DYNAMIC VALUE
const player = ref(new Player()) 
const monster = ref("")
const level = ref(1)
const turn = ref(0) //0 = PLAYER, 1 = MONSTER, 2 = SUMMARY
const win = ref(0)  //0 = PLAYER, 1 = MONSTER, 2 = DRAW
//ARRAY
const turns = [ "PLAYER","MONSTER", "SUMMARY" ] 
const wins = [ "PLAYER","MONSTER","DRAW" ]
const cards = [ "A", "2","3","4","5","6","7","8","9","10","J","Q","K"]

function nextTurn() {
    if (turn.value === 0) {
        monsterTurn()
        turn.value++ //TURN 1
    } else if (turn.value === 1) {
        summaryTurn()
        turn.value++        
    } else {
        //CARD SHOW
        unpopup("summaryAttack")
        unpopup("cardAttack")
        //ATTACK BUTTON
        popup("attackButton")
        if (win.value === 0) player.value.playerAttack()
        else if (win.value === 1) monster.value.monsterAttack()    
        turn.value = 0
    }
}
function playerTurn() {
    unpopup("attackButton")
    randomPlayerCard()
    popup("cardAttack")
}
function monsterTurn() {
    randomMonsterCard()
    popup("cardAttack")
}

function summaryTurn() {
    const monsterDamage = monster.value.cardDamage
    const playerDamage = player.value.cardDamage

    if (playerDamage > monsterDamage) win.value = 0
    else if (monsterDamage > playerDamage) win.value = 1
    else win.value = 2
   
    popup("summaryAttack")
}

function getLoser() {
    return wins[win.value === 0 ? win.value+1 : win.value-1] // 0 PLAYER : 1 MONSTER
}
function getLoserCard() {
    return win.value === 0 ? getMonsterCard() : getPlayerCard()
}
function getPlayerCard() {
    return player.value.cardName
}
function getMonsterCard() {
    return monster.value.cardName
}
function getCard() {
    if (turn.value === 0) return getPlayerCard() //PLAYER
    else if (turn.value === 1) return getMonsterCard() //MONSTER
    else { //SUMMARY 
        if (win.value === 0) return getPlayerCard() //IF PLAYER WIN
        else return getMonsterCard() //IF MONSTER WIN
    }
}


function randomMonsterCard() {
    const randomCard = Math.floor(Math.random()*cards.length) //0-12
    const monsterData = monster.value
    monsterData.cardName = cards[randomCard]
    monsterData.cardDamage = randomCard+1
}


function randomPlayerCard(){
    const random = Math.floor(Math.random() * 100)
    const luck = player.value.luck
    const breakpoint = cards.length-4

    let randomCard = ""
    if (random < luck) randomCard = Math.floor(Math.random() * 4) + breakpoint
    else randomCard = Math.floor(Math.random() * breakpoint)

    const playerData = player.value
    playerData.cardName = cards[randomCard]
    playerData.cardDamage = randomCard+1
}

export { 
    monster,player,level,turn,turns,cards,wins,win,
    monsterTurn,playerTurn,getCard
    ,nextTurn,getLoserCard,getLoser
}