import { popup, characters,monster } from "../../init.js"
import Currency from "../game/currency.js"
import { usePlayers } from "../../assets/game/players"

class Player {

    constructor() {
        this.id = ""
        this.name = ""
        this.character = ""
        this.health = 0
        this.maxHealth = 0
        this.damage = 0
        this.luck = 0
        this.crit = 0
        this.password = ""
        this.weapon = undefined
        this.armor = undefined
        this.accessory = undefined
        this.coin = new Currency()
        this.cardName = ""
        this.cardDamage = 0
        this.inventory = []
        this.potions = []
        this.level = 1
    }

    isMaxInventory() { return this.inventory.length >= 24 }
    maxHeal() { this.health = this.maxHealth }
    playerAttack() {
        this.randomCritical()
        monster.value.health -= this.finalDamage
        monster.value.dead()
        popup("playerAttack", 1500)

    }

    getEquipment(type) { return this[type] }
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
        const health = (this.health / this.maxHealth) * 100
        return health <= 0 ? 0 : health
    }

    usePotion(potion) {
        if (this.health === this.maxHealth) return
        if (this.potions.length === 0) return
        const plusHealth = potion.health
        if (this.health + plusHealth > this.maxHealth) this.health = this.maxHealth
        else this.health += plusHealth
        this.potions.splice(0, 1)
        const myPlayers = usePlayers()
        myPlayers.updatePlayer(this)
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
    removeItem(item) {
        this[item.type] = undefined
        this.crit -= (!item.crit ? 0 : item.crit)
        this.maxHealth -= (!item.health ? 0 : item.health)
        this.damage -= (!item.damage ? 0 : item.damage)
        this.health = this.maxHealth
        this.luck -= (!item.luck ? 0 : item.luck)
        this.inventory.push(item.id)
    }
    useItem(item) {
        this[item.type] = item.id
        this.crit += (!item.crit ? 0 : item.crit)
        this.maxHealth += (!item.health ? 0 : item.health)
        this.damage += (!item.damage ? 0 : item.damage)
        this.health = this.maxHealth
        this.luck += (!item.luck ? 0 : item.luck)

    }
    removeItemFromIndex(index) {
        this.inventory.splice(index - 1, 1)
        const myPlayers = usePlayers()
        myPlayers.updatePlayer(this)
    }
    getInventory(index) {
        return this.inventory[index]
    }
    randomCritical() {
        const percentage = Math.floor(Math.random() * 100)
        const CRIT_DAMAGE = 1.5
        this.finalDamage = this.damage + this.cardDamage
        if (this.crit > percentage) this.finalDamage *= CRIT_DAMAGE
    }
    getFinalDamage() {
      return this.finalDamage
    }

    dead() {
        if (this.health <= 0) {
            this.health = 0
            popup("playerDead")
            const myPlayers = usePlayers()
            myPlayers.updatePlayer(this)
        }
    }
}
export { Player }