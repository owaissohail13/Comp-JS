// ----------------------------------------------- J A V A - S C R I P T  S T A R T:) --------------------------------------------

// alert("hello!");

// JAVASCRIPT Console API
// console.log("hello world", 4 + 6, "another log");
// console.warn("this is warning");
// console.error("this is error")

// var a = 5
// var b = 5
// console.log(a + b);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, Number, String, Boolean, Symbol
2. Reference data types: Arrays and Objects
*/


// ============================================== Operators in JavaScript: ==============================================

// Arthimetic Operators

// var arr = [1, 2, 3, 4, 5];
// console.log(arr)

// var a = 100;
// var b = 50;
// console.log("the values of a+b is", a + b)
// console.log("the values of a-b is", a - b)
// console.log("the values of a*b is", a * b)
// console.log("the values of a/b is", a / b)

// -----------------------------

// Assignment Operators

// var a = 100;
// var b = 50;
// var c = b;
// c += 2
// c -= 2 // c = c - 2;
// c *= 2
// c /= 2
// console.log(c - b + a)

// -----------------------------

// Comparison Operators (True / False)

// var x = 100
// var y = 200;
// console.log(x == y)
// console.log(x <= y)
// console.log(x >= y)
// console.log(x < y)
// console.log(x > y)

// -----------------------------

// Logical Operators (Boolean Algebra)
// Logical and
// var x = 100
// var y = 200;
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

// Logical or
// var x = 100
// var y = 200;
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not (jhoot ko sach or sach ko jhoot)
// console.log(!false)
// console.log(!true)

// -----------------------------

// ( | = bit wise operator)

// ============================================== Operators Completed!: ==============================================

// ============================================== F U N C T I O N S ! ; ==============================================

// function hello() {
//       document.write("Hello EveryBody!")
// }

// hello();

// function avg(a, b) {
//       return (a + b) / 2;
// }
// c1 = avg(4, 6);
// c2 = avg(14, 16);
// console.log(c1, c2)

// ============================================== Functions Completed!: ==============================================

// =========================================== Conditional Statements in JS ==========================================

// ( > bigger )( < small )

// if - else statement
// var age = 10
// if (age > 18) {
//       console.log("you are not a kid")
// } else {
//       console.log("you are a kid");
// }

// -----------------------------

// if - else ladder
// var age = 10;
// if (age > 18) {
//       console.log("you are not a kid");
// }
// else if (age > 15) {
//       console.log("you are a kid");
// }
// else {
//       console.log("End Of Ladder");
// }

// ===================================== Conditional Statements Completed!: ===========================================

// ==================================================== Loops in JS ====================================================

// For Loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
// }

// -----------------------------

// ForEach Loop
// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// arr.forEach(function (element) {
//       console.log(element)
// })

// -----------------------------

// While Loop
// var arr = [1, 2, 3, 4, 5, 6, 7];
// let j = 0;
// while (j < arr.length) {
//       console.log(arr[j]);
//       j++;
// }

// -----------------------------

// Do-While Loop
// var arr = [1, 2, 3, 4, 5, 6];
// let j = 5;
// do {
//       console.log(arr[j]);
//       j++;
// } while (j < arr.lenght) {
// }

/*
Q.   What is the difference between While Loop & Do-While Loop?

Ans. while loop (condition pehle check karta hai phir chalta hai)
     do-while loop [kam se kam aik baar tou chalta hi chalta hai
     (pehle baar tou chalega hi chahye condition true ho ya false) ]
*/

// ================================================ Loops Completed!; ==================================================

// =========================================== Break and Continue Statement ============================================

// Break Statement
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//       if (i == 2) {
//             break;
//       }
//       console.log(arr[i]);
// }

// -----------------------------

// Continue Statement
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//       if (i == 2) {
//             continue;
//       }
//       console.log(arr[i]);
// }

/*
Q.    What is Break and Continue Statement ?
Ans.  break(lopak krna choor do)
      break (iss loop chooro oor bahar aajao)

      continue (iss iteration ko chooro oor agli iteration pr pr jaao / lag jaao)
      continue (iss iteration ko cancel krdo)
*/

// =================================== Break and Continue Statement Completed!; ==========================

// =================================== Array Methods in JS Completed!; ===================================

// Array Methods
// pop();        (last sy aik poora word nikl jaayega)
// push();       (last mai aik poora word add hojayega)
// shift();      (shuru mai sy aik poora word nikl jaayega)
// unshift();    (shuru mai aik poora word add hojayega)

