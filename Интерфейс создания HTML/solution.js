/*
Реализуйте базовый интерфейс для создания html. 
Он включает в себя следующие функции:
	make - конструктор.
	node - создает новый тег. Содержит два элемента, 
	имя тега и его содержимое.
	append - добавляет элемент в список.
	toString - возвращает текстовое представление html
*/
import { cons, car, cdr } from 'hexlet-pairs';
import { l, isEmpty, head, tail, cons as consList } from 'hexlet-pairs-data';

export const make = () => l();
export const node = (tag, value) => {
  return cons(tag, value);
};
export const append = (elem1, elem2) => {
  return consList(elem2, elem1);
};
export const toString = (dom) => {
  const iter = (current, acc) => {
    if (isEmpty(current)) return acc;
    return iter(tail(current), `<${car(head(current))}>${cdr(head(current))}</${car(head(current))}>`) + acc;
  };
  
  return iter(dom, '');
};



/*
-------------
Второй вариант
-------------

export const make = () => l();
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

const name = element => car(element);
const value = element => cdr(element);

export const toString = elements => {
  if (isEmpty(elements)) {
    return '';
  }
  const element = head(elements);
  const tag = name(element);
  return `${toString(tail(elements))}<${tag}>${value(element)}</${tag}>`;
};
*/