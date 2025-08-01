import { sum } from './sum.js'; 

document.getElementById('calculateButton').addEventListener('click',()=>{
    const result = sum(10, 20) ;
    document.getElementById('result').innerHTML = `Sum is: ${result}`;
});