'use strict';

let userNumber = Number(prompt("Enter the number:"));
let count = 0;
if (Number.isNaN(userNumber)){
    console.log('Entered wrong information')
}else{
    for(let i = 1; i <= userNumber; i++){
        if(i % 5 === 0){
            count++;
        }  
    }
console.log(`Amount number which devide on 5 is ${count}`);
}

   

        