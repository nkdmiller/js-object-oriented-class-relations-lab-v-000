let store = { drivers: [], trips: [], passengers: [] };
let itemId = 0;
class Driver {
    constructor(name) {
        this.id = ++itemId;
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
        this.id = ++itemId;
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