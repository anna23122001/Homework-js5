'use strict'

let N = prompt("Enter the number:");
let count = 0;

    for(let i=1; i<= N; i++){
        if(i>=0 && i%5 === 0){
            count++
        }
    }
console.log(count)
