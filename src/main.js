import { Character } from "./assets/entity/character.js"
import { Monster } from "./assets/entity/monster.js"
import { monster } from "./assets/game/gameplay.js"
import { ref } from "vue"
import path from "./assets/path_data.json"
let monsters = []
let characters = []

const auth = ref(false)
const show = ref({
    //ELEMENT
    cardAttack: false,
    attackButton: true,
    summaryAttack: false,
    monsterDamage: false,
    playerDamage: false,
    playerDead: false,
    pause:false,
    dropCoin: false,
    monsterImg: true,
    nameEmptyAlert: false,
})


function unpopup(showId,delay) {
    show.value[showId] = false
    if (delay) setTimeout(() => show.value[showId] = true,delay)
}
function popup(showId,delay) {
    show.value[showId] = true
    if (delay) setTimeout(() => show.value[showId] = false,delay)
}

function init() {
    monsters = [
        new Monster("Rapter",50,"rapter",10),
        new Monster("Amadilo",50,"amadilo",15),
        new Monster("Lionking",50,"lionKing",20) 

    ]
    characters = [
        new Character(0,"Foxster",250,5,30,path.bgCard1,path.foxsterIcon,path.Foxster),
        new Character(1,"Bearior",500,10,10,path.bgCard2,path.beariorIcon,path.Bearior),
        new Character(2,"Raccoon",250,20,5,path.bgCard3,path.raccoonIcon,path.Raccoon)
    ]

    randomMonster()
}

function randomMonster() {
    const randomIndex = Math.floor(Math.random()*monsters.length)
    monster.value = monsters[randomIndex]
}

export { 
    unpopup, popup, init, characters, monsters, show,auth, randomMonster
}