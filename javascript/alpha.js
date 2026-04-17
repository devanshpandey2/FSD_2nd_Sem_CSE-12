// for taking output write node.\foldername\filename.js in terminal
// let person={
//     name:"sachin",
//     age:30,
//     city:"mumbai"
// }
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);

// let numbers=[1,2,3,4,5];    
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);


// let numbers=[1,2,3,4,5];
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// let mixed=[1,"hello",true,{name:"alice"},[1,2,3]];
// console.log(mixed[0]);
// console.log(mixed[1]);
// console.log(mixed[2]);
// console.log(mixed[3]);
// console.log(mixed[4]);



// // function expecting a return value
// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(5, 3)); // Output: 15 

// // arrow function
// let add=(a, b) => a + b;
// console.log(add(2,3)); // Output: 5

// // function expression
// let divide = function (a, b) {    
//     return a/b;
// };
// console.log(divide(6,3)); // output:6

// // arrow function with single parameter
// let square=x => x*x;
// console.log(square(3));

// arrow function with no parameter
// const greetuser=() => {
//     console.log("hello world");
// }
// greetuser();

// // map on array
// // map creates a new array by applying a function to each element of the original array
// let newarray=[1,2,3,4,5];
// let squaredarray=newarray.map(num => num*num);
// console.log(squaredarray); // Output: [1, 4, 9, 16, 25]
// // console.log(typeof squaredarray); // Output: object (arrays are a type of object in JavaScript  )
// let addedarray=newarray.map(num => num+10);
// console.log(addedarray); // Output: [11, 12, 13, 14, 15]

// // filter on array
// // filter creates a new array with all elements that pass the test implemented by the provided function

// let evennumbers=[1,2,3,4,5,6,7,8,9,10];
// let evenfilteredarray=evennumbers.filter(num => num%2===0);
// console.log(evenfilteredarray); // Output: [2, 4, 6, 8, 10]

// reduce on array
// accumulator is the accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied (see below). currentValue is the current element being processed in the array.
// if supplied and currentValue is the current 
// reduce applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

// let sum=[1,2,3,4,5];
// let total=
// sum.reduce((a, c) =>a+c,0);
// console.log(total); // Output: 15
