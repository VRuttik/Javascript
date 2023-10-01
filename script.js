/* let x = "Hello Friends!", y = "Welcome to Our Page.";
alert(x + " " + y);

let age = 12;
let hasVoterCard = 'No';

if (age>=18){

 if(hasVoterCard =='Yes'){
alert("You can Vote!");
}else{
    alert("Get Your Voter ID Card.");
}
}else {

    alert("You cannot Vote!");
}


let isLoggedin = 1;  //if 0 loggedout, if 1 login

if(isLoggedin == 0){
    document.write('Login');
}else{
    document.write('Logout');
}


let option = isLoggedin == 0 ? "Logout" : "Login"; // Ternery operator (?)
document.write(option);


let user;

//user = "Vruttik";
alert(user ?? "Gest User"); // here if user is undefined then Gest user is option will be printed on the screen


// if input = 1, "y", "yes" output = continue...
//  if input = 0, "n", "no" output = continue...

let input;

input = "no";

if(input ==1){
document.write("Continue...");
}else if(input =="y"){
    document.write("Continue...");
}else if(input =="yes"){
    document.write("Continue...");
}else if(input ==0){
    document.write("End...");
}else if(input =="n"){
    document.write("End...");
}else if(input =="no"){
    document.write("End...");
}else{
    document.write("Wrong Input");
}


//switch statement
// === comparison
let input = "n";

switch(input){

    case 1:     //if(input === 1)
    case "y":   //if(input =="y")
    case "yes": //if(input =="yes")
    document.write("Continue...");
    break;

    case 0:    //if(input === 0)
    case "n":  //if(input =="n")
    case "no":  //if(input =="no")
    document.write("End...");
    break;

    default :
        document.write("Wrong Input");
}



 // Loops using for repeatition of work.

let counter = 1;

while(counter <= 10){
document.write('TechWithVR');
counter++;
}


let counter = 1;
let sum = 0;

while(counter <= 1000){
    if(counter % 2 == 0){
        sum = sum + counter;

    }
    counter++;

}
document.write(sum);


// do while loop

let counter = 1;

do{
    document.write('TechGun');
    counter++
}while(counter <= 10);


// for loop

let counter = 1;

for(let counter = 1; counter <= 15; counter++){

    document.write("TechGun");

}


// break 

for(let counter = 1; counter <= 10; counter++){

    if(counter == 5){
        break;         // here it will comes out after 5, loop ko break karata hai.
    }
    document.write(counter);
    document.write('<br>');
}



// continue

for(let counter = 1; counter <= 10; counter++){

    if(counter == 5){
        continue;      //here it will not print 5, jump karake condition par jata hai.
    }
    document.write(counter);
    document.write('<br>');
}

// loop ke andar loop or nested loop

outer: for(let counter = 1; counter <= 10; counter++){

    document.write(counter);
    document.write('<br>');

    for (let counter2 = 1; counter2 < 3; counter2++){

        if(counter == 3){
            continue outer;     // out is a loop name 
        }
        document.write('techgun');
        document.write('<br>');
    }
}



// function to interact with user: alert, prompt and confirm.


1. alert() - show a message.

2. prompt() - show a message, input text. It returns the text on ok or, if cancel 
button or Esc is clicked null.

3. confirm() - show a message, confirm with "OK" or "Cancel". It returns true for OK and false for Cancel/ Esc.


// 1.
alert('Welcome !');

// 2.

let age = prompt('Enter Your Age:', value = 20);

if(age != null){
    document.write('Your Age is ${age}');
}
else{
    document.write('Age Field was Blank.');
}


// 3. confirm

let responce = confirm('Are You Sure, You want to Delete?');

if(responce){

    document.write('Deleted');

}
else{
    document.write('Not Deleted');

}


// typeof operator

let type = "hello"; // 
alert(typeof type);


// type conversion

let type = "5" -2; // javascript main + operator number ko bhi add karata hai our string ko bhi.
console.log(type);
console.log(typeof type);

// 1. String()
// 2. Number()
// 3. Boolean()

let type = "";
console.log(typeof type); // old

let Newtype = Boolean(type);
console.log(Newtype);
console.log(typeof Newtype);

*/

// String Manipulation
/*
let str = "Vruttik Moragha"; // \n = new line, \t = tab space, If \ print karana hai to \\ dena padata hai,
                                  // "" print karana hai to \"\" karana padata hai.

let green = `Hi     ${str}`; // template literal.

console.log(green);

*/
/*
let str = "Vruttik Moragha"; 

console.log(str.length); // str.length = it calculate the length of string.

*/

/*
let str = "Vruttik Moragha"; 

console.log(str[3]); //  str[] = position of character and its starting from 0.

*/

