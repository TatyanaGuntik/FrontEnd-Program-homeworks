class Vehicle {
    constructor(color, engine) {
        this.color = color;
        this.engine = engine;
        this.maxSpeed = 70;
        this.speed = 0;
        this.maxCurrentSpeed = 0;
    }

    upgradeEngine(newEngine, maxSpeed) {
        this.engine = newEngine;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return this;
    }

    setSpeed(val) {
        this.speed = val;
    }

    setMaxCurrentSpeed(val) {
        this.maxCurrentSpeed = val;
    }

    getSpeed() {
        return this.speed;
    }

    addCondition() {
        /* do nothing */
    }

    drive() {
        let speed = this.speed;
        let max = this.maxSpeed;
        let $this = this;

        setInterval(function () {
            speed += 20;
            $this.setMaxCurrentSpeed(speed);
            $this.setSpeed(speed);
            console.log($this.maxCurrentSpeed);

            if (speed > max && speed < max + 21) {
                console.log('speed is too high, SLOW DOWN!');
            }
            $this.addCondition();
        }, 2000)
    }

    getInfoAfterStop() {
        console.log('Vehicle is stopped. Maximum speed during the drive was ' + this.maxCurrentSpeed);
    }

    sleepFor() {
        let now = new Date().getTime();
        while (new Date().getTime() < now + 1500) { /* do nothing */
        }
    }

    stop() {
        clearInterval(1);

        let currentSpeed = this.getSpeed();
        let $this = this;

        while (currentSpeed > 0) {
            $this.sleepFor();
            currentSpeed -= 20;
            $this.setSpeed(currentSpeed);
            console.log(currentSpeed);
        }
        this.getInfoAfterStop();
    }
}

class Car extends Vehicle {
    constructor(color, engine, model) {
        super(color, engine);
        this.model = model;
        this.maxSpeed = 80;
    }

    drive() {
        super.drive();
    }

    getInfoAfterStop() {
        console.log('Car ' + this.model + ' is stopped. Maximum speed during the drive ' + this.maxCurrentSpeed);
    }
}

class Motorcycle extends Vehicle {
    constructor(color, engine, model) {
        super(color, engine);
        this.model = model;
        this.maxSpeed = 90;
    }

    addCondition() {
        if (this.speed >= this.maxSpeed + 30) {
            console.log('Engine overheating');
            this.stop();
        }
    }

    drive() {
        console.log('Let’s drive');

        if (this.speed >= this.maxSpeed) {
            console.log('!');
        }
        super.drive();
    }

    getInfoAfterStop() {
        console.log('Motorcycle ' + this.model + ' is stopped. Good drive');
    }
}

let newMoto = new Motorcycle('yellow', 'f', '555');

let newCar = new Car('red', 'w', '1');

