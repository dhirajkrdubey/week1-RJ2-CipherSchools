//In JavaScript, we can declare a variable in 3 ways
// 1. by using var
// 2. by using let
// 3. by using const

// var myName = "John";
// console.log(myName)


//const
// const myName = [];
// console.log(myName);
// myName.push("John");
// console.log(myName);

//let
// let myName = "John";
// console.log(myName);
// myName = 5;
// console.log(myName);



//String Interpolation
let firstName = "Dhiraj";
let lastName = "Dubey";

// let fullName = firstName + " " + lastName;
// ["Dhiraj"]["Dubey"][" "]["Dhiraj "]["Dhiraj Dubey"][][][][][]
let fullName = `${firstName} ${lastName}`;
// [Dhiraj][Dubey][Dhiraj dubey]
console.log(fullName);

//Ways to create a function

// function addTwoNumbers(num1, nums2){
//     return num1 + nums2;
// }

// let addTwoNumbers = (num1, num2) => {
//     return num1 + num2;
// }

// let addTwoNumbers = (num1, num2) => num1 + num2;

let addTwoNumbers = (num1, num2=5) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
}
console.log(addTwoNumbers(2));

// Spread Operator are Arrays and Objects in JS
let array = [5, 10, 15, 20, 25];
let newArray = [...array,30, 40, 50];
let neewArray = array // point to the same referrence
console.log(newArray);
console.log(...array);

//Rest Operator 

// let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
// let maxOfThreeNumberes = (num1, num2, num3) => Math.max(num1, Math.max(num2, num3));

// console.log(maxOfTwoNumbers(11, 14));
// console.log(maxOfThreeNumberes(20 ,23 , 24));

//to ovecome the above steps use rest

let maxOfNumber = (...numbers) => {
   let maxi = Number.MIN_VALUE;
   for(let number of numbers){
    maxi = Math.max(maxi, number);
   }

   return maxi;
}

console.log(maxOfNumber(1,2,3,4,5,6,7,8,9,10));

// For Object

let object = {
    name: "John",
    age: 24,
    city: "New York",
    address: {
        city: "New jersey",
        state: "NY",
        country: "USA"
    }
};

// let object2 = object // point to the same refference
let object2 = { ...object, name: "dhiraj", city: "new ark", country: "USA", favouriteSong: "Numb by dhiraj"}
console.log(object);


