/*
Реализуйте и экспортируйте функцию invertCase, 
которая меняет в строке регистр каждой буквы 
на противоположный.
*/

import * as strings from './strings';

export const invertCase = (str) => {
  let result = '';
  for(let i = 0; i < strings.length(str); i++) {
    if (strings.toUpperCase(str[i]) == str[i]) {
      result += strings.toLowerCase(str[i]);
    }
    else if (strings.toLowerCase(str[i]) == str[i]) {
      result += strings.toUpperCase(str[i]);
    }
    else {
      result += str[i];
    }
  }
  return result;
};