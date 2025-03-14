/**
 * 1. Write a function named calculateSum that takes two arguments and returns the sum of the two arguments.
 */
function calculateSum (a, b) {
   return a + b
}
const result = calculateSum(5,10);
console.log(result);

/**
 * 2. Write a function named isEven that takes one argument and returns true if the number is even, and false if it is not.
 */
function isEven (number) {
   if(number % 2 === 0) {
     return true
   } else {
     return false
   }
}

const even = isEven(4)
console.log(even)
/**
 * Write a function named findMax that takes an array of numbers and returns the largest number from the array.
 */
function findMax (max) {
   return Math.max(...max)
}
let arr = [4,5,6,8,43,10,15];
const maxNumber = findMax(arr);
console.log(maxNumber);

/**
 * 4. Write a function named filterOddNumbers that takes an array of numbers and returns a new array containing only the odd number
 */

let array = [3,2,5,7,8,9,10]
function filterOddNumbers (arr) {
    return arr.filter(num => num % 2 !==0)
}
const oddResult = filterOddNumbers(array);
console.log(oddResult);
// 

/**
 * Write a function named countWords that takes a string and returns the number of words in the string.
 */
let str = "hello duniya how are you";
function countWords (str) {
     return str.split(" ").length
}
const strResult = countWords(str)
console.log(strResult);

/**
 * 6. Write a function named removeDuplicates that takes an array and returns a new array with duplicate elements removed.
 */
let duplicatArray = [3,2,5,7,8,9,10,10,2,5,7]
function removeDuplicates (numbers) {
    let newArr = [];
    for (let number of numbers) {
       if(!newArr.includes(number)) {
          newArr.push(number);
         //  console.log(newArr)
       }
      } return newArr
    }
const dupResult = removeDuplicates(duplicatArray);
console.log(dupResult);

/**
 *  Write a for loop using javascript and it will show only odd numbers between 1 - 20. Ex: 2, 4, 6, 8, 10 ,12, 14, 16, 18, 20
 */
for (let i = 1; i <= 20; i += 2) {
   console.log(i);
 }
 
 /**
  * 2. Write a function names sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10
  */
 
 function sumArray (arr) {
    let sum = 0;
    for (const number of arr)
      sum = sum + number
     return sum
 }
 
 const result1 = sumArray([1,2,3,4,5,6])
 console.log(result1)
 
 /**
  * 3. Write a JavaScript function named mergeArrays(arr1, arr2) that takes two arrays  as arguments and returns a new array. Ex. mergeArrays([1,2],[3,4])
  */
 
 
 function mergeArrays (arr1, arr2) {
     return[...arr1, ...arr2]
 }
 const newArr = mergeArrays ([1,2,3,4,5,6], [7,8,9,10])
 console.log(newArr)

 /**Count how many times a string has the letter a*/
function contA (str) {
   let Count = 0;
   for (let i = 0 ; i < str.length; i++) {
     if (str[i] === 'a') {
       Count++
     }
   }
    return Count
}

// let strr = 'i want to be a  web developer i am very working hard and determine'
// const result =  contA(strr)
// console.log(result)
function count (str) {
   let count = 0;
   for (let i = 0; i < strr.length; i++) {
     if(str[i] === "a" || str[i] === "A"){
       count ++;
     }
   }
   return count;
}
let strr = "I want to be a Web Developer. I Am very hardworking And determined And i want job make A career in this industriy.";
const result2 = count(strr);
console.log(result);


/**
 * Check whether a string contains all the vowels a, e, i, o, u
 */
function vowels (str) {
   let vowels = "aeioun";
   if ( vowels.includes(str)) {
     return `yes here is all vowel words ${str}`
   } 
}


let vowelstr = "hello duniya i love you"
const vowelsResult = vowels(vowelstr) 


// Write a function to find the longest word in a given string.
function largestword (str) {
  let words = str.split(' ') 
  let longestword = "";
  for (let word of words) {
     if (word.length > longestword.length) {
        longestword = word;
      }
   }
   return longestword;
}

let input = "I am learning Programming to become a programmer"
console.log(largestword(input))

function make_avg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i]; 
  }
  return sum / arr.length; 
}

console.log(make_avg([10, 20, 30, 40, 50])); // Output: 30
// console.log(make_avg([5, 15, 25]));         // Output: 15
// console.log(make_avg([1, 2, 3, 4, 5, 6]));  // Output: 3.5
/**
 * Access the golden rod color value in output.
 */
