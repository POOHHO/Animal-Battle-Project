import { popup,characters } from "../../main.js"
import { monster } from "../game/gameplay.js"

class Player {

    constructor() {
        this.name = ""
        this.character = "" 
        this.health = 0
        this.maxHealth = 0
        this.damage = 0
        this.luck = 0
        this.crit = 0
        this.weapon = ""
        this.armor = ""
        this.accessory = ""
        
        this.cardName = ""
        this.cardDamage = 0
        this.inventory = []
    }  
    maxHeal() { this.health = this.maxHealth }
    playerAttack() {
        this.randomCritical()
        monster.value.health -= this.damage
        monster.value.dead()
        popup("playerAttack",1500)

    }
    getWeapon() { return this.weapon }
    getArmor() { return this.armor }
    getAccessory() { return this.accessory }
    getImage() {
        return this.character.idle
    }
    getIcon() {
        return this.character.icon
    }
    getCardName() {
        return this.cardName
    }
    getPercentHealth() {
        const health = (this.health/this.maxHealth)*100 
        return health <= 0 ? 0 : health
    }
    selectCharacter(characterIndex = 0) {
        const character = characters?.[characterIndex]
        if (!character) return undefined
        this.character = character
        this.health = character["health"]
        this.maxHealth = character["health"]
        this.luck = character["luck"]
        this.crit = character["crit"]
        return character
    }
    useItem(item) {
        this[item.type] = item
        this.crit += (!item.crit ? 0 : item.crit)
        this.maxHealth += (!item.health ? 0 : item.health)
        this.health = this.maxHealth
        this.luck += (!item.luck ? 0 : item.luck)
    }
    getInventory(index) {
        return this.inventory[index]
    }
    randomCritical() {
        const percentage = Math.floor(Math.random() * 100)
        const CRIT_DAMAGE = 1.5
        this.damage = this.cardDamage
        if (this.crit > percentage) this.damage *= CRIT_DAMAGE
    }
    dead() {
        if ( this.health <= 0) {
          this.health = 0
          popup("playerDead")
        }
    }  
}
export { Player }