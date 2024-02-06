/// Como crei que se podia realizar
let pares =[1,2,3,4,5]
console.log(pares[1]+ pares[3]);

///Basandome en el uso de bucles y condicionales
const numbers = [1, 2, 3, 4, 5];
let sumaPares = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sumaPares += numbers[i];
  }
}

console.log(sumaPares);