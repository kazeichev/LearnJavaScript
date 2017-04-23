/*
Палиндром — число, слово или текст, одинаково 
читающееся в обоих направлениях. Например: 
радар, топот.
*/
import * as strings from './strings';

const isPalindrome = (str) => {
  let newStr = '';
  for (let i = strings.length(str)-1; i >= 0; i--) {
    newStr += str[i];
  }
  if (str === newStr) {
    return true;
  }
  else {
    return false;
  }
};
export default isPalindrome;

/* -- Второй вариант с рекурсией
const isPalindrome = (string) => {
  if (strings.length(string) <= 1) {
    return true;
  }
  if (string[0] !== string[strings.length(string) - 1]) {
    return false;
  }

  return isPalindrome(strings.substr(string, 1, strings.length(string) - 2));
};

export default isPalindrome;
*/