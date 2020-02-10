// const assertEqual = require('../our-assert');
const assert = require('assert');

describe('what is under test', () => {
  it('should do something', () => {
    const a = 'blue';
    const b = 'blue';
    // console.log(assert);
    assert.strictEqual(a, b);
  });
});
