/*
Реализуйте и экспортируйте функцию toRna, 
которая принимает на вход цепь ДНК и 
возвращает соответствующую цепь РНК 
(совершает транскрипцию РНК).
*/
import * as strings from './strings';

export const toRna = (str) => {
  let result = '';
  for (let i = 0; i < strings.length(str); i++) {
    if (str[i] === 'G') {
      result += 'C';
    }
    else if (str[i] === 'C') {
      result += 'G';
    }
    else if (str[i] === 'T') {
      result += 'A';
    }
    else {
      result += 'U';
    }
  }
  return result;
};

/* Второй варинат
export const toRna = (n) => {
  let rna = '';
  for (let i = 0; i < strings.length(n); i++) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
    }
  }

  return rna;
};
*/