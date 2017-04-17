import solution from '../solution';

test('solution', () => {
  expect(solution('hello, world!')).toBe('Hello, World!');
  expect(solution('  hello,   world!')).toBe('  Hello,   World!');
  expect(solution(' many different words inside sentence')).toBe(' Many Different Words Inside Sentence');
});
