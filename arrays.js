let myArray = [1,2,3,4];

console.log(myArray[1]);

let myArray2 = ["Meaning of life?",42,true];
console.log(myArray2[0]);

//array declaration
const numbers=[10,20,30,40,50];
const months = ["Jan", "Feb", "Mar", "Apr", "May"];

//method for arrays
numbers.push(60,70,80);

numbers.unshift(-30,-20,-10,0);//prepebd ab ekement at the beggining

months.pop();//renoves the las element from the array

months.shift();//remove the element, first element

months.splice(1,1);

//accessing to the element in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

//travel an array
console.log(numbers.length);

for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}
//display the arrays
console.table(numbers);
console.table(months);