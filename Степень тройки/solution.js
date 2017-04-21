/*
Реализуйте и экспортируйте функцию isPowerOfThree 
которая определяет, является ли переданное 
число натуральной степенью тройки. 
Например число 27 это третья степень 
(3^3), а 81 это четвертая (3^4).
*/
export const isPowerOfThree = (n) => {
  if(n === 1) {
    return true;
  }
  let result = n / 3;
  if(result === 1) {
    return true;
  }
  else if (result >= 3) {
    return isPowerOfThree(result);
  }
  else {
    return false;
  }
};

/*Второй вариант
export const isPowerOfThree = (num) => {
  let current = 1;
  while (current <= num) {
    if (current === num) {
      return true;
    }
    current *= 3;
  }

  return false;
};
*/