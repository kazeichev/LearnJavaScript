/*
Реализуйте функцию map для библиотеки html-tags используя итеративный 
процесс (на рекурсии).
Реализуйте функцию mirror, которая переворачивает содержимое тегов, так чтобы 
читать его нужно было справа налево, а не слева направо.
*/
import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { name, value, node, is } from 'hexlet-html-tags';
import { reverse as reverseStr } from './strings';

export const map = (func, elements) => {
  const iter = (elem, acc) => {
    if (isEmpty(elem)) {
      return reverse(acc);
    }
    return iter(tail(elem), cons(func(head(elem)), acc));
  };
  return iter(elements, l());
};

export const mirror = (tag) => {
  return map(tags => node(name(tags), reverseStr(value(tags))), tag);
};

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};