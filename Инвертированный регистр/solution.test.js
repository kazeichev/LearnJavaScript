import * as solution from '../solution';

describe('InvertCase', () => {
  it('should work', () => {
    expect(solution.invertCase('Hello, World!')).toBe('hELLO, wORLD!');
    expect(solution.invertCase('I loVe JS')).toBe('i LOvE js');
  });
});
