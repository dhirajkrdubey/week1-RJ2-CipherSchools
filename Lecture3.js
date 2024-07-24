// 1.  .map()

// let array = [1, 2, 3, 4, 5];
// let newArray = [];

// for(let i = 0; i < array.length; i++){
//     newArray[i] = array[i] * array[i];
// }

// console.log(newArray);


let arrray = [5, 10, 15, 20];

// function functionForMap(element) {
//     return element * element;
// }

let functionForMap = (element, index) => {
    console.log(index);
    return element * element;
}

let newArrray = arrray.map(functionForMap);

// let newArrray = arrray.map((element) => element * element);

console.log(newArrray);

// In JS, a function is also a JS Object


// .forEach()

let array = [1, 2, 3, 4, 5];

array.forEach((element, index) => {
    element *= element;
    console.log(element);
});


// 3. .filter()

let store = [30, 40, 10, 20, 50, 111];
let store2 = store.filter((element) => element >= 30);

// for(let i=0; i<store.length; i++){
//     if(store[i] > 30)
//         store2.push(store[i]); 
// }

console.log(store2);

let temp = store.find((value) => value >=30);

console.log(temp);


//4.  .sort()

let sortedArray = store.sort((el1, el2) => {
    el1 = Number(el1);  
    el2 = Number(el2);
    return el1 - el2;
});

console.log(sortedArray);

//Object Destructuring

let details = {
    name: "Alex", 
    age : 24,
    address: {
        street: "Brooklyn",
        city : "New York",
        state : "NY",
        country : "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};

// let myName = details.name;
// let age  = details.age;

let { name : myName, age } = details;
console.log(myName, age);

//Array Matching 

// 1.arr1 == arr2
// 2.arr1.length == arr2.length

// 3.run a for loop to check for each element 

//Object Matching

let obj1 = { name: "dhiraj" };
let obj2 = { name: "dhiraj"};

function areEqual(obj1, obj2){
    if(obj1 === obj2)
        return true;
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(let key of Object.keys(obj1)) {
        if(typeof obj2[key] === "undefined") {
            return false;
        }
        if(obj2[key] !== obj1[key]) {
            return false;
        }
    }

    return true;
}

console.log(areEqual(obj1, obj2));

//Map and Set
let map = new Map();
map.set(1, "shantanu");
map.set(2,"Alex");
console.log(map);

let set  = new Set();

set.add(1);
set.add(-1);
set.add(1);
console.log(set)


//class

class Animal {
    noOfLegs;
    color;
    family;
     sound;

     constructor(noOfLegs, color, family, sound) {
        this.noOfLegs = noOfLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
     }
}

let animal = new Animal(4, "brown", "rodent", "something");
console.log(animal);


