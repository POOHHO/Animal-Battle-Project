import { popup,characters } from "../../main.js"
import { monster } from "../game/gameplay.js"
import Currency from "../game/currency.js"

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
        this.coin = new Currency()
        this.cardName = ""
        this.cardDamage = 0
        this.inventory = [ {
                "id": 5,
                "name": "NigirinSword",
                "crit": 30,
                "type": "weapon",
                "imgPath": "images/item/DiamondSword.png"
              }
            ]
        this.potions = [
            {
                "id": 1,
                "name": "HealthPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-2.png"
              },
              {
                "id": 1,
                "name": "HealthPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-2.png"
              },
              {
                "id": 1,
                "name": "HealthPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-2.png"
              },
              {
                "id": 2,
                "name": "ManaPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-1.png"
              },
              {
                "id": 2,
                "name": "ManaPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-1.png"
              },
              {
                "id": 2,
                "name": "ManaPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-1.png"
              },
              {
                "id": 2,
                "name": "ManaPotion",
                "price": 50,
                "type": "potion",
                "imgPath": "images/item/potion-1.png"
              },
        ]    
        this.level = 1
        this.amount = 0
    }  
    
    isMaxInventory() { return this.inventory.length >= 24 }
    maxHeal() { this.health = this.maxHealth }
    playerAttack() {
        this.randomCritical()
        monster.value.health -= this.damage
        monster.value.dead()
        popup("playerAttack",1500)
    }
    getImageHealth(){
      for (let i = 0; i < this.potions.length; i++) {
        if(this.potions[i].name === "HealthPotion"){
         return this.potions[i].imgPath
      } }
    }
    duplicateHealth(){
      let health = 0
       for (let i = 0; i < this.potions.length; i++) {
       if(this.potions[i].name === "HealthPotion"){
        health++ } }
       return health
    }
    getImageMana(){
      for (let i = 0; i < this.potions.length; i++) {
        if(this.potions[i].name === "ManaPotion"){
         return this.potions[i].imgPath
      } }
    }
    duplicateMana(){
      let mana = 0
       for (let i = 0; i < this.potions.length; i++) {
       if(this.potions[i].name === "ManaPotion"){
        mana++ } }
       return mana
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
    removeItem(item){
        console.log(item);
        this[item.type] = undefined
        this.crit -= (!item.crit ? 0 : item.crit)
        this.maxHealth -= (!item.health ? 0 : item.health)
        this.health = this.maxHealth
        this.luck -= (!item.luck ? 0 : item.luck)
        this.inventory.push(item)
    }
    useItem(item) {
        this[item.type] = item
        this.crit += (!item.crit ? 0 : item.crit)
        this.maxHealth += (!item.health ? 0 : item.health)
        this.health = this.maxHealth
        this.luck += (!item.luck ? 0 : item.luck)

    }
    removeItemFromIndex(index){
        this.inventory.splice(index-1,1)
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