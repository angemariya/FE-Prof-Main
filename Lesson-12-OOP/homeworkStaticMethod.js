/*
    Задание. Создать класс Product со свойствами title, price, count.
    Задание. Создать статическое свойство income, которое изначальное равно нулю.
    Задание. Создать метод sale. Которое уменьшает count на единицу. Если count уже равен нулю, то вызывается
исключение. Если продажа прошла, то статическое свойство income должно увеличиться на цену товара.
    Задание. Создать статическое свойство items, которое хранит созданные экземпляры класса Product.
    Задание. Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0.
 */
const assert = (condition, message) => {
    (!contidion) && throw new Error(message)
}

class Product {
    static income = 0;
    static items = [];
    #price;
    constructor(title, price, count) {
        this.title = title;
        this.#price = price;
        this.count = count;
        Product.items.push(this);
    }

    sale() {
        assert(this.count !== 0, "Товар закончился");
        count--;
        Product.income+=this.price;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        assert(newPrice>0, "Цена не может быть отрицательной");
        this.price = newPrice;
    }
}
