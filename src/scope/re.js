

var firstName; // Undefined
firstName = `Esteban`;
console.log(firstName);

var lastName = `Mejia`; // declarar / asignar
lastName = `De La Hoz`; //reasignar
console.log(lastName);


var secondName = `Mejia`; // declarar / asignar
var secondName = `De La Hoz`; //Reasignando
console.log(secondName);


// let nos deja reasignar una variable pero no redelararla

let fruit = `Apple`;// declara y asignar
fruit = `kiwi`; // reasignar
console.log(fruit);
let fruit = `Banana`; // redeclarar no se puede con let
// console.log(fruit);

// const no nos deja reasignar una variable  ni tampoco reasignar

const animal = `dog`; // declara y asigna
// animal = `cat`; // reasignando
const animal = `snake`; // reasignacion

console.log(animal);

const vehiculos = [];

vehiculos.push(`carro`);
console.log(vehiculos);

vehiculos.pop();
console.log(vehiculos);
