// falsy
// 0
// ""
// undefined
// null
// NaN
// false

// truthy
// '0', ' ' []

const age = 4;
// const age = 0;
if (age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

const myName = "mahfuj";
// const myName = "";
if (myName){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

let myName;
let myName = null;
console.log(myName);
if (myName){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}