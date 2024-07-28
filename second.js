                 ////////////////////////// OPERATORS AND CONDITIONAL STATEMENTS ////////////////////////////
//==========>>>>> Comments in J.S
//========>>>>>>>> Single Line Comment
// This is a single lne comment

//=========>>>>> Multi Line Commet
/* This is multi - line comment
Used for Multi line sentences
*/

//=========>>>>>>>> OPERATORS
//===========================>>>> Arithmetic Operators (2 Operands work)
//========>>>>> Addition , Sub , Multi , Div , Modulus , Exponentiation
let a = 10
let b = 5
console.log("a" , a + b);
console.log("a" , a - b);
console.log("a" , a * b);
console.log("a" , a / b);
console.log("a" , a % b);
console.log("a" , a ** b);

//==========>>>>>>>>>>>>>>>> Unary Operators (1 Operand Work)
//=======>>>>> Increment Operator
let c = 9
c++
console.log(c); // 10

//=======>>>>> Decrement Operator
let d = 9
d--
console.log(d); // 8

//=======>>>>> Post Increment
let e = 12
console.log("e = ", e++); // 12
console.log("e =" , e); // 13

//=======>>>>> Pre Increment
let f = 15
console.log("f =" , ++f); // 16
console.log("f =" , f); // 16

//=======>>>>> Post Decrement
let g = 20
console.log("g = ", g--); // 20
console.log("g =" , g); // 19

//=======>>>>> Pre Decrement
let h = 30
console.log("h =" , --h); // 29
console.log("h =" , h); // 29

//=====================>>>>>>>>> Assignment Operator
//==========>>>>>>> = , += , -= , *= , /= , %= , **=
let assignmentOperator = 20 
console.log(assignmentOperator); // 20 
console.log(assignmentOperator += 5); // 25
console.log(assignmentOperator -= 10);// 15
console.log(assignmentOperator *= 2); // 30
console.log(assignmentOperator /= 2);// 15
console.log(assignmentOperator %= 2); // 1
console.log(assignmentOperator **= 5); // 1^ 5 = 1

//==================>>>>>>>> Comparision Operator (Return : Boolean Values)
//==============>>>>> == , ==== , != , !== , > , >= , < , <=
let Comparision1 = 12
let Comparision2 = 13
console.log(Comparision1 == Comparision2); // false
console.log(Comparision1 != Comparision2); // true
console.log(Comparision1 > Comparision2); // false
console.log(Comparision1 >= Comparision2); // false
console.log(Comparision1 < Comparision2); // true
console.log(Comparision1 <= Comparision2); // true

let Comparision3 = 13
let Comparision4 = "14"
console.log(Comparision1 === Comparision2); // false
console.log(Comparision3 !== Comparision4); // true

//==================>>>>>>>>>> Logical Operator (Return : Boolean)
//============>>>>> AND , OR , NOT (&& , || , !)
let logicalOperator1 = 14
let logicalOperator2 = 15
let logicalOperator3 = 25
let logicalOperator4 = 30
console.log(logicalOperator1 > logicalOperator2 && logicalOperator3 < logicalOperator4); // false
console.log(logicalOperator1 > logicalOperator2 || logicalOperator3 < logicalOperator4); // true
console.log(!(logicalOperator1 < logicalOperator2)); // false

//============================>>>>>>>>>> Conditional Statements
//===============>>>>>> 3 Types of Conditional Statements
let mode = "light"
let color;
if (mode === "dark") {
    color = "Black"
    console.log(color);
}else if (mode === "light") {
    color = "White"
    console.log(color);
}else if (mode === "average") {
    color = "blue"
    console.log(color);
}else {
    console.log("Invalid Color")
}

//==========================>>>>>> Ternary Operator
let age = 18
let result = age = 18 ? "Can Vote" : "Cannot Vote"
console.log(result);

//====================>>>>>>>>>> Switch Statement
let dayOff = "Monday"
switch (dayOff) {
    case "Saturday":
    console.log("Go for Webinar");
    break;
    case "Sunday":
    console.log("Go for Picnic");
    break;
    case "Monday":
    console.log("Go for College");
    break;
    default:
    console.log("Not go anywhere")
}

//==============>>>>> Checking Odd and Even Numbers
let oddEven = 63
if (oddEven % 2 === 0) {
    console.log("This is a Even Number")
}else {
    console.log("This is a Odd Number")
}

//=====================>>>>>>>>>> PRACTICE QUESTIONS ========================>>>>>>>>>//
let number = prompt("Enter a Number")
if (number % 3 === 0) {
    console.log(number , "is a multiple of 3")
}else {
    console.log(number , "is not a multiple of 3")
}

//============>>>>>>>>> Write a code which can give grades to students according to their grades
/*
90 - 100 => A
70 - 89 => B
60 - 69 => C
50 - 59 => D
0 - 49 => F */

let score = prompt("Enter Your Score (0-100)")
if( score >= 90 && score <=100 ) {
    console.log("Grade A");
}else if (score >= 70 && score <=89) {
    console.log("Grade B");
}else if(score >= 60 && score <=69) {
    console.log("Grade C");
}else if(score >= 50 && score <=59) {
    console.log("Grade D");
}else {
    console.log("Fail!!")
}
