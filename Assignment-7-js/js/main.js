// 1

// var number = Number(window.prompt('enter your Number')); // input is 5
// console.log(number); // the output is 5


///////////////////////////////////////////////

// 2

// var number = Number(window.prompt('enter your number'))

// if (number % 3 == 0 && number % 4 == 0 ) {
//   console.log('Yes') // * input is 12 and the output is yes coz i can divide it with both of (3,4)
// }else {
//   console.log('No') // * input is 9 and the output is no but here i can't divide it with both of them
// }


////////////////////////////////////////////////

//3

// var num1 = Number(window.prompt('enter your first number'))
// var num2 = Number(window.prompt('enter your second number'))


// if (num1 > num2) {
//   console.log(num1)
// }else {
//   console.log(num2)
// }


//////////////////////////////////////////////////

//4

// var number = Number(window.prompt('enter your number'))

// if (number >= 0 ) {
//   console.log('positive')
// }else {
//   console.log('negative')
// }




///////////////////////////////////////////////////

//5

// var num1 = Number(window.prompt('enter your number'))
// var num2 = Number(window.prompt('enter your number'))
// var num3 = Number(window.prompt('enter your number'))

// // max
// if (num1 > num2 && num1 > num3) {
//   console.log(num1)
// } else if (num2 > num1 && num2 > num3) {
//   console.log(num2)
// } else {
//   console.log(num3)
// }
// //min
// if (num1 < num2 && num1 < num3) {
//   console.log(num1)
// } else if (num2 < num1 && num2 < num3) {
//   console.log(num2)
// } else {
//   console.log(num3)
// }




////////////////////////////////////////////////////

//6

// var number = Number(window.prompt('enter your number'))


// if (number % 2 === 0) {
//   console.log('Even')
// }else {
//   console.log('Odd')
// }


/////////////////////////////////////////////////////


//7

// var character = window.prompt('enter your character')

// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//   console.log('vowel')
// }else {
//   console.log('Consonant')
// }


///////////////////////////////////////////////////////

//8 

// var number = Number(window.prompt('enter your number'))

// for(var i = 1; i <= number;i++) {
//   console.log(i);
// }


///////////////////////////////////////////////////////

//9

// var number = Number(window.prompt('enter your number'))

// for(var i = 1; i <= 12;i++) {
//  console.log(number * i)
// }


////////////////////////////////////////////////////////


// 10

// var number = Number(window.prompt('enter your number'));

// for(var i = 1; i <= number;i++) {
//  if (i % 2 == 0) {
//   console.log(i);
//  }
// }


//11 

// var num1 = Number(window.prompt('enter your number'));
// var num2= Number(window.prompt('enter your number'));
// var sum = 1;

// for(var i = 1; i <= num2;i++) {
//  sum *= num1
// }

// console.log(sum);

//////////////////////////////////////////////////////////

//12 

// var num1 = Number(window.prompt('enter your number'));
// var num2 = Number(window.prompt('enter your number'));
// var num3 = Number(window.prompt('enter your number'));
// var num4 = Number(window.prompt('enter your number'));
// var num5 = Number(window.prompt('enter your number'));

// var totalMarks = (num1 + num2 +num3 + num4 + num5);
// var averageMarks = totalMarks / 5;
// var Percentage = averageMarks;

// console.log(totalMarks)
// console.log(averageMarks)
// console.log(Percentage)

/////////////////////////////////////////////////////////////
//13

// var monthNumber =  Number(window.prompt('enter your number'));;

// if(monthNumber === 1|| monthNumber === 3||monthNumber === 5||monthNumber === 7||monthNumber === 8||monthNumber === 10||monthNumber === 12) {
  //   console.log('days in month: ' + 31);
  // } else if (monthNumber === 4|| monthNumber === 6||monthNumber === 9||monthNumber === 11) {
    //   console.log('days in month: ' + 30);
    // } else {
      //   console.log('days in month: ' + 29);
// }

// * other way to create it
////////////////////////////



///////////////////////////////////////////////////////////
//14

// var physics = window.prompt("Enter marks for Physics");
// var chemistry = window.prompt("Enter marks for Chemistry");
// var biology = window.prompt("Enter marks for Biology");
// var mathematics = window.prompt("Enter marks for Mathematics");
// var computer = window.prompt("Enter marks for Computer");

// var total = physics + chemistry + biology + mathematics + computer;
// var percentage = (total / 500) * 100;

// var grade;
// if (percentage >= 90) {
//     grade = 'A';
// } else if (percentage >= 80) {
//     grade = 'B';
// } else if (percentage >= 70) {
//     grade = 'C';
// } else if (percentage >= 60) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }
// console.log(`Total marks: ${total}`);
// console.log(`Percentage: ${percentage}%`);
// console.log(`Grade: ${grade}`);

///////////////////////////////////////////////////////////////
//15

// switch (monthNumber) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log('days in month: ' + 31);
//   break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log('days in month: ' + 30);
//   break;
//   case 2:
//     console.log('days in month: ' + 29)
//   break;
// }

//////////////////////////////////////////////////////////////  
//16

// var character = window.prompt('enter your character')

// switch(character) {
//   case 'a':
//   case 'i':
//   case 'e':
//   case 'u':
//   case 'o':
//     console.log('vowel')
//   break;
//   default:
//     console.log('consonant')
//   break;
// }

////////////////////////////////////////////////////////////

//17

// var num1 = Number(window.prompt('enter first number'))
// var num2 = Number(window.prompt('enter secondnumber'));

// switch(true) {
//   case (num1 > num2):
//     console.log(num1);
//   break;
//   case (num2 > num1):
//     console.log(num2)
//   break;
// }

//////////////////////////////////////////////////////////

//18

// var number = Number(window.prompt('enter number'));

// switch(true) {
//   case (number % 2 === 0):
//     console.log('Even')
//   break;
//   case (number % 2 !== 0):
//     console.log('Odd');
//   break;
// }




/////////////////////////////////////////////////////////
//19

// var number = Number(window.prompt('enter number'));


// switch(true) {
//   case (number > 0):
//     console.log('positive');
//   break;
//   case (number === 0):
//     console.log('Zero');
//   break;
//   case (number < 0):
//     console.log('negative');
//   break;
// }


///////////////////////////////////////////////////////////

///20
// var num1 = Number(window.prompt('enter number'));
// var num2 = Number(window.prompt('enter number'));
// var operator = window.prompt('enter your operator');

// switch(operator) {
//   case '+':
//     console.log(num1 + num2)
//   break;
//   case '-':
//     console.log(num1 - num2)
//   break;
//   case '*':
//     console.log(num1 * num2)
//   break;
//   case '/':
//     console.log(num1 / num2)
//   break;
//   case '%':
//     console.log(num1 % num2)
//   break;
// }

var userName = document.getElementById("firstName");
var demo = document.getElementById('demo')



function sayhello() {
  var result = 'hello ' + userName.value;  
  demo.innerHTML = result
}