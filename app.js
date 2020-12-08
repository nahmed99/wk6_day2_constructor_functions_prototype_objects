
// Reference (require) the exported Person class, so that we can use it here...conventionally you want to assign to an identifier of the same name (Person in this case - you could use something else, and it wil still work):
const Person = require("./person.js"); // You don't need the '.js' part..?

//Instantiate the objects...

// The following line of code instantiates the Person class.
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