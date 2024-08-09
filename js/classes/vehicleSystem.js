class Vehicle {
    #started;
    #stoped;
    constructor() {
        this.#started = false;
        this.#stoped = true;
    }

    start() {
        if (this.#started === true) {
            throw new Error("Vehicle already started");
        }
        this.#started = true;
        this.#stoped = false;
    }

    stop() {
        if (this.#stoped === true) {
            throw new Error("Vehicle already stoped");
        }
        this.#stoped = true;
        this.#started = false;
    }

    getType() {
        return 'Vehicle';
    }
}

class Car extends Vehicle {
    constructor() {
        super();
    }

    getType() {
        return 'Car';
    }
}

class Truck extends Vehicle {
    constructor() {
        super();
    }

    getType() {
        return 'Truck';
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
    }

    getType() {
        return 'Motorcycle';
    }
}

const vehicles = [new Car(),  new Truck(), new Motorcycle()]

vehicles.forEach(vehicle => {
    try {
        vehicle.start();
        console.log(`${vehicle.getType()} started.`);
        vehicle.stop();
        console.log(`${vehicle.getType()} stopped.`);
        vehicle.stop();
    } catch (error) {
        console.log(error.message)
    }

});

