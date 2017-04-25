/*
Реализуйте и экспортируйте функцию has, которая проверяет, 
является ли переданное значение элементом списка.
Реализуйте и экспортируйте функцию reverse, которая переворачивает 
список используя итеративный процесс.
Реализуйте и экспортируйте функцию append, которая соединяет 
два списка используя рекурсивный процесс
*/

import { l, cons, head, tail, isEmpty, toString } from 'hexlet-pairs-data';
export const has = (list, num) => {
    if (isEmpty(list)) {
      return false;
    }
    else if (head(list) === num) {
      return true;
    }
    else {
      return has(tail(list), num);
    }
};
export const reverse = (list) => {
  let acc = l();
  const iter = (item, acc) => {
    if (isEmpty(item)) {
      return acc;
    }
    let headL = head(item);
    let tailL = tail(item);
    return iter(tailL, cons(headL, acc));
  };
  return iter(list, acc);
};
export const append = (list1, list2) => {
  if (isEmpty(list1)) {
    return list2;
  }

  return cons(head(list1), append(tail(list1), list2));

};