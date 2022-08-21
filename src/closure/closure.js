
function greeting(){
    let username = `Esteban`;

    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName();
}

const g = greeting();

console.log(g);
console.log(g());
