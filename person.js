// Upper case first letter, makes it a class...by convention. A constructor prototype
const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


//===== methods ========


Person.prototype.greet = function() {
    console.log("Hi, my name is", this.firstName)
}

Person.prototype.printAge = function() {
    console.log(`I am ${this.age} years old`)
}


module.exports = Person;


//====== create the objects

// The following line of code instantiates the above class.
const shaggy = new Person("Shaggy", "Rogers", 38);
// console.log(shaggy.firstName);
// console.log(shaggy.lastName);
// console.log(shaggy.age);

const scooby = new Person("Scooby", "Doo", 37);
// console.log(scooby.firstName);
// console.log(scooby.lastName);
// console.log(scooby.age);

const scrappy = new Person("Scrappy", "Doo", 13);
// console.log(fred.firstName);
// console.log(fred.lastName);
// console.log(fred.age);

scrappy.greet();
scrappy.printAge();
