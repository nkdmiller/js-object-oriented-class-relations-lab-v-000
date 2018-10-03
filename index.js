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
            function(item) {
                return item.userId === this.id;
            }.bind(this)
        );
    }
    passengers() {
        return store.passengers.filter(
            function(item) {
                return item.userId === this.id;
            }.bind(this)
        );      
    }
}