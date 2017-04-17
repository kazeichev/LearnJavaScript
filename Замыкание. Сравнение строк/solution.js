/*
Функции lessThan и greaterThan в модуле solution 
сравнивают две строки и возвращают true/false. 
Сравнение идет по количеству заглавных символов в строке 
(больше заглавных — больше строка).
Специальные символы (например, пробел) не имеют заглавных эквивалентов,
 и в данном задании считаются заглавными.
*/
import * as strings from './strings';

const bigLettersCount = (str) => {
  let checkOfLetter = 0;
  let lenghtStr = strings.length(str);
  for(let i = 0; i < lenghtStr; i++) {
    if(strings.toUpperCase(str[i]) === str[i]) {
      checkOfLetter++;
    }
  }
  return checkOfLetter;
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if(firstCount > secondCount){
    return 1;
  }
  else if(firstCount < secondCount) {
    return -1;
  }
  else {
    return 0;
  }
 };

export const greaterThan = (first, second) => {
  return compare(first, second) === 1;
};

export const lessThan = (first, second) => {
  return compare(first, second) === -1;
};

