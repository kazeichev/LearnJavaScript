import { sequenceSum } from '../solution';

test('solution', () => {
  expect(sequenceSum(1, 1, 1)).toBe(1);
  expect(sequenceSum(2, 1, 2)).toBe(0);
  expect(sequenceSum(1, 5, 1)).toBe(15);
  expect(sequenceSum(1, 5, 3)).toBe(5);
  expect(sequenceSum(2, 6, 2)).toBe(12);
});