class Candy {
    constructor(name,price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    constructor(item) {
        // basket = []
        this.items = []
    }

    getTotalPrice() {
        let sum = 0
        this.items.forEach((item) => sum += item.getPrice());
        return sum
    }

    addItem(item) {
        this.items.push(item);
    }
}



module.exports = {
    Candy,
    ShoppingBasket,
    //basket,
};

//need help with shoppingbasket /basket

// > const candy = new Candy('Mars', 4.99);


// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();

// > basket.getTotalPrice();
// item.getTotalPrice();
// 0

// > basket.addItem(candy);

// > ç
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97