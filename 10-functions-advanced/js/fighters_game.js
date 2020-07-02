class Fighter {
    constructor({name, damage, hp, strength, agility}) {
        this._name = name;
        this._damage = damage;
        this._health = hp;
        this._strength = strength;
        this._agility = agility;

        this._wins = 0;
        this._losses = 0;
        this._startHP = hp;
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._damage;
    }

    getStrength() {
        return this._strength;
    }

    getAgility() {
        return this._agility;
    }

    getHealth() {
        return this._health;
    }

    attack(defender) {
        let successProbability = (100 - defender.getStrength() - defender.getAgility()) / 100;

        if (Math.random() < successProbability) {
            defender.dealDamage(this._damage);
            console.log(this._name + ' makes ' + this._damage + ' damage to ' + defender._name);
        } else {
            console.log(this._name + ' attack missed');
        }
    }

    logCombatHistory() {
        return 'Name: ' + this._name + ', Wins: ' + this._wins + ', Losses: ' + this._losses;
    }

    heal(val) {
        if (this._health + val < this._startHP) {
            this._health = this._health + val;
        } else {
            this._health = this._startHP;
        }
    }

    dealDamage(val) {
        this._health = this._health - val;
        if (this._health < 0) {
            this._health = 0;
        }
    }

    addWin() {
        this._wins = this._wins + 1;
    }

    addLoss() {
        this._losses = this._losses + 1;
    }
}

const myFighter = new Fighter({name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100});
const myFighter2 = new Fighter({name: 'Commodus', damage: 25, strength: 25, agility: 20, hp: 90});

function battle(figter1, figter2) {

    if (figter1._health === 0) {
        return figter1._name + ' is dead and can\'t fight';
    }

    if (figter2._health === 0) {
        return figter2._name + ' is dead and can\'t fight'
    }

    while (figter1._health > 0 && figter2._health > 0) {
        figter1.attack(figter2);

        if (figter2._health > 0) {
            figter2.attack(figter1);

            if (figter1._health === 0) {
                figter2.addWin();
                figter1.addLoss();
                return figter2._name + ' won!';
            }
        } else {
            figter1.addWin();
            figter2.addLoss();
            return figter1._name + ' won!';
        }
    }
}

console.log(battle(myFighter, myFighter2));