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

const newDog = new Dog("Бобик");

console.log(newDog);
console.log(newDog.passport);

console.log(newDog instanceof Dog);
const one = 1;
console.log(typeof one === "number");
newDog.breath();
console.log(newDog instanceof Animal);
