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

//This keyword
console.log(this);

//ima svoj this keyword
const calcAge2 = function(birthYear) {
    console.log(2037 - birthYear);  
    //console.log(this);
}
calcAge2(1991);

//nema svoj this keyword
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);  
    //console.log(this);
}
calcAgeArrow(1991);

// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(this); //jonas object, owner of the method
//         console.log(2037 - this.year);
//     },
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

//method borrowing
//matilda.calcAge = jonas.calcAge;
//matilda.calcAge(); //this keyword is now matilda object

//const f = jonas.calcAge;
//f(); //undefined, this keyword is undefined, zato sto je ovo samo obican poziv funkcije, a ne metode objekta

//Regular function vs arrow function
//ovo nije code block, vec object literal
//var firstName = 'Matilda';

const ana = {
    firstName: 'Ana',
    year: 1991,
    calcAge: function() {
       //console.log(this); 
        console.log(2037 - this.year);

        //Solution 1
        // const self = this; //self or that
        // const isMillenial = function(){
        //     console.log(self);
        //    //console.log(this.year >= 1981 && this.year <= 1996);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };

        //Solution 2 - arrow function uses this keyword from its parent scope
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillenial(); //regular function call, this keyword is undefined
    },
    greet: function() {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

ana.greet(); // Outputs the correct 'Hey Ana'
ana.calcAge(); // Outputs 46, and true

//Arguments keyword
const addExpr2 = function(a, b){
    console.log(arguments);
    return a + b;
};

addExpr2(2, 5);
addExpr2(2, 5, 8, 12);

var addArrow2 = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow2(2, 5, 8); //error, arguments is not defined