// Define the base object
function Animal(name) {
  this.name = name;
}

Animal.prototype.walk = function() {
  console.log(this.name + " is walking.");
}

// Create the child object that inherits from Animal
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(this.name + " is barking.");
}

// Create the grandchild object that inherits from Dog
function Labrador(name, color) {
  Dog.call(this, name, "Labrador");
  this.color = color;
}

Labrador.prototype = Object.create(Dog.prototype);
Labrador.prototype.constructor = Labrador;

Labrador.prototype.swim = function() {
  console.log(this.name + " is swimming.");
}

// Create an instance of the Labrador object and call its methods
var myLabrador = new Labrador("Max", "black");
myLabrador.walk();
myLabrador.bark();
myLabrador.swim();
