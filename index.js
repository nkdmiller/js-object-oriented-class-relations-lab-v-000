let store = { drivers: [], trips: [], passengers: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;
class Driver {
    constructor(name) {
        this.id = ++driverId;
        this.name = name;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.drivers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.driverId === this.id;
            }.bind(this)
        );
    }
    passengers() {
        return store.trips.filter(
            function(trip) {
                return item.userId === this.id;
            }.bind(this)
        );      
    }
}

class Passenger {
    constructor(name) {
        this.id = ++passengerId;
        this.name = name;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.passengers.push(this);
    }
    trips() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }
    drivers() {
        return store.trips.filter(
            function(trip) {
                return item.userId === this.id;
            }.bind(this)
        );      
    }
}

class Trip {
    constructor(name, driver, passenger) {
        this.id = ++tripId;
        this.name = name;
        if (driver) {
            this.driverId = driver.id;
         }
         
         if (passenger) {
           this.passengerId = passenger.id;
         }
 
        // insert in the item to the store
        store.trips.push(this);
    }
    drivers() {
        return store.trips.filter(
            function(trip) {
                return trip.passengerId === this.id;
            }.bind(this)
        );
    }
    drivers() {
        return store.trips.filter(
            function(trip) {
                return item.userId === this.id;
            }.bind(this)
        );      
    }
}