/*
let str = "Vruttik"; // yanha bhi vruttik ke bad space de sakate hai.

let str2 = "Moragha";

console.log(str + " " + str2); // yanha space dene ke liye " " ye add karenge to string mzi space ban jayegi.

*/


// compare of string, javascript case sensitive language, 
// so keep letters matching even is they are capital our small.
/*
let str = "Vruttik";

if("Vruttik" == str){
  console.log('Equal');
}
else{
    console.log('Unequal');
}

*/

// adding string
/*
let str = "Vruttik";

let str2 = "Moragha";

let str3 = str.concat(" ", str2); // concate is a function two help adding string.

console.log(str3);

*/

// substring
/*
let str = "This is Javascript tutorial. It is a good tutorial.";

let substring = str.substring(8, 28); // first is position and next is how many character to take

console.log(substring)
*/
// Position of character from start.

/*
let str = "This is Javascript tutorial. It is a good tutorial.";

let position = str.indexOf('is', 6); 
console.log(position);
*/

// // Position of character from End.
/*
let str = "This is Javascript tutorial. It is a good tutorial.";

let position = str.lastIndexOf('iss'); // -1 output shows the the ye string or character present nahi hai.

console.log(position);

*/

// whitespace removing.

/*

let str = " This is Javascript tutorial. It is a good tutorial. ";

let trimedstr = str.trim();// trimStart function is from aage se or pichhe ke liye trimEnd. trim aage or pichhe ke liye.

console.log(str);
console.log(trimedstr);

*/

// Lowercase and Uppercase

/*
let str = "This is Javascript tutorial. It is a good Tutorial.";

let str2 = str.toLocaleLowerCase();

console.log(str);
console.log(str2);

*/

// replace substring
/*
let str = "This is Javascript tutorial. It is a good Tutorial.";

let str2 = str.replace('good', 'best');

console.log(str);
console.log(str2);

*/

/*
let str = "This is Javascript tutorial. It is a good Tutorial.";

let str2 = str.includes('Javascript');

console.log(str);
console.log(str2);

*/

// Array
/*
let book1 = "Math";
let book2 = "Physics";
let book3 = "Bio";
let book4 = "Computer Science";

let book1 = "English"; book1 ko update kiya.
console.log(book3);

*/

/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

let asset = [1, 8, "Math", 7];

// let book = new Array ("Math", "Physics", "Bio", "Computer Science"); same as above

book[1] = "English";
console.log(book[1]);

*/

/*
// Length of Array
let book = ["Math", "Physics", "Bio", "Computer Science"];

console.log(book.length);

*/

// Element add karana ho to

/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

book.push("Hindi");
console.log(book);

*/
// Element pahale add karana ho to
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

book.unshift("Hindi");
console.log(book);

*/
// Element hatana ho to
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

book.pop();
book.pop();
console.log(book);
*/

// aahe se Element hatana ho to
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

book.shift();
book.shift();
console.log(book);
*/

// koi bhi hatana ho to
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

book.splice(2, 1);
console.log(book);

*/

// Array Empty karana ho to
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];
// book = []; 
 book.length = 0;
console.log(book);

*/

// posotion of element
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

let position = book.indexOf("Bio");
console.log(position);

*/
/*
// To check is this array or not
// let book = ["Math", "Physics", "Bio", "Computer Science"];
let book = "Math"
console.log(Array.isArray(book));

*/
/*
// For convert string in to array

let text = "This is a random text";

let wordaraay = text.split(' '); // spilt() = string ko todata hai.
// let wordaraay = text.split('s');
console.log(wordaraay);

*/

// Array to string it means jodana.
/*
let book = ["Math", "physics", "Bio", "Computer Science"];
let wordaraay = book.join(' ');
console.log(wordaraay);
*/

// Joinning of two array
/*
let book = ["Math", "physics", "Bio", "Computer Science"];
let book2 = ["Hindi", "English"];
let book3 = ["Marathi", "Telagu"];

let NewBook = book.concat(book2, book3);
console.log(NewBook);

*/

// Multi Dimensional Array, it means array ke andar aaray.
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

let bookWithPages = [
    ["Math", ["300", "500"]], // 0
    ["Physics", "500"], // 1
    ["Bio", "400"] //2

];

bookWithPages[1][0];
let fetch =     bookWithPages[0][1][0];
console.log(fetch);

*/
// Access elements in aaray.

