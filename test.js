const assert = require('assert');

it('testing package working and should return true', () =>{
  assert.equal(true, true);
})

it('correctly calculates the sum of 1 and 3', () => {
  assert.equal(add(1, 3), 4);
})
