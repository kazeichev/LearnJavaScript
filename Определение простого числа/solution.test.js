import { isPrime } from '../solution';

test('not prime', () => {
  expect(isPrime(-3)).toBeFalsy();
  expect(isPrime(0)).toBeFalsy();
  expect(isPrime(-1)).toBeFalsy();
  expect(isPrime(1)).toBeFalsy();
  expect(isPrime(4)).toBeFalsy();
  expect(isPrime(21)).toBeFalsy();
  expect(isPrime(-10)).toBeFalsy();
});

test('prime', () => {
  expect(isPrime(2)).toBeTruthy();
  expect(isPrime(3)).toBeTruthy();
  expect(isPrime(17)).toBeTruthy();
});