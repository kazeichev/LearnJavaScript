/*
Реализуйте и экспортируйте 
функцию reverse, которая переворачивает строку.
*/
import * as strings from './strings';


export const reverse = (getStr) => {
  let newStr = "";
  for(let i=strings.length(getStr)-1; i >= 0; i--) {
    newStr += getStr[i];
    console.log(i, newStr);
  }
  return newStr;