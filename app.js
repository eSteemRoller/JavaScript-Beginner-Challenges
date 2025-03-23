// Q1. Write a function that ***returns*** the sum of two numbers.
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 8

// Q2. Convert Hours into Seconds
function hoursIntoSeconds(hours) {
  return hours * 3600;
}
console.log(hoursIntoSeconds(2)); // 7200

// Q3. Calculate the Perimeter of a Rectangle
function findPerimeter(length, width) {
  return 2 * (length + width);
}
console.log(findPerimeter(6, 7)); // 26

// Q4. Calculate the Area of a Triangle
function findArea(base, height) {
  return 0.5 * base * height;
}
console.log(findArea(3, 2)); // 3

// Q5. Extend a String
function appendString(str1, str2) {
  return str1 + str2;
}
console.log(appendString(`Apple`, `Frontend`)); // AppleFrontend

// Q6. Sum Greater than 100?
function sumGreaterThan100(num1, num2) {
  return num1 + num2 > 100
}
console.log(sumGreaterThan100(20, 10)); // false

// Q7. Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
  return num <= 0;
}
console.log(lessThanOrEqualToZero(3)); // false

// Q8. What is the Opposite Boolean?
function oppositeBoolean(boolean) {
  return boolean === false;
}
console.log(oppositeBoolean(true)); // false

// Q9. Is Not Zero
function notZero(notZero) {
  return notZero !== 0;
}
console.log(notZero(5)); // true

// Q10. Calculate the Remainder
function calcRemainder(numerator, denominator) {
  return numerator % denominator;
}
console.log(calcRemainder(4, 2)); // 0

// Q11. Is the Number Odd?
function isOdd(oddOrEven) {
  return oddOrEven % 2 !== 0;
}
console.log(isOdd(1)); // true

// Q12. If the Number is Even, return 1, otherwise, return -1
function posOneOrNeg1(oneOrNeg1) {
  if (oneOrNeg1 % 2 === 0) {
    return 1;
  }
  else return -1;
}
console.log(posOneOrNeg1(1)); // -1

// Q12b. Alternative shorter syntax
function posOneOrNeg1b(oneOrNeg1b) {
  return oneOrNeg1b % 2 === 0 ? 1 : -1; // Truthy or Falsy boolean comparator
}
console.log(posOneOrNeg1b(2)); // 1
// See developer.mozilla.org/en-US/Docs/Glossary/Truthy

// Q13. Check If a User is Logged In and Subscribed
function userLogAndSubStatus (userLogStatus, userSubStatus) {
  return (userLogStatus === `LOGGED_IN`) && (userSubStatus === `SUBSCRIBED`);
}
console.log(userLogAndSubStatus(`LOGGED_IN`, `SUBSCRIBED`));

// Q14. Check If a User is Logged In or Subscribed
function userLogAndSubStatus (userLogStatus, userSubStatus) {
  return (userLogStatus === `LOGGED_IN`) || (userSubStatus === `SUBSCRIBED`);
}
console.log(userLogAndSubStatus(`LOGGED_IN`, `SUBSCRIBED`));

