import { calc } from '../solution';

test('solution', () => {
  expect(calc('+', 0, 0)).toBe(0);
  expect(calc('*', 0, 0)).toBe(0);
  expect(calc('*', 1, 1)).toBe(1);
  expect(calc('+', 9, 1)).toBe(10);
  expect(calc('-', 3, 5)).toBe(-2);
  expect(calc('/', 10, 5)).toBe(2);
});

expect(Number.isNaN(calc('&', -10, 8))).toBeTruthy();
expect(Number.isNaN(calc('#', 9, 1))).toBeTruthy();
