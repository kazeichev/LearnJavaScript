import { make, append, toString, node } from '../solution';

describe('dom', () => {
  it('#toString 1', () => {
    const result = '';
    expect(toString(make())).toEqual(result);
  });

  it('#toString 2', () => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'hello, world'));

    const result = '<h1>hello, world</h1>';
    expect(toString(dom2)).toEqual(result);
  });

  it('#toString 3', () => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'hello, world'));
    const dom = append(dom2, node('h2', 'header2'));

    const result = '<h1>hello, world</h1><h2>header2</h2>';
    expect(toString(dom)).toEqual(result);
  });
});