/*
let book = ["Math", "Physics", "Bio", "Computer Science"];
let booklength = book.length;


for(i = 0;i < booklength; i++){
    console.log(`Element ${i} is ${book[i]} \n`);
}

*/
/*
let book = ["Math", "Physics", "Bio", "Computer Science"];

book.forEach(myfu);
function myfu(value){
    console.log(value);

    */

    /*

    // function

    for(i=0;i<=10;i++){
    document.write(`2 * ${i} = ${2 * i}`);
    document.write("<br>");
}
*/
/*
function Multable(){           // Function is used for repeating task.
    for(i=0;i<=10;i++){
        document.write(`2 * ${i} = ${2 * i}`);
        document.write("<br>"); 
    } 

    document.write("<br><br>");

}
 Multable(); // Calling of Function

 document.write("Hello<br>");

 Multable();
*/
/*
 // Parameters And Arguments

 function Multable(num){        // Here is a parameter
    for(i=0;i<=10;i++){
        document.write(`${num} * ${i} = ${num * i}`);
        document.write("<br>"); 
    } 

    document.write("<br><br>");

}
 Multable(2); // Here 2 is Arguments

 document.write("Hello<br>");

 Multable(5); // Here. 5 is Arguments or jo value pass karate hai na usako Arguments bolate hai.

 */
/*
 // Adding of two numbers using function

 function add(num1, num2){
    document.write(num1+num2);
 } 
 add(11, 34);

 */

 // The Arguments Objects
/*
 function add(){
    // console.log(arguments.length) > length dekhani ho to
    console.log(arguments); // pura array dekhana ho to
 }

 add(5, 7);
 add(5, 7, 8);
 add(5, 7, 2, 6);
 */
/*
 // Array Access karana 

 function add(){
    
    console.log(arguments[1]); // here 7 ko access karana hai to 1. 
 }

 add(5, 7, 8);

 */
/*
 function add(){
    
    if(arguments.length == 0){
        console.log("No Arguments Passed !")
    }
    else{

        let sum = 0;
        for(i=0; i<arguments.length; i++){

            sum = sum + arguments[i];
        }
        console.log(sum)
    }
 }

 let addition = add; // function ko variables mai bhi  store kar sakate hai.

 add(5, 7);
 add(11 ,34, 12);
*/

// Return statement 
/*
function add(a, b){
    d = a+b;
    return d; // jaise hi return milata hai vo execute hota hai, usake nichhe ka execute karana band hota hai.
}
let c = add(5, 7);

document.write(c);

*/

// comparision of number
/*
function compare(a, b){
    if(a > b){
        return 1;
    }
    else if(b > a){
          return -1;    
    
    }
    else{
        return 0;
    }
}let c = compare(4,3)
 document.write(c);

 */

 // Global variable and Local variable
/*
 let car = "Audi"; // Global Variable, THIS FUNCTION WORks on any where in page.

 function add(){
    let result = 33; // Local Variable, this function only work for under 

    // console.log(result);
    console.log(car);
 }
add();
console.log(car);
*/

// Anonymous Function, aisa function jisaka nam n ho.
/*
let show = function (){
    console.log("Hello Worlds!");

};
show();
*/
/*
function show(){
    console.log("Hello, World");
}

setTimeout(show, 3000);
*/

// or
/*
setTimeout(function(){
    console.log("Hello!")
}300);
*/

// Immeadiatly Invoked Function
/*
let string = "Hello World!";

(function(){
    let string = "Hello World!";
    console.log(string);
    alert(string);

})();
*/

// Object in Javascript
/*
let person = {
    firstName: 'Vruttik',
    // 'first Name': 'Vruttik', this is also executed
    lastName: 'Moragha'
};

console.log(person.firstName);// access with dot notation
console.log(person['firstName']);// access with array like notation
// console.log(person['first Name']); this is not applicable in dot notation
*/

// properties ke valuye ko modified karana our nayi property add karana 
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha'
};

person.age = 21; // new property adding
person.firstName = 'Aryan';
console.log(person);
*/

// properties ko delet karana
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha'
};

person.age = 21; 
person.firstName = 'Aryan';
delete person.lastName;// properties ko delete
console.log(person);
console.log('height' in person); // properties hai ya nahi ye check karana but this is true or false // in operater
*/
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha'
};

person.age = 21; 

for( let key in person){ // for in loop
    console.log(key + ": " +person[key]);

}
*/

// Methods in Object
// first tarika
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha'
};

person.age = 21; 
person.sayHello = function (){
    console.log("Hello !");
}
person.sayHello();
*/
// dusara tarika
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha'
};

person.age = 21; 
function greet(){
    console.log("Hello !");
}
person.sayHello = greet;
person.sayHello();
*/
// tisara tarika
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha',
    sayHello: function(){
        console.log("Hello !");
    }
};

person.age = 21; 

person.sayHello();
*/

// 4th tarika
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha',
    sayHello (){
        console.log("Hello !");
    }
};

person.age = 21; 

person.sayHello();
*/

