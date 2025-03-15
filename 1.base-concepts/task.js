"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if(discriminant == 0) {
    arr[0] = (- b / (2 * a));
  }
  if(discriminant > 0) {
    arr[0] = (- b + Math.sqrt(discriminant)) / (2 * a);
    arr[1] = (- b - Math.sqrt(discriminant)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthlyInterestRate = percent / 100 / 12;
  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (monthlyInterestRate + (monthlyInterestRate / ((Math.pow(1 + monthlyInterestRate, countMonths)) - 1)));
  let totalAmount = monthlyPayment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}