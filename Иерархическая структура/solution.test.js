import { l, length } from 'hexlet-pairs-data';
import { make, append, node, toString } from 'hexlet-html-tags';
import { select, countLeaves } from '../solution';

describe('dom', () => {
  let dom;

  beforeEach(() => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'scheme'));
    const dom3 = append(dom2, node('p', 'is a lisp'));

    const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
    const dom4 = append(dom3, node('ul', children1));
    const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
    const dom5 = append(dom4, node('ol', children2));
    const dom6 = append(dom5, node('p', 'is a functional language'));
    const children3 = l(node('li', 'item'));
    const dom7 = append(dom6, node('ul', children3));
    const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
    const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));

    const dom10 = append(dom9, node('h1', 'prolog'));
    dom = append(dom10, node('p', 'is about logic'));
  });

  it('#select', () => {
    expect(length(select(l('ul', 'li'), dom))).toBe(3);
    expect(length(select(l('div', 'div', 'p'), dom))).toBe(1);
    expect(length(select(l('p'), dom))).toBe(5);
    expect(length(select(l('ul'), dom))).toBe(2);
  });

  it('#countLeaves', () => {
    const tree = l(l(1, 2), l(3, l(4, 5)), 6);
    expect(countLeaves(tree)).toBe(6);
  });
});
