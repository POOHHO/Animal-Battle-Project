import { Character } from "./assets/entity/character.js"
import { Player } from "./assets/entity/player.js"
import { Monster } from "./assets/entity/monster.js"
import { ref } from "vue"
import path from "./assets/path_data.json"
let monsters = []
let characters = []

//DEFAULT DYNAMIC VALUE
const player = ref(new Player()) 
const monster = ref("")

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
        new Monster("Rapter",30,"rapter",40),
        new Monster("Amadilo",40,"amadilo",50),
        new Monster("Lionking",30,"lionKing",40),
        new Monster("Sheeppy",20,"dewstupid",30),
        new Monster("dragonnoi",50,"newtonnoob",60)

    ]
    characters = [
        new Character(0,"Foxster",120,5,30,path.bgCard1,path.foxsterIcon,path.Foxster),
        new Character(1,"Bearior",180,5,5,path.bgCard2,path.beariorIcon,path.Bearior),
        new Character(2,"Raccoon",100,20,5,path.bgCard3,path.raccoonIcon,path.Raccoon)
    ]

    randomMonster()
}

function resetPlayer() {
    player.value = new Player()
}

function randomMonster() {
    const randomIndex = Math.floor(Math.random()*monsters.length)
    monster.value = monsters[randomIndex]
}

export { 
    unpopup, popup, init, characters, monsters, show,auth, randomMonster, player,monster , resetPlayer
}