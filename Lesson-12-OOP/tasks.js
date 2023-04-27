class Product {
    static categories = ['sport', 'home', 'gifts'];
    static all = [];
    static total_sale = 0
    constructor(title, price, discount, category) {
        this.title = title;
        this.changePrice (price);
        this.discount = !!(discount) ? discount : 0 //discount ?? 0
        this.category = Product.categories.includes(category) ? category : null;
        this.count = 10;
        Product.all.push(this);
    };

    changePrice (newPrice) {
        this.price = newPrice > 0 ? newPrice : null;
    }

    show () {
        const {title, price, discount, category} = this;
        return `${title} (${price - price * discount / 100}) ${category}`
    }

    sale() {
        if (this.count !== 0) {
            this.count--;
            Product.total_sale += this.price;
        } else {
            console.log("Error");
        }
    }
}
const product = new Product("Велосипед", 3400, 10, 'sport')
product.sale()
console.log(product.show())
console.log(Product.total_sale)