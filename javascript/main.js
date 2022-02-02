//*-- Objects  --*
const student = {
  name: "walid",
  lastname: "Sabri",
  email: "walid@gmail.com",
};
// access a value in an object
// console.log(student['email']);
//delete a key
delete student.name;
//add a key to the obj
student.age = 25;
//update a key of the obj
student.lastname = "Satouri";
//*--a table of objects --*

const students = [
  {
    name: "ridha",
    lastname: "Satouri",
    email: "ridha@gmail.com",
    address: {
      country: "Tunisia",
      state: "Djerba",
      street: "houmet souk ",
    },
  },

  {
    name: "walid",
    lastname: "Sabri",
    email: "walid@gmail.com",
    favFood: ["fruits", "jus"],
  },
  "oumaima",
];

// console.log(students[0].address.country);
// console.log(students[1].favFood[0]);
students.shift();

console.log(student);

// *--strings--*

//concatination des string
const name = "walid";
const lName = "Sbari";
console.log("my name c'est " + name + "" + lName);
console.log(`My name c'est  ${name}  si 
${lName} my age is ${20 + 5} `);

//string methods
str = "Sentence For testing ";
//string length
console.log(str.length);
//string index
console.log(str[0]);
//change case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

//exemple
let str1 = str.toUpperCase();
let str2 = str.toLowerCase();
console.log(str == str2);

//  get sub string
const sub = str.substring(2);
console.log(sub);

//split into array
const arr = str.split(" ");

console.log(arr);
const newString = arr.join(" ");
console.log(newString);
console.log(typeof newString);

//*--Number --*
const Num = 20;
const Num1 = 15;
console.log(Num + Num1);
console.log(Num === Num1);
console.log(Num !== Num1);

//loop
//une execution   répetitive, des instruction , jusqu'à qu'on arrive à une condition trés bien determiné

const number = 3;
// console.log(` you still have 3 trials `);
// console.log(` you still have 2 trials `);
// console.log(` you still have 1 trials `);

for (let i = number; i > 0; i--) {
  console.log(`you still have ${i} trial `);
}

// array itiration
const arr3 = [5, 8, 6, 95, 6159];

console.log(arr3[arr3.length - 1]);

for (let i = 3; i < arr3.length - 2; i++) {
  console.log(arr3[i] * 10);
}

for (let j in arr3) {
  console.log(arr3[j]);
}

for (let e of arr3) {
  console.log(e * 10);
}

//exemple: calculate the sum of numbers
const budget = [50, 60, 5];
let sum = 0;
for (let i of budget) {
  //sum=sum+i
  sum += i;
}
console.log(sum);

const budget1 = [
  { name: "ridha", bg: 500 },
  { name: "omayma", bg: 600 },
  { name: "walid", bg: 50 },
];

let somme = 0;
for (let i of budget1) {
  console.log(i.bg);
  somme += i.bg;
}
console.log(somme);

// Conditionals
//if/else

const x = 0;

if (x < 0) {
  console.log("inf 0");
} else if (x == 0) {
  console.log(" x égale à 0 ");
} else {
  console.log("sup 0");
}

x < 0
  ? console.log("inf 0")
  : x == 0
  ? console.log(" x égale à 0 ")
  : console.log("sup 0");

//exemple 2: exract the min and the max of the array
const arr5 = [-1, 8, 6, 965, 8];
let min = arr5[0];
let max = arr5[0];
for (let i in arr5) {
  if (arr5[i] < min) {
    min = arr5[i];
  } else if (arr5[i] > max) {
    max = arr5[i];
  }
}
console.log([min, max]);

const Number = 15;
// switch
switch (Number) {
  case 5:
    console.log("it is five ");

    break;

  default:
    console.log("it is not five ");
}

//functions
// is is a set of instructions that will be executed once we call the function

function Affiche ( ){
console.log('it is a function');
}
Affiche()

function Sum (a,b){
console.log(a+b)
}
Sum ( 3,5)

const Summ=(a,b)=>{
console.log(a+b);
}
Summ(2,8)


