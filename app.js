// let bmw = 50;
// let rangeRover = 90;
// let jeepCompass = 50;
// let output = `The Total Price is ${bmw + rangeRover + jeepCompass} lakhs.`;
// alert(output);

// let age = 18;
// let ageResult = (age <= 1);
// alert(`You can caste the vote ${ageResult}`);

// let age = 10;
// if (age >= 18) {
//     alert("You can vote");
//     alert("You can drive");
// }
// alert("You can't vote");

//Trafiic light create
// let color = "green";
// if (color === "red") {
//     alert("Stop! light color is red");
// }else if (color === "yellow") {
//     alert("Slow down!  light color is yellow");
// }else if (color === "green") {
//     alert("go!  light color is green");
// }

// let age = 10
// if (age >= 18) {
//    alert("you can vote "+ age  +" Y ") ;
// } else if (age <= 20){
//     alert("you canot vote " + age + " Y ")
// }

// let age = 8;
// if (age >= 18) {
//     alert("You can vote");
// } else {
//     alert("You can not vote");
// }

//popcorn system bulid
// let size = "s";
// if (size === "xl") {
//     alert("Price is Rs. 250");
// }else if( size === "l"){
//     alert("Price is Rs. 200");
// }else if (size === "m"){
//     alert("Price is Rs. 150");
// }else{
//     alert("Price is Rs. 100")
// }

// let marks = 70;
// if (marks >= 33 && marks >= 80) {
//     alert("Pass and A+")
// }else{
//     alert("Fail")
// }

// let marks = 20;
// if (marks >= 33 || marks >= 80) {
//     alert("Pass and A+")
// }else{
//     alert("Fail")
// }

// let marks = 70;
// if (!(marks <= 30)) {
//     alert("Pass and A+")
// }else{
//     alert("Fail")
// }

// let str = "Apple";
// if ((str[0] === "a") && (str.length >3 )) {
//     alert("good string");
// }else{
//     alert("Not a good string");
// }

// switch statements
// let color = "white";
// switch (color) {
//     case "red":
//         alert("Stop!");
//         break;
//     case "yellow":
//         alert("Slow down");
//         break;
//     case "red":
//         alert("Stop!");
//         break;
//     default:
//         alert("traffic light is broken")
// }

// let day = 11;
// switch (day) {
//   case 1:
//     alert("sunday");
//     break;
//   case 2:
//     alert("monday");
//     break;
//   case 3:
//     alert("tuesday");
//     break;
//   case 4:
//     alert("wedensday");
//     break;
//   case 5:
//     alert("thuesday");
//     break;
//   case 6:
//     alert("friday");
//     break;
//   case 7:
//     alert("satarday");
//     break;
//   default:
//     alert("somethings went wrong")
// }

// console.log("Something is wrong");
// console.error("something is error message");    ///error messages
// console.warn("this is warning message");

// let firstNmae = prompt("Enter Your name : ");
// alert(`good morning ${firstNmae}`);

//strings method
// let str = "  SP Singh  "
// let finalStr = str.trim();
// alert(`trim str ${finalStr}`);

// let password = prompt("Create Paasword ");
// let savePassword = password.trim();
// alert(`Your password is : ${savePassword}`);

// let str = "SP Singh";
// console.log(str.toLowerCase());

// let names = "SP SINGH";
// console.log(names.toUpperCase());

//indexOf

// let str = "ilovecodeing";
// console.log(str.indexOf("love"));
// console.log(str.indexOf("z"));

//method chaining

// let str ="   I Love u Shruti ❤️  ";
// let newStr = str.trim().toUpperCase();
// console.log(newStr);

//Slice method
// let str ="I Love u Shruti ❤️";
// alert(str.slice(8))

// let str ="I Love u Shruti ❤️";
// let strreplace = str.replace("Love" , "Hate")
// alert(strreplace);

// let str ="I Love u Shruti ❤️";
// let strreplace = str.repeat(500);
// alert(strreplace);

//Array
// let students = ["SPS" , "Utkarsh" ,"Nikhil"];
// console.log(students);
// console.log(students[2]);

