/*
Реализуйте и экспортируйте функцию reduce для библиотеки html-tags.
Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. 
Тип тега задается первым параметром функции.
*/
import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { value, is, toString } from 'hexlet-html-tags';

export const reduce = (func, acc, tag) => {
  const iter = (elem, acc) => {
    if (isEmpty(elem)) return acc;
    return iter(tail(elem), func(head(elem), acc));
  };
  return iter(tag, 0);
};
export const emptyTagsCount = (tagName, elements) => {
  return reduce((element, acc) => 
    is(tagName, element) && value(element) === '' ? acc + 1 : acc,
    0, elements);
};

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};

/*
---- Второй вариант ----
export const reduce = (func, acc, elements) => {
  const iter = (items, result) => {
    if (isEmpty(items)) {
      return result;
    }

    return iter(tail(items), func(head(items), result));
  };
  return iter(elements, acc);
};

export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};
*/
