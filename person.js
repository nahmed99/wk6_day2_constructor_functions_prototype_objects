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


// this needs to be exported before it can be exporteds elsewhere
module.exports = Person;