// -----------------------------

// let myArr = ["Fan", "Camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("owais");
// myArr.shift();
// myArr.unshift("owais");
// console.log(myArr);

// -----------------------------

// CODE With Harry (YT)
// let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
// console.log(myArr.length);
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

// ========================================= Array Completed!; ===========================================

// ========================================= String Methods in JS ========================================

// let myString_01 = "muhammad owais muhammadd sohail"
// console.log(myString_01.length);
// console.log(myString_01.indexOf("muhammadd"));
// console.log(myString_01.lastIndexOf("owais"));

// console.log(myString_01.slice(9, 14));

// let myString_01 = "muhammad owais muhammadd sohail"
// i = myString_01.replace("owais", "arsalan")
// console.log(i);
// i = myString_01.replace("owais", "arsalan")
// console.log(i, myString_01);

// ========================================= String Methods Completed!; ==================================

// =================================================== Dates =============================================

// var a = new Date();
// console.log(a);
// console.log(a.getDate());
// console.log(a.getDay());
// console.log(a.getMonth());
// console.log(a.getFullYear());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getTime());

// ============================================== DOM Manipulation ========================================

// var elem = document.getElementById("click");
// console.log(elem);

// document.getElementById("click").click();
// document.getElementById("click").style.background = "blue"

// var elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background = "black"

// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-danger");
// elemClass[0].classList.remove("text-danger");

// elemClass[0].innerHTML
// console.log(elemClass[0]);
// elemClass[0].innerText
// console.log(elemClass[0]);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[1].innerText);

// tn = document.getElementsByTagName("div")
// console.log(tn);

// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement("b")
// createdElement2.innerText = "This is a created bold"
// tn[0].replaceChild(createdElement2, createdElement)
// removeChild(element); ---> removes an element


// ============================================== Selecting Using QUERY ========================================

// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked() {
//       console.log("the button was clicked");
// }

// window.onload = function () {
//       console.log("Finally Refreshed");
// }

// ======================================================= E V E N T S ========================================

// firstContainer.addEventListener('click', function () {
//       console.log('Clicked on container...');
// })

// firstContainer.addEventListener('click', function () {
//       document.querySelectorAll('.container')[1].innerHTML = "<b>Finally Clicked on Container</b>"
//       console.log('Clicked on container...');
// })

// firstContainer.addEventListener('mouseover', function () {
//       console.log('Mouse in container...');
// })

// firstContainer.addEventListener('mouseout', function () {
//       console.log('Mouse out of this container...');
// })

// firstContainer.addEventListener('mouseup', function () {
//       console.log('Mouse up when clicked on container...')
// })

// firstContainer.addEventListener('mousedown', function () {
//       console.log('Mouse dowm when clicked on container...')
// })

// var prevHTML = document.querySelectorAll('.container')[1].innerHTML
// firstContainer.addEventListener('mouseup', function () {
//       document.querySelectorAll('.container')[1].innerHTML = prevHTML
//       console.log('Mouse up when clicked on container...')
// })

// firstContainer.addEventListener('mousedown', function () {
//       document.querySelectorAll('.container')[1].innerHTML = "<b>Finally Clicked on Container</b>"
//       console.log('Mouse dowm when clicked on container...')
// })

// ======================================================= ARROW Functions ========================================

// function sum(a, b) {
//       return a + b;
// }

// sum = (a, b) => {
//       return a + b;
// }

// logkaro = () => {
// document.querySelectorAll('.container')[1].innerHTML = "<b>we have clicked</b>"
// console.log('i am your log');
// }

// ============================================== SetTimeout and SetInterval ========================================

// setTimeout(logkaro, 10000)
// setInterval(logkaro, 2000)
// clr = setInterval(logkaro, 2000)
// use clearInterval/clearTimeout to cancel setInterval/setTimeout

// =============================================== LocalStorage in JS ===============================================

// localStorage.setItem('name','owais');
// localStorage;
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

// =============================================== JSON in JavaScript ===============================================

// obj = {name: "harry", length: 1, a: {this: 'tha"t'}}
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed);

// ============================== Template literals - Backticks in JavaScript =======================================

// a = 34;
// console.log(`this is my ${a}`)

// ----------------------------------------------------- T H E - E N D -----------------------------------------------------
// ----------------------------------------------- O F J A V A - S C R I P T :) --------------------------------------------