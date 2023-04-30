// const theDog = createDog("Тузик");

// theDog.eat();
// theDog.eat();
// theDog.walk();
// theDog.name;
// theDog.name = "Бо";
// theDog.name = 12412412;
// console.log(theDog);
// console.log(theDog.passport);

// const anotherDog = createDog("Шарик");
// anotherDog.passport;

class Animal {
  #isAlive = true;
  breath = () => {
    this.#isAlive = true;
    console.log(`I'm alive`);
  };
}

class Dog extends Animal {
  #height = 50; // cm
  #color = "в пятнышко";
  #weight = 20; // kg
  #nameOfTheDog;
  #happines = 0;

  #bark = () => {
    console.log("гав гав");
  };
  #moveTheTail = () => {
    this.#happines++;
  };
  constructor(name = "sdf") {
    super();
    this.#nameOfTheDog = name;
  }

  eat = () => {
    this.#weight += 1;
    this.#moveTheTail();
  };
  walk = () => {
    this.#weight -= 1;
    this.#moveTheTail();
    this.#bark();
  };
  get name() {
    this.#bark();
    return this.#nameOfTheDog;
  }
  set name(val) {
    if (typeof val === "string") {
      this.#nameOfTheDog = val;
    } else {
      this.#happines--;
    }
  }
  get passport() {
    return {
      name: this.#nameOfTheDog,
      height: this.#height,
      weight: this.#weight,
      breed: "далматинец",
    };
  }
}

class Cat extends Animal {
  meow = () => {
    console.log("meow");
  };
}

const newDog = new Dog("Бобик");
const newCat = new Cat();

console.log(newDog);
console.log(newDog.passport);

console.log(newDog instanceof Dog);
const one = 1;
console.log(typeof one === "number");
newDog.breath();
console.log(newDog instanceof Animal);

newCat.meow();
newCat.breath();


const animals = [newDog, newCat];
animals.forEach((animal) => animal.breath());

class Shape {
  square = () => {
    throw "not implemented";
  };

  print = () => {
    console.log(`My sqaure is: ${this.square()}`);
  };
}

class WrongShape extends Shape {}

class Square extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  square = () => this.width * this.height;
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  square = () => this.radius ** 2 * Math.PI;
}

const shapes = [
  new Circle(1),
  new Circle(3),
  new Square(4, 3),
  new Square(10, 15),
];

console.log(shapes.reduce((acc, shape) => acc + shape.square(), 0));

shapes[0].print();
const wrongShape = new WrongShape();
wrongShape.print();
