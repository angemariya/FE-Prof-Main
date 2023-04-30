/*
Задание Создать класс User со свойствами name, username, age.
Добавить метод change_username, который получает в качестве аргумента 
новое имя пользователя и меняет его.
Создать класс Product со свойствами title, price, count. И методами 
change_price и sale.
Доработать метод change_price, который принимает в качестве аргумента 
новую цену и делает проверку, если цена меньше нуля то цена не меняется 
и вызывается исключение “цена не может быть отрицательной”.
Доработать класс метод sale, который уменьшает count на единицу. Но 
если count уже равен нулю, то вызывается исключение “товар закончился”.
*/

function assert(condition, errorMessage) {
    if (!!condition) throw new Error(errorMessage);
}

class User {
    name;
    username;
    age;

    changeUsername = (newName) => {
        this.name = newName;
    };
}

class Product {
    title;
    price;
    count = 1;

    changePrice = (newPrice) => {
        assert (newPrice < 0 ,"The price cannot be negative");
        this.price = newPrice;
    };

    sale = () => {
       assert (this.count === 0 , "The product is over");
       this.count--;
    };
}

const product = new Product();

product.changePrice(5);
product.sale();
console.log(product.count);