//empty array

// let newArray = [];
// console.log(newArray.length);

//array method
// let students = ["SPS" , "Utkarsh" ,"Nikhil"];
// let newArray = students[0] = "MP Singh";
// console.log(newArray);
// console.log(students);

// let cars = ["BMW" , "audi" ,"Range Rover" , "jeep"];
// let newCras = cars.push("XUV")
// let newCras = cars.pop("XUV")
// let newCras = cars.unshift("XUV")
// let car =  ["XUV", "BMW" , "audi" ,"Range Rover" , "jeep"];
// let newCras = car.shift("XUV")
// console.log(cars);

// let car =  ["XUV", "BMW" , "audi" ,"Range Rover" , "jeep"];
// console.log(car.indexOf("BMW"));
// console.log(car.indexOf("jeep"));

// let car =  ["XUV", "BMW" , "audi" ,"Range Rover" , "jeep"];
// console.log(car.includes("XUV"));
// console.log(car.includes("swift"));

// let subjectFirst = ["Computer science " , " English " ,"hindhi"];
// let subjectSecond = ["Pyhsical science " ," chemistry " ,"Physics"];
// let allSubject = subjectFirst.concat(subjectSecond);
// console.log(allSubject);
// console.log(subjectFirst.reverse());

//Slice
// console.log(allSubject.slice(2 , 3));
//  console.log(allSubject.slice(-2));

//Splice
// console.log(allSubject.splice(4));
// console.log(allSubject); //origanl array change splice method but splice method not change.
// console.log(allSubject.splice(1,0,"SPS"));
// console.log(allSubject);

//Sorting
// console.log(allSubject.sort());

// let months = ["january", "july", "march","august"]
// let newMonths =months.splice(0,2,"july", "june");
// console.log(newMonths);
// console.log(months);

//Constant array
// const g = 9.8;

//tic tac toe
// let game = [["X" , "null" ,"0"],["Null" , "X" ,"Null"],["0" , "null" ,"X"]];
// console.log(game);
// let change = game [0][1]= "Change";
// console.log(change);

//loops
// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }
//odd number 1 to 15
// for(let i = 1; i<=15; i = i +2){
//     console.log(i);

// }

// for(let i = 15; i>=1; i= i-2){
//     console.log(i);

// }
//Even number
// for(let i = 2; i<=20; i = i +2){
//     console.log(i);

// }

// for(let i = 19; i<=190; i = i +19 ){
//     console.log(i);

// }

//print the multiplication of table 5
// for(let i = 5; i<=50; i=i+5){
//     console.log(i);

// }

// let n = parseInt(prompt("Enter the number "));
// for(let i = n; i<= n*10; i = i+n){
//     console.log(i);

// }
// for(let i = 1; i<=3; i++){
//     console.log(`outer loop ${i}`);

//     for(let j = 1 ; j <=3 ; j++){
//         console.log(j);

//     }

// }

//While loops
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;

// }

// const favMovie = "lund";
// let guess = prompt("Guess my fav movie ")
// while ((guess != favMovie) && (guess != "quit")) {
//     guess = prompt("Wrong Guess please try again ");
// } if (guess == favMovie) {
//     console.log("Congrats");
// } else {
//     console.log("You quit!");
// }

//break
// let i = 1;
// while(i<=10){
//     if (i==8) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i , fruits[i]);
// }

//for of loops
// for(char of "SPSingh"){
//     console.log(char);

// }

// js object literal
// const student = {
//     name : " SP Singh",
//     age : 23,
//     mark : 516,
//     mobileNumber : 7985378723

// }
// console.log(student);

// const post ={
//     username:"codewithsps",
//     content : "i don't know about facebook",
//     like: 50,
//     reposts: 10,
//     tags: ["@sps" , "@facebook"]
// }
// console.log(post["tags"]);
// console.log(post.like);

//add value and update
// const student = {
//         name : " SP Singh",
//         age : 23,
//         mark : 516,
//         city: "Delhi"
//     };
//     student.city = "Mumbai"
//     student.gender = "male"
//     delete student.city;
//     console.log(student);

