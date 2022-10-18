class Candy {
    constructor(name,price) {
        this.name = name
        this.price = price
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class ShoppingBasket {
    constructor() {
        this.item = item
    }

    getTotalPrice() {
        let sum = 0
        this.item.forEach((item) => sum += item.getPrice());
    }

    addItem() {
        this.item.push(item);
    }
}

const basket = [new ShoppingBasket()];

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
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97