let itemId = 0;
class Driver {
    constructor(name) {
        this.id = ++itemId;
        this.name = name;
        // if (user) {
        //     this.userId = user.id;
        // }
 
        // insert in the item to the store
        store.items.push(this);
    }
    setUser(user) {
        this.userId = user.id;
    }
}