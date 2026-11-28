class pizza{
    constructor() {
        this.type = `loaded veg`;
        this.size = `Medium`;
        this.crust = `Thick`;
    }

    bake() {
        console.log(`Bake a ${this.type} pizza with size ${this.size} with ${this.crust} crust`);
    }
}


let myPizza = new pizza();
myPizza.bake();



class burger{
    constructor(name, size , flavour) {
        this.flavour = flavour;
        this.size = size;
        this.name = name;
    }

    cook() {
        console.log(`Cook a ${this.name} burger with some ${this.flavour} flavour with an exact ${this.size} size`)
    }
}







let yourBurger = new burger();
yourBurger.flavour = "chilly";
yourBurger.size = "Large";
yourBurger.name = "BigMac";

yourBurger.cook();