const colors = {
   red: "#ff0000",
   green: "#00ff00",
   blue: "#0000ff",
   "golden rod": '#daa520'
 };
 
 console.log(colors['red'])
 
 /**
  * For this object below add a property named passenger capacity with value 5
  */
 const car = {
   make: "Toyota",
   model: "Corolla",
   year: 2020
 };
 car['passenger capasity'] = 5;
 console.log(car)
 
 /**Display the physics marks as output.*/
 
 const student = {
     name: "Hamim Sakep",
     id: 5421,
     physics: {
         subject: "HSC Physics",
         author: "Shahjahan Tapan",
         marks: 30
     }
 };
 
 console.log(student['physics']['marks'])
 
 
 /**Count the number of properties.*/
 let student1 = {
     name: 'Ariana Grande',
     age: 21,
     city: 'Gaibandha',
     isStudent: true
 };
 
 const propertyCount = Object.keys(student1).length
 console.log(propertyCount);
 
 
 /**Loop through an object and print the key-value pairs with their types*/
 let myObject = {
   name: 'John Doe',
   age: 25,
   city: 'Example City',
   isStudent: true
 };
 
 for(let key in myObject) {
    console.log( key , ' | ',  'type: ', typeof myObject[key])
 }

// একটি সংখ্যা ইনপুট নিয়ে চেক করো যে এটি জোড় (Even) নাকি বিজোড় (Odd)
let number = 9;
if (number %2===0){
   console.log('number is even ')
} else if (number % 2 === 1) {
   console.log('number is odd')
} else {
   console.log('invaild the number')
}

let x = 10;
let y = 21;
let z = 15;

if (x >= y && x >= z ) {
   console.log('x is bigger',x)
} else if (y >= x && y >= z) {
   console.log("y will be bigge",y)
} else if (z >= x && y <= z ) {
  console.log('z will be bigger',z)
} else {
   console.log("defult value")
}

let age = 18 ;
let Isjob = false;
let IsNice = true;
 if((age > 19 && isjob === true) || IsNice === true ) {
   console.log('She will love me')
 } else {
   console.log('she donot love me')
 }
 /**একটি স্টুডেন্টের নম্বর ইনপুট নিয়ে গ্রেড নির্ধারণ করো।
৮০ বা তার বেশি → A
৬০ থেকে ৭৯ → B
৪০ থেকে ৫৯ → C
৪০-এর কম → Fail */
let marks = 55;
if (marks >= 80) {
    console.log("he got A" ,marks)
} else if (marks >= 60 ) {
   console.log("he got B")
} else if (marks >= 40) {
    console.log('he got C')
} else {
    console.log('fail')
}

let password = "Sh@#amiM$417";
let userInput = "Sh@#amiM$417"

if (password === userInput) {
    console.log ('log-in page')
} else {
    console.log('rong password')
}
 /*এখানে তোমার কাছে একটা সংখ্যা থাকবে। তোমাকে সেই সংখ্যা যদি পজিটিভ হয় তাহলে "Positive Number" বলো, আর যদি নেগেটিভ হয় তাহলে "Negative Number" বলো, আর ০ হলে "Zero" বলো। */

//  let Number = -5;
  
//  if (Number > 0) {
//     console.log('positive number')
//  } else if ( Number > 0 ) {
//     console.log('negative value')
//  } else {
//     console.log('value is zero')
//  }
let numberOne = -5;  

if (number > 0) {
    console.log("Positive Number");
} else if (number < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}


const numbers = [75, 90, 50, 40, 80, 82, 77, 60, 59] ;
// const numbers = [6, 5, 1, 2, 3, 6, 60, 59] ;
const findSmallValue = numbers.find(n => n < 60)
console.log(findSmallValue)



const products = [
  { id: 1, name: "Laptop", stock: 5 },
  { id: 2, name: "Mouse", stock: 0 },  // প্রথম যেটার stock 0, সেটাই পাওয়া যাবে
  { id: 3, name: "Keyboard", stock: 2 }
];

// real life use case find

const unstockValue = products.find(product => product.stock === 0);
console.log(unstockValue);
const id = products.find(id => id.name === "Keyboard");
console.log(id)
const laptop = products.find(laptop => laptop.id === 1 );
console.log(laptop)

// ইউজারের দেয়া নির্দিষ্ট নাম খোঁজা 
const grades = ["B", "C", "A+", "D", "A"];

