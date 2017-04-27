import { make, append, node, value, is, toString } from 'hexlet-html-tags';
import { map, mirror } from '../solution';

describe('dom', () => {
  let dom;

  beforeEach(() => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'scheme'));
    const dom3 = append(dom2, node('p', 'is a lisp'));

    const dom4 = append(dom3, node('h1', 'haskell'));
    const dom5 = append(dom4, node('p', 'is a functional language'));

    const dom6 = append(dom5, node('h1', 'prolog'));
    dom = append(dom6, node('p', 'is about logic'));
  });

  it('#b2p', () => {
    const dom1 = append(make(), node('blockquote', 'quote'));
    const processedDom = map(element => {
      if (is('blockquote', element)) {
        return node('p', value(element));
      }
      return element;
    }, dom1);

    const result = '<p>quote</p>';
    expect(toString(processedDom)).toBe(result);
  });

  it('#map', () => {
    const processedDom = map((element) => {
      if (is('h1', element)) {
        return node('h2', value(element));
      }
      return element;
    }, dom);

    const result = '<h2>scheme</h2><p>is a lisp</p><h2>haskell</h2><p>is a functional language</p><h2>prolog</h2><p>is about logic</p>';
    expect(toString(processedDom)).toBe(result);
  });

  it('#mirror', () => {
    const result = '<h1>emehcs</h1><p>psil a si</p><h1>lleksah</h1><p>egaugnal lanoitcnuf a si</p><h1>golorp</h1><p>cigol tuoba si</p>';
    expect(toString(mirror(dom))).toBe(result);
  });
});
