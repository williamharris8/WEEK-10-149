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
    this.hunger = Math.max(0, this.hunger - 10);
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

function addPet() {
  const name = document.getElementById("nameInput").value;
  const pet = new Pet(name, "Pet");

  const card = document.createElement("div");

  const info = document.createElement("p");
  info.textContent = pet.name + " - Hunger: " + pet.hunger;

  const feedBtn = document.createElement("button");
  feedBtn.textContent = "Feed";
  feedBtn.addEventListener("click", function () {
    pet.feed();
    info.textContent = pet.name + " - Hunger: " + pet.hunger;
  });

  card.appendChild(info);
  card.appendChild(feedBtn);
  document.getElementById("sanctuary").appendChild(card);
}

document.getElementById("addBtn").addEventListener("click", addPet);


