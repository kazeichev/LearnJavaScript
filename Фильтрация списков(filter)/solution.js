/*
Реализуйте функцию filter для библиотеки html-tags, 
используя итеративный процесс.
Реализуйте функцию quotes, которая извлекает из html тексты цитат и 
возвращает список цитат.
*/
import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { value, is, toString, map } from 'hexlet-html-tags';

export const filter = (func, element) => {
  const iter = (elem, acc) => {
    if (isEmpty(elem)) {
      return reverse(acc);
    }
    if (func(head(elem))) {
      return iter(tail(elem), cons(head(elem), acc));
    }
    else {
      return iter(tail(elem), acc);
    }
  };
  return iter(element, l());
};
export const quotes = (tag) => {
  const newFilter = filter(element => is('blockquote', element), tag);
  return map(element => value(element), newFilter);
};