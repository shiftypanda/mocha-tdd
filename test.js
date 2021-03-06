const operations = require('./operations.js');
const assert = require('assert');

it('testing package working and should return true', () =>{
  assert.equal(true, true);
})
// Checks calculation functions of operations.js
it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4);
})

it('correctly calcultes the sum of -1 and -1', () => {
  assert.equal(operations.add(-1, -1), -2);
})

it('correctly calcultes the difference of 33 and 3', () => {
  assert.equal(operations.subtract(33, 3), 30);
})

it('correctly calculates the product of 12 and 12', () => {
  assert.equal(operations.multiply(12, 12), 144);
})

it('correclty calcualtes the quotient of 10 and 2', () => {
  assert.equal(operations.divide(10, 2), 5);
})

// checks validation tehniques within operations.js
it('indicates failure whena  string is used instead of a number', () => {
  assert.equal(operations.validateNumbers('sammy', 5), false);
})

it('indicates failure when two strings are used instead of numbers', () => {
  assert.equal(operations.validateNumbers('sammy', 'dave'), false);
})

it('succesfuly runs when two numbers are used', () => {
  assert.equal(operations.validateNumbers(5, 5), true);
})
