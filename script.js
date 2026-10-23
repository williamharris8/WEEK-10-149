class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  describe() {
    return "I am a " + this.type + " named " + this.name + ".";
  }
}

const pet1 = new Pet("Sparky", "Dragon");
const pet2 = new Pet("Bingo", "Dog");
const pet3 = new Pet("Leo", "Cat");

console.log(pet1.describe());
console.log(pet2.describe());
console.log(pet3.describe());
