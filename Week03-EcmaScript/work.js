console.log("Invoke Immediately");

(() => {
	const mathResult = (4+6) * 12
	console.log(mathResult)
})();

console.log(" ");
console.log("ForEach");

((numbers) => {
	numbers.forEach((number) => {
		console.log(number);
	});
})([0,1,1,2,3,5,8,13,21,34]);

console.log(" ");
console.log("For...of");

((numbers) => {
   for (let number of numbers) {
       console.log(number);
   }
})([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

console.log(" ");
console.log("for...in");

const myObject = { firstName: 'Jeb', lastName: 'Bush' , address: 'PO Box 440641', city: 'Miami', state: 'Florida', zip:'33144'};
const loggerForIn = (myObject) => {
   for (let property in myObject) {
       if (myObject.hasOwnProperty(property)) {
           console.log(property);
       }
   }
};

loggerForIn(myObject);

console.log(" ");
console.log("ES6 Class");

class calculator {
  constructor(operanda, operandb) {
     this.operanda = operanda;
     this.operandb = operandb;
	}
	add(operanda, operandb){
		return(operanda + operandb)
	}
	subtract(operanda, operandb){
		return(operanda - operandb)
	}
	multiply(operanda, operandb){
		return(operanda * operandb)
	}
	divide(operanda, operandb){
		return(operanda/operandb)
	}
  }

var obj = new calculator()
console.log(obj.add(2, 3));
console.log(obj.subtract(5, 2));
console.log(obj.multiply(3, 5));
console.log(obj.divide(15, 3));















