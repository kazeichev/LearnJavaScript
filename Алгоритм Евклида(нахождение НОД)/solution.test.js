import gcd from '../solution';

test('gcd', () => {
  expect(gcd(2, 2)).toBe(2);
  expect(gcd(11, 2)).toBe(1);
  expect(gcd(2, 3)).toBe(1);
  expect(gcd(6, 3)).toBe(3);
  expect(gcd(14, 21)).toBe(7);
  expect(gcd(100, 10)).toBe(10);
  expect(gcd(50, 20)).toBe(10);
});
