/*Реализуйте и экспортируйте функцию
 isPrime определяющую, является ли число простым. */
export const isPrime = num => {
  if (num < 2) {
    return false;
  }

  let i = 2;

  while (i <= num / 2) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }

  return true;
};

/*Второй вариант 
export const isPrime = (n) => {
  if(n < 2) {
    return false;
  }
  for(let i=2; i*i<=n; i++) {
    if(n%i===0) {
      return false;
    }
    
  }  
  return true;
  
};
*/