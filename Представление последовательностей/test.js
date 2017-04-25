import assert from 'assert';
import { l, toString } from 'hexlet-pairs-data';
import { has, reverse, append } from './solution';

describe('Data', () => {
  it('#has', () => {
    const numbers = l(3, 4, 5, 8);
    assert.ok(has(numbers, 3));
    assert.ok(has(numbers, 8));
    assert.ok(!has(numbers, 0));
    assert.ok(!has(numbers, 7));
  });

  it('#reverse', () => {
    const numbers = l(3, 4, 5);
    assert.equal(toString(reverse(numbers)), '(5, 4, 3)');
  });

  it('#append', () => {
    const numbers = l(3, 4, 5, 8);
    const numbers2 = l(3, 2, 9);
    assert.equal(toString(append(numbers, numbers2)), '(3, 4, 5, 8, 3, 2, 9)');
  });
});