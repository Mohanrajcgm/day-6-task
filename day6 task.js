


alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working
Answer:
//  Fix the below to alert Guvi geek
 
var admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"
   
// answer:
var admin1=9, fname1=10.5; 
fname1 = "Guvi";
lname1 = "geek"
admin1 = fname1+ " " +lname1;
alert(admin); // "Guvi geek"

// *)  Fix the below to alert hello Guvi geek

var fname2=10.5; 
fname2 = "Guvi";
lname = "geek"
var name = fname+lname;
alert( 'hello ${name}' );

// answer:
var fname=10.5; 
fname = "Guvi";
lname = "geek"
alert( `hello ${fname} ${lname}`);


// *) Fix the below to alert sum of two numbers

var a = prompt("First number?");
var b = prompt("Second number?");
alert(a + b);

// answer:
var a = prompt("First number?");
var b = prompt("Second number?");
alert(parseInt(a) + parseInt(b));


var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

// answer: If we used to compare the number withinn string that takes the value as true.
// So, that output as "Code is Blasted". Suppose, we want "Diffused" as output we need to compare the numbers only without using string.

var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

// *) How to get the success in console.
var a = prompt("Enter a number?");
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );}

// answer: 
var a = false;
//Don't modify any code below this
if (a) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}

// *) How to get the correct score in console.
var value = prompt('How many runs you scored in this ball');
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");}

// answer:
var value = prompt('How many runs you scored in this ball');
if (value == 4) {
      console.log("You hit a Four");
} else if (value == 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

// *) Fix the code to welcome the Employee

// var login = 'Employee';
// var message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// answer:
var login = 'Employee';
var message = (login == 'Employee') ? 'Greetings' :'No login';
console.log(message);

// *) Fix the code to welcome the boss
// You cant change the value of the msg
var message;
if (null || 2 || undefined )
{
 var message = "welcome boss";
}
else
{
 var message = "Go away";
}
  console.log(message);


// answer:
var message;
if (null || 2 || undefined )
{
  message = "welcome boss";
}
else
{
  message = "Go away";
}
  console.log(message);


// *) Fix the code to welcome the boss

var message;
var lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

//  answer:
var message;
var lock = false;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);

// *) Fix the code to welcome the boss
var message;
var lock = 2;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);

answer:
var message;
var lock = null;
//Dont change any code below this
if (lock && " " || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
console.log(message);


// *) Change the code to print 3 2 1

// You can change only 2 characters
var i = 3;
while (i) {
  console.log( --i );
}

answer:
// You can change only 2 characters
var i = 3;
while (i) {
console.log( i-- );
     }

// *)Change the code to print 1 to 10 in 4 lines
var num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)

answer
for(var i=1;i<=10;i++){
    console.log(i);
}

// *) Change the code to print even numbers
// You are allowed to modify only one character 
for (var num = 2; num <= 20; num += 1) {
    console.log(num)
  }

answer:
// You are allowed to modify only one character 
for (var num = 2; num <= 20; num += 2) {
    console.log(num)
  }

// *) Change the code to print all the gifts

var gifts = ["teddy bear", "drone", "doll"];
for (var i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

answer:
var gifts = ["teddy bear", "drone", "doll"];
for (var i = 0; i < 3; i++) {
  console.log(` ${gifts[i]}`);
}


// *) Fix the code to disarm the bomb.
var countdown = 100;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

answer:
var countdown = 100;
while (countdown > 0) {
  if(countdown == 0 || countdown==100)
  {
   console.log("bomb triggered");
  }
  else{
      console.log("disarm the bomb")
  }
  countdown--;
}


//*) Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);
