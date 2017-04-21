import assert from 'assert';
import * as solution from './solution';

describe('isPowerOfThree', () => {
  it('should work', () => {
    assert(solution.isPowerOfThree(1));
    assert(!solution.isPowerOfThree(2));
    assert(solution.isPowerOfThree(3));
    assert(solution.isPowerOfThree(9));
    assert(!solution.isPowerOfThree(12));
    assert(solution.isPowerOfThree(27));
    assert(!solution.isPowerOfThree(28));
    assert(!solution.isPowerOfThree(90));
  });
});
