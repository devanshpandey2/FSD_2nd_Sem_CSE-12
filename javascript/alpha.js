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

// map on array
// map creates a new array by applying a function to each element of the original array
let newarray=[1,2,3,4,5];
let squaredarray=newarray.map(num => num*num);
console.log(squaredarray); // Output: [1, 4, 9, 16, 25]
