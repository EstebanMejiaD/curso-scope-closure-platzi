// variables 

var a; //declarando 
let b = `b`;// declaramos y asignamos 
b = `bb`; // reasignarmos
let a = `aa`; //redeclaracion


// globa Scope

// Las variables que se asignen dentro 
//del documento o sin estar dentro de un bloque de codigo, son variables
//globales

var fruit = `Apple` // global 

function bestFruit () {
    console.log(fruit);
}

bestFruit();

// Solo asignando una variable y no declarardola en un bloque de codigo
//se hará una variable global.
function countries(){
    country = `colombia`; // global
    console.log(country);
}

countries();
console.log(country);