// "this" in Object
/*
let person = {
    firstName: 'Vruttik',
    lastName: 'Moragha',
    sayHello (){
        console.log("Hello ! I "+ this.firstName +" and i have a "+ car.brand +" car"); // this = person
    }
};

let car = {
    brand: 'Tata',
    model: 'Safari'
} 

person.sayHello();
*/

// Math Object

//console.log(Math.PI);// pi value
//console.log(Math.E); // Eulers Value
/*
let x = Math.round(4.7);

console.log(x);
*/
/*
let x = Math.ceil(4.2);//upper limit dikhata hai

console.log(x);
*/
/*
var x= Math.floor(4.9); // lower limit

console.log(x)
*/
/*
let x = Math.trunc(4.9);//  point ko exclude karata hai

console.log(x);
*/
/*
let x = Math.pow(2, 3);// calculating power

console.log(x);
*/
/*
let x = Math.sqrt(4);//calculating sqaureroot of a number

console.log(x);
*/
/*
let x = Math.min(12, 45, 78, 100);// calculating minimum number

console.log(x);
*/
/*
let x = Math.max(34, -89, 67, 49, 98);

console.log(x);
*/

// Random Number
/*
let x = Math.random();// number between 0-1

console.log(x);
*/

//0 - 9
/*
let x = Math.floor(Math.random() * 10); // number between 0 - 9
console.log(x);
*/

// 0 - 10
/*
let x = Math.floor(Math.random() * 11); // number between 0 - 10

console.log(x);
*/

// 1 - 10
/*
let x = Math.floor(Math.random() * 10) + 1;

console.log(x);
*/

// Date Object
/*
let x = new Date();  present date 

document.write(x);
*/
/*
let x = new Date(2001, 8, 28, 6, 50, 45, 23);// minimum  two parameter required

document.write(x);
*/

// date in string fromate
/*
let x = new Date("Octomber 13, 2018 11:12:33");

document.write(x.getTime());// miliseconds
*/

/*
let x = new Date("Octomber 13, 2018 11:12:33");
//console.log(x.getFullYear());// get Year
//console.log(x.getMonth());// get month
//console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getMilliseconds());

*/

// 
/*
let x = new Date("Octomber 13, 2018 11:12:33");
let y = new Date("Octomber 13, 2018 11:12:33");

y.setDate(x.getDate() + 50);
console.log(x);
console.log(y);
*/
// comtare of Date
/*
let x = new Date("Octomber 13, 2018 11:12:33");
let y = new Date();

if(y > x){
    console.log("x is past date.");

}
else if (x > y ){
    console.log("x is a future Date.");
}
else{
    console.log("x is a same Date");
}
*/

// "new" keyword

//var person = {
//      name: "Vruttik",
//   age: 21,
// }
/*
    var person = new Object();
    person.name = "Vruttik Moragha";
    person.age = 21;

    console.log(person.name);

*/

// property getters and setters
// getter
/*
var person = {
    name: "Vruttik",
    age: 25,
    
    //getname: function(){
      //  return this.name.toUpperCase();
    //}

    get getname(){ // getter
        return this.name.toLocaleUpperCase();
    }
};

//console.log(person.getname());
console.log(person.getname);
*/

// setter
/*
var person = {
     name: "Vruttik",
     age: 21,

     set setname(n){
        this.name = n.toUpperCase();

     }
};

person.setname = "Vihan";
console.log(person);
*/

// Object Construction Function
/*
function Student(first, last, age, cls){
    this.firstName = first;
    this.LastName = last;
    this.age = age;
    this.class = cls;
} 

var student1 = new Student("Vruttik", "Moragha", 21, 12);


student1.nationality = "Indian"; // extra property added here.
console.log(student1);
student1.name = function(){
    return this.firstName + " " + this.LastName;
}

console.log(student1.name());
*/

// Object Prototypes
/*
function Student(first, last, age, cls){
    this.firstName = first;
    this.LastName = last;
    this.age = age;
    this.class = cls;
} 

Student.prototype.nationality = "Indian";

Student.prototype.name = function(){
    return this.firstName + " " + this.LastName;
}
var student1 = new Student("Vruttik", "Moragha", 21, 12);
var student2 = new Student("Vihan", "Dudheda", 6, 1);

console.log(student1.name());

*/

// Nested Object, object ke andar object
/*
var user = {
  id: 101,
email: "vruttikmorgha@gmail.com",
personalInfo: {
    name: "Vruttik",
    address: {
        street: "dsgsgs",
        city: "Jawhar",
        country: "india",

      } 
   }
};

console.log(user.personalInfo.address.country);// accesing properties

*/

// Hoisting
// " use strict"

// Document Object Model (DOM) = Ia sn application programming interface (AIP) for manipulating HTML and XML
// documents. (add, remove, and modify parts of the document/HTML)

// API = Application programming Interface



