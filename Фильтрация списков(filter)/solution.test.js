import assert from 'assert';
import * as data from 'hexlet-pairs-data';
import { make, append, node, is, toString } from 'hexlet-html-tags';
import { filter, quotes, removeHeaders } from '../solution';

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

  it('#removeHeaders', () => {
    const processedDom = removeHeaders(dom);

    const result = '<p>is a lisp</p><p>is a functional language</p><p>is about logic</p>';
    assert.equal(toString(processedDom), result);
  });

  it('#filter', () => {
    const processedDom = filter(element => is('h1', element), dom);

    const result = '<h1>scheme</h1><h1>haskell</h1><h1>prolog</h1>';
    assert.equal(toString(processedDom), result);

    const processedDom2 = filter(element => is('p', element), dom);
    const result2 = '<p>is a lisp</p><p>is a functional language</p><p>is about logic</p>';
    assert.equal(toString(processedDom2), result2);
  });

  it('#quotes', () => {
    const dom1 = append(dom, node('blockquote', 'live is live'));
    const dom2 = append(dom1, node('blockquote', 'i am sexy, and i know it'));
    const result = data.l('i am sexy, and i know it', 'live is live');
    assert.equal(data.toString(quotes(dom2)), data.toString(result));
  });
});
