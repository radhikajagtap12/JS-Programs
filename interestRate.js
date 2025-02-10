function interestRate(amount, interestRate, year) {
  let interest = (amount * interestRate * year) / 100;
  return interest;
}

console.log(interestRate(20000, 10, 5));
