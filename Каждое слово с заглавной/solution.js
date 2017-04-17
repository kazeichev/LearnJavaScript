/*
Реализуйте и экспортируйте по умолчанию функцию, 
которая делает заглавной первую букву 
каждого слова в предложении.
*/
import * as strings from './strings';

const solution = (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i++) {
    if (str[i - 1] === ' ' || i === 0) {
      result += strings.toUpperCase(str[i]);
    }
    else {
      result += str[i];
    }
    
  }
  return result;

};
export default solution;