const findA = grades.find(grade => grade === 'A+');
console.log(findA);


/**Find the lowest number in the array below.*/
const heights2 = [167, 190, 120, 200, 300,165, 137];
const lowesheight = heights2.find((small)=> small > 190);
console.log(lowesheight);

// You are given an array of numbers. Count how many times the a number is repeated in the array.
function checkdoubble (str, matchnumbr) {
 let count = 0;
 for (let i = 0; i <str.length; i++ ) {
    if (str[i] === matchnumbr) {
      count++
    }
 }
 return count
}
let number1 = [5,6,11,12, 12, 12, 98, 5]
const result3 =  number1.find((num)=> num > 5);
console.log(result3)
console.log(checkdoubble(numbers , 12));

// real life use case of filter 
const users = [
   { id: 1, name: "Rakib", age: 25 },
   { id: 2, name: "Sakib", age: 16 },
   { id: 3, name: "Jamal", age: 30 },
   { id: 4, name: "Hasan", age: 14 }
 ];
 
 const adult = users.filter(adult => adult.age > 14);
 // console.log(adult)
 
 /**
  * 📌 ২. Out of Stock থাকা পণ্যগুলোর লিস্ট বের করা (E-commerce)
 একটা ই-কমার্স ওয়েবসাইটে স্টক শেষ হয়ে যাওয়া পণ্যগুলো বের করতে হবে।
  */
 const products1 = [
   { id: 1, name: "Laptop", stock: 5 },
   { id: 2, name: "Mouse", stock: 0 },
   { id: 3, name: "Keyboard", stock: 2 },
   { id: 4, name: "Monitor", stock: 0 }
 ];
 
 
 const stockProduct = products1.filter(product => product.stock === 0)
 // console.log(stockProduct)
 
 /**
  * 📌 ৩. ছাত্রদের মধ্যে শুধু "A+" পাওয়া শিক্ষার্থীদের লিস্ট বের করা
 একটা কলেজের ছাত্রদের গ্রেড দেয়া আছে, এখন শুধু যাদের "A+" আছে তাদের লিস্ট বের করতে হবে।
  */
 
 const students = [
   { name: "Rafiq", grade: "B" },
   { name: "Hasan", grade: "A+" },
   { name: "Sadia", grade: "C" },
   { name: "Karim", grade: "A+" }
 ];
 
 const GetA = students.filter (getA => getA.grade === "A+");
 // console.log(GetA)
 
 /**
  * 📌 ৪. নির্দিষ্ট ক্যাটাগরির ব্লগ পোস্ট খোঁজা (Blog Filtering)
 ধরো, আমাদের কাছে অনেক ব্লগ পোস্ট আছে, এখন আমরা শুধু "JavaScript" ক্যাটাগরির পোস্টগুলো দেখাবো।
  */
 const blogs = [
   { id: 1, title: "React Hooks Explained", category: "React" },
   { id: 2, title: "Understanding JavaScript Closures", category: "JavaScript" },
   { id: 3, title: "Node.js Performance Optimization", category: "Node.js" },
   { id: 4, title: "JavaScript ES6 Features", category: "JavaScript" }
 ];
 
 const JavaScript = blogs.filter(JavaScript => JavaScript.category === "JavaScript");
 // console.log(JavaScript)
 
 
 /**
  *  ৫. নামের প্রথম অক্ষর "S" দিয়ে শুরু হওয়া ইউজারদের লিস্ট বের করা
 ধরো, ইউজারদের লিস্ট আছে, এখন আমরা শুধু যাদের নাম "S" দিয়ে শুরু হয়েছে তাদের বের করবো।
  */
 
 const user = ["Sakib", "Arif", "Salman", "Hasan", "Sami"];
 const firsLetter = user.filter(letter => letter.startsWith("S") ) 
 // console.log(firsLetter)
 
 /**
  * . নির্দিষ্ট ক্যাটাগরির প্রোডাক্ট ফিল্টার করা (E-commerce Example)
     ধরো, "Electronics-" দিয়ে শুরু হওয়া প্রোডাক্টগুলোর লিস্ট বের করতে হবে।
  */

 const product = ["Electronics-TV", "Electronics-Phone", "Clothing-Shirt","Electronics-Laptop"];
 const Electronics = product.filter(product => product.startsWith("E"));
 console.log(Electronics);
 
 