//math object
// let randomNumber = Math.random();
// console.log(randomNumber);

// let otpGenrate = Math.floor(Math.random() * 10000) + 1;
// console.log(otpGenrate);

// let otpGenrate = Math.floor(Math.random() * 5) + 1;
// console.log(otpGenrate);

//function
// function PrintValue() {
//     for (i = 1; i<=10; i++){
//         console.log(i);

//     }
// }
// PrintValue();

// function PrintValue() {
//     let age = 18;
//     if (age >= 18) {
//         console.log("adults");
//     }else{
//         console.log("not adult");

//     }
// }
// PrintValue();

// function rollDice() {
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);

// }
// rollDice();

//function with arguments
// function FullNmae(name , age) {
//     console.log(`Your name is ${name} and your age is : ${age}`);

// }
// FullNmae("SP Singh" , 23);

// function avergeThree(a,b,c) {
//     let avg = (a + b + c)/3;
//     console.log(avg);

// }
// avergeThree(10 ,20 ,30);

// function prinTable(n) {
//    for (let i = n; i <= n*10; i+=n) {
//     console.log(i);
//    }
// }
// prinTable(2);
// prinTable(21);
// prinTable(30);

//return
// function sum(a , b) {
//     return a+b ;
// }
// let s = sum(3, 7);
// console.log(s);

// function getSum(n) {
//     let sum = 0;
//     for( i= 1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }
// let k = getSum(3);
// console.log(k);

//Function Expression
// let sum = function(a , b){
//     return a + b;
//     console.log(sum);
// }
// let print = sum(2,3);
// console.log(print);

// function multipleGreet(fun ,count) {
//     for(i = 1; i<=count; i++)
//         fun();
// }
// let great = function(){
//     console.log("Hello");
//      }
//  multipleGreet(great ,1000);

// const calculator = {
//        add :  function(a ,b){
//         return a+ b;
//        },
//        sub :  function(a ,b){
//         return a- b;
//        },
//        mul :  function(a ,b){
//         return a* b;
//        }
// }

//This
// const studentsMarks = {
//     name: "sp singh",
//     phy: 50,
//     chemistry: 80,
//     english: 50,
//     hindhi: 60,
//     getAvg () {
//         let Total = (this.phy + this.chemistry + this.english) / 3;
//         console.log(Total);

//     }
// }
// console.log(a);
//try and catch
// let a = 5;
// try{
//     console.log(a);

// }catch{
//     console.log("caught an Error : a is not defined");

// }
// Aroow function
// const sum = (a , b) =>{
//     console.log(a + b);

// }
// sum( 2, 4);

// const cube = (n) =>{
//     return n*n*n;
//     console.log(n);

// }
// cube(2);
// const sum = (a , b) => a +b;

//set time out
// console.log("hii there");
// setTimeout(() => {
//   console.log("Code with sps");
// }, 4000);
// console.log("Welcome to");

//set interval
// let id = setInterval(() => {
//     console.log("SP Singh");
    
// }, 4000);
// clearInterval(id);

//DOM
//innertext ,innerHtml , textcontent

//keyboards events
//  let btn = document.querySelector("button");
//  btn.addEventListener("click" , function(event){
//     console.log(event);
//     console.log("button clicked");
//  });

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("key was pressed");
    
// });

// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(){
//     console.log("key was relesed");
    
// });

// let form = document.querySelector("form");

// form.addEventListener("submit" , function(event){
//     event.preventDefault();
//     // alert("form submited");
//    let input = document.querySelector("input");
//    console.log(input.value);
    
// })


//**********javaScript advanced****************
// setTimeout(()=>{
//     console.log("CodeWithSps");
// },200);
// console.log("Hello.......");

// h1 = document.querySelector("h1");
// setInterval(()=>{
//     h1.style.color = "red";
// }, 1000);
// setInterval(()=>{
//     h1.style.color = "green";
// }, 2000);
// setInterval(()=>{
//     h1.style.color = "blue";
// }, 3000);


//*************Async and await function***********/
// async function greet(){
// return "hello";
// }

