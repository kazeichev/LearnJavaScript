import { make, append, node, is, toString } from 'hexlet-html-tags';
import { reduce, emptyTagsCount, headersCount } from '../solution';

describe('dom', () => {
  let dom;

  beforeAll(() => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'scheme'));
    const dom3 = append(dom2, node('p', 'is a lisp'));

    const dom4 = append(dom3, node('h1', 'haskell'));
    const dom5 = append(dom4, node('p', 'is a functional language'));

    const dom6 = append(dom5, node('h1', 'prolog'));

    const dom7 = append(dom6, node('h2', ''));
    const dom8 = append(dom7, node('span', ''));
    dom = append(dom8, node('p', 'is about logic'));
  });

  it('#headersCount', () => {
    const count = headersCount('h1', dom);
    expect(count).toBe(3);
  });

  it('#reduce', () => {
    const count = reduce((element, acc) =>
      (is('h1', element) ? acc + 1 : acc),
    0, dom);
    expect(count).toBe(3);
  });

  it('#emptyTagsCount', () => {
    const dom1 = append(dom, node('blockquote', ''));
    const dom2 = append(dom1, node('blockquote', ''));
    const dom3 = append(dom2, node('blockquote', 'quote'));
    expect(emptyTagsCount('blockquote', dom3)).toBe(2);
  });
});
