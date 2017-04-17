/*
Реализуйте и экспортируйте рекурсивную функцию 
smallestDivisor используя итеративный процесс. 
Функция должна находить минимальный делитель переданного числа.
*/
export const smallestDivisor = (num) => {
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    if (num % acc === 0) {
      return acc;
    }
    return iter(acc + 1);
  };

  return iter(2);
};