class PlayerDTO {

    constructor(
        name,
        character,
        health,
        damage,
        luck,
        crit,
        weapon,
        armor,
        accessory,
        inventory,
        potions,
        level,
        id,
        coin
    ) {
        this.name = name
        this.character = character
        
        this.maxHealth = maxHealth
        this.health = health
        this.damage = damage
        this.luck = luck
        this.crit = crit
        this.weapon = weapon
        this.armor = armor
        this.accessory = accessory
        this.coin = coin
        this.inventory = inventory
        this.potions = potions
        this.level = level
        this.id = id
    }
}