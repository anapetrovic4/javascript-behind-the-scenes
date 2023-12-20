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