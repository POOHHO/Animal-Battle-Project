class Attribute {

    constructor(health,damage,luck,crit) {
        this.health = health
        this.damage = damage
        this.luck = luck
        this.crit = crit
    }

    getHealth() { return this.health }
    getDamage() { return this.damage }
    getLuck() { return this.luck }
    getCrit() { return this.crit }

    setHealth(health) { this.health = health }
    setDamage(damage) { this.damage = damage }
    setLuck(luck) { this.luck = luck }
    setCrit(crit) { this.crit = crit }
}