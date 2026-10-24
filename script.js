class Pet {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.hunger = 50;
  }

  describe() {
    return "I am a " + this.type + " named " + this.name + ".";
  }

  feed() {
    this.hunger = this.hunger - 10;
  }
}

const pet1 = new Pet("Puff", "Dragon");
const pet2 = new Pet("Bingo", "Dog");
const pet3 = new Pet("Leo", "Cat");

console.log(pet1.describe());
console.log(pet2.describe());
console.log(pet3.describe());

document.getElementById("feedBtn").addEventListener("click", function () {
  pet1.feed();
  document.getElementById("hunger").textContent = pet1.hunger;
});
