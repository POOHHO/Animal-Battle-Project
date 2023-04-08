import { popup, unpopup, randomMonster,player } from "../../init.js"
import path from "../path_data.json"
import { usePlayers } from "../../assets/game/players"

class Monster {
    constructor(name,health,image = "",coin = 0) {
      this.name = name
      this.health = health
      this.maxHealth = health
      this.image = image
      this.damage = 0
      this.percentHealth = (this.health/this.maxHealth)*100 //0-100%

      this.cardName = ""
      this.cardDamage = ""
      this.coin = coin
    }
    monsterAttack() {
        this.damage = this.cardDamage
        player.value.health -= this.damage
        player.value.dead()
        popup("monsterAttack",1500)
    }
    getImage() {
        return path.monster.replace("%monster%",this.image)
    }
    setMaxHealth() {
      this.health = this.maxHealth
    }
    getCardName() {
      return this.cardName
    }
    getPercentHealth() {
      const health = (this.health/this.maxHealth)*100 
      return health <= 0 ? 0 : health
    }
    dead() {
      if ( this.health <= 0) {
        this.respawn()
        popup("dropCoin",1500)
        unpopup("monsterImg", 2000)
        player.value.coin.add(this.coin)
        const myPlayers = usePlayers()
        myPlayers.updatePlayer(player.value)
      }
    }

    respawn() {
      randomMonster()
      this.health = this.maxHealth
      player.value.level++
    }
}
export { Monster }