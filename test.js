const operations = require('./operations.js');
const assert = require('assert');

it('testing package working and should return true', () =>{
  assert.equal(true, true);
})

it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(operations.add(1, 3), 4);
})

it('correctly calcultes the sum of -1 and -1', () => {
  assert.equal(operations.add(-1, -1), -2);
})
