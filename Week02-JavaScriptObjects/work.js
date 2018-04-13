function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}
divider('Person');
var person = {
firstName: "Matthew", 
lastName: "Wilkes",
fullName: function(firstName, lastName){
return this.firstName + " " + this.lastName;
}
}
console.log(person.firstName)
console.log(person.lastName)
console.log(person.fullName())
divider('Calculator');
var calculator = {
operand01: -1,
operand02: -1,
operand03: function(operand01, operand02){
return this.operand01 + this.operand02},
operand04: function(operand01, operand02){
return this.operand01 - this.operand02}
}

calculator.operand01 = person.firstName.length
calculator.operand02 = person.lastName.length
console.log('operand01 =', calculator.operand01);
console.log('operand02 =', calculator.operand02);
console.log('Add =', calculator.operand03());
console.log('Subtract =', calculator.operand04());
console.log('Multiply = ', calculator.multiply = calculator.operand01 * calculator.operand02)