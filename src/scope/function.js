
// Esto es el function Scope

function greeting(){
    let useName = `Ana`; //Esta variable está asignada y declarada como local dentro de esta funcion
    console.log(useName);

    if(useName == `Ana`) {
        console.log(`Hello ${useName}`);
    }
}

greeting();

console.log(useName);