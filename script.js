'use strict';

//Function declaration, global scope, top level code
function calcAge(birthYear) {
   const age = 2037 - birthYear;
  
    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            //creating new variable with same name as outer scope's variable 
            const firstName = 'Steven';

            //redefining output variable
            const output = 'NEW OUTPUT!';

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
        }
        console.log(millenial);
        //add(2, 3);
        console.log(output);
    }

    printAge();
   
    return age;
}

//firstName je globalna varijabla, dostupna svugde u kodu
const firstName = 'Jonas';
calcAge(1991);

//Hoisting with variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'Ana';
let job = 'student';
const year = 2000;

//Hoisting with functions
console.log(addDecl(2, 3));
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

function addDecl(a, b){
    return a + b;
}

const addExpr = function (a, b){
    return a + b;
}

var addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart(items){
    console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);