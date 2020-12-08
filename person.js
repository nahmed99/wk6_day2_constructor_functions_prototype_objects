// Upper case first letter, makes it a class...by convention. A constructor prototype
const Person = function(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// The following line of code instantiates the above class.
const shaggy = new Person("Shaggy", "Rogers", 23);
// console.log(shaggy.firstName);
// console.log(shaggy.lastName);
// console.log(shaggy.age);

const scooby = new Person("Scooby", "Doo", 13);
// console.log(scooby.firstName);
// console.log(scooby.lastName);
// console.log(scooby.age);

const fred = new Person("Scrappy", "Doo", 57);
// console.log(fred.firstName);
// console.log(fred.lastName);
// console.log(fred.age);


//===== methods ========


