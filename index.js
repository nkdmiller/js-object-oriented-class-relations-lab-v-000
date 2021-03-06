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
      return store.passengers.filter(
        function(passenger) {
          return passenger.trips().filter(
            function(trip) {
              trip.driverId === this.id;
            }.bind(this)
          );
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
      return store.drivers.filter(
        function(driver) {
          return driver.trips().filter(
            function(trip) {
              trip.passengerId === this.id;
            }.bind(this)
          );
        }.bind(this)
      );
    }
}

class Trip {
    constructor(driver, passenger) {
        this.id = ++tripId;
        if (driver) {
            this.driverId = driver.id;
         }
         
         if (passenger) {
           this.passengerId = passenger.id;
         }
 
        // insert in the item to the store
        store.trips.push(this);
    }
    driver() {
        return store.drivers.find(
            function(driver) {
                return driver.id === this.driverId;
            }.bind(this)
        );
    }
    passenger() {
        return store.passengers.find(
            function(passenger) {
                return passenger.id === this.passengerId;
            }.bind(this)
        );
    }
}