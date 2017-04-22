/*
Реализуйте и экспортируйте функцию happyNumber, 
которая должна вернуть true, если число счастливое, 
и false, если нет. Количество итераций процесса 
поиска необходимо ограничить числом 10.
*/
import * as strings from './strings';

const sumDigits = (num) => {
  const numAsStr = String(num);
  let sum = 0;
  for (let i = 0; i < strings.length(numAsStr); i += 1) {
    const digit = Number(numAsStr[i]);
    sum += digit * digit;
  }

  return sum;
};

export const happyNumber = (n) => {
  let result = n;
  for (let i = 0; i <= 10; i++) {
    result = sumDigits(result);
    console.log(result);
  }
  if (result === 1) {
    return true;
  }
  return false;
};