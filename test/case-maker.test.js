const chai = require('chai');
const assert = chai.assert;
// const assert = require('chai').assert;
// const { assert } = require('chai');
const camelCase = require('../case-maker');

describe('case-maker tests', () => {
  it('returns "thisIsAString" given "this is a string"', () => {
    const expected = "thisIsAString";
    const testInput = "this is a string";
    const result = camelCase(testInput);
    assert.equal(result, expected);
  });

  it('returns "loopyLighthouse" given "loopy lighthouse"', () => {
    const expected = "loopyLighthouse";
    const testInput = "loopy lighthouse";
    const result = camelCase(testInput);
    assert.equal(result, expected);
  });

  it('returns "supercalifragalisticexpialidocious" given "supercalifragalisticexpialidocious"', () => {
    const expected = "supercalifragalisticexpialidocious";
    const testInput = "supercalifragalIsticexpialidocious";
    const result = camelCase(testInput);
    assert.equal(result, expected);
  });
});
