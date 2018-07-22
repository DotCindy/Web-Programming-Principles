/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Cindy Le           Student ID: 111657151              Date: Jan 22, 2018
*
********************************************************************************/

/*****************************
* Task 1
*****************************/
var studentName = "Cindy Le";
var numberOfCourses = 4;
var program = "CPA";
console.log("My name is " + studentName +
            " and I'm in " + program +
            " program. I'm taking " + numberOfCourses +
            " course in this semester.");

var partTimeJob = false;
if (partTimeJob == true) {
  partTimeJob = "have";
} else {
  partTimeJob = "don't have";
}
console.log("My name is " + studentName +
            " and I'm in " + program +
            " program. I'm taking " + numberOfCourses +
            " course in this semester and I " + partTimeJob +
            " a part-time job now.");
/*****************************
* Task 2
*****************************/
var currentYear = 2018;
var age = prompt("Please enter your age:");
var birthYear = currentYear - age;
console.log("You were born in the year of " + birthYear);

var num = prompt("Enter the number of years you expect to study in the college:");
var studyYear = parseInt(num);
var graduateYear = currentYear + studyYear;
console.log("You will graduate from Seneca college in the year of " + graduateYear);
/*****************************
* Task 3
*****************************/
var c = 100;
var f = c * (9/5) + 32;
console.log(c + " °C is " + parseInt(f) + " °F");

f = 100;
c = (f - 32) * (5/9);
console.log(f + " °F is " + parseInt(c) + " °C");
/*****************************
* Task 4
*****************************/
for (var x = 0; x <= 10; x++) {
  var remainder = x % 2;
  if (remainder == 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}
/*****************************
* Task 5
*****************************/
for (var i = 0; i < 2; i++) {
  var num1 = prompt("(declaration) Enter the first number: ");
  var num2 = prompt("(declaration) Enter the second number: ");
  var x = parseInt(num1);
  var y = parseInt(num2);
  
  function largerNum() {  
    if (x > y) {
      return x;
    } else {
      return y;
    }
  }
  console.log("The larger number of " + x +
              " and " + y +
              " is " + largerNum(x, y));
}

for (var i = 0; i < 2; i++) {
  var num3 = prompt("(expression) Enter the first number: ");
  var num4 = prompt("(expression) Enter the second number: ");
  var a = parseInt(num3);
  var b = parseInt(num4);
  
  var greaterNum = function() {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  console.log("The larger number of " + a +
              " and " + b +
              " is " + greaterNum(a, b));
}
/*****************************
* Task 6
*****************************/
for (var i = 0; i < 3; i++) {
  var array = [];
  array[0] = [100, 200, 300];
  array[1] = [100, 200, 300];
  array[2] = [50, 50, 50];
    
  function Evaluator() {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
      avg = sum / array.length;
    }
    if (avg >= 50) {
      return true;
    } else {
      return false;
    }
  }
  console.log("Average greater than or equal to 50: " + Evaluator(array[i]));
}
/*****************************
* Task 7
*****************************/
for (var i = 0; i < 3; i++) {
  var grade = prompt("Enter grade:");

  var Grader = function(grade) {
    if(grade >= 90 && grade <= 100) {
        return "A+";
    } else if(grade >= 80 && grade <= 89) {
        return "A";
    } else if(grade >= 75 && grade <= 79) {
        return "B+";
    } else if(grade >= 70 && grade <= 74) {
        return "B";
    } else if(grade >= 65 && grade <= 69) {
        return "C+";
    } else if(grade >= 60 && grade <= 64) {
        return "C";
    } else if(grade >= 55 && grade <= 59) {
        return "D+";
    } else if(grade >= 50 && grade <= 54) {
        return "D";
    } else
        return "F";
  };
  console.log("A grade of " + grade + " is a(n) " + Grader(grade));
}
/*****************************
* Task 8
*****************************/
for (i = 0; i < 3; i++) {
  var num = prompt("Enter number");
  var numMultiples = prompt("Enter multiples");
  
  function showMultiplier(num, numMultiples) {
    var text = "";
    
    for (var i = 1; i <= numMultiples; i++) {
      var sum = num * i;
      text += num + " x " + i + " = " + sum + "\n";
    }
    return text;
  }
  console.log(showMultiplier(num, numMultiples));
}
