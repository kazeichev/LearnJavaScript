import { greaterThan, lessThan } from '../solution';

test('solution', () => {
  expect(greaterThan('AD', 'ad sd')).toBeTruthy();
  expect(greaterThan('AD', 'Ad sd')).toBeFalsy();
  expect(greaterThan('az', 'ad')).toBeFalsy();
  expect(greaterThan('ASDF', 'QWER')).toBeFalsy();
  expect(lessThan('ghe df', 'dfwe r D')).toBeTruthy();
  expect(lessThan('az', 'ad')).toBeFalsy();
  expect(lessThan('ASDF', 'QWER')).toBeFalsy();
});
