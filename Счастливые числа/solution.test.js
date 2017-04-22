import * as solution from '../solution';

describe('happyNumber', () => {
  it('should work', () => {
    expect(solution.happyNumber(1)).toBe(true);
    expect(solution.happyNumber(7)).toBe(true);
    expect(solution.happyNumber(13)).toBe(true);
    expect(solution.happyNumber(0)).toBe(false);
    expect(solution.happyNumber(2)).toBe(false);
    expect(solution.happyNumber(90)).toBe(false);
  });
});