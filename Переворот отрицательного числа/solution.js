/*
Реализуйте и экспортируйте функцию reverseInt, 
которая переворачивает цифры в переданном 
числе и возвращает новое число.
*/
import * as strings from './strings';

// BEGIN (write your solution here)
export const reverseInt = (n) => {
  let totalNum = '';
  const numStr = String(n);
  if (numStr[0] === '-') {
    totalNum = '-';
  }
  for (let i = strings.length(numStr) - 1; i >= 0; i--) {
    totalNum += numStr[i];
  }
 
  totalNum = Number(totalNum.substr(0, strings.length(numStr)));
  return totalNum;
};