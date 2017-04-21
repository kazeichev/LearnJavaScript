import { makePoint, toString } from 'hexlet-points';
import {
  distance,
  quadrant,
  symmetricalPoint,
} from '../points';

describe('points', () => {
  it('quadrant', () => {
    expect(quadrant(makePoint(0, 0))).toBeNull();
    expect(quadrant(makePoint(5, 0))).toBeNull();
    expect(quadrant(makePoint(1, 5))).toBe(1);
    expect(quadrant(makePoint(-3, 10))).toBe(2);
    expect(quadrant(makePoint(-2, -5))).toBe(3);
    expect(quadrant(makePoint(4, -1))).toBe(4);
  });

  it('symmetricalPoint', () => {
    expect(toString(symmetricalPoint(makePoint(10, 10)))).toBe(toString(makePoint(-10, -10)));
    expect(toString(symmetricalPoint(makePoint(-10, -10)))).toBe(toString(makePoint(10, 10)));
    expect(toString(symmetricalPoint(makePoint(10, -10)))).toBe(toString(makePoint(-10, 10)));
  });

  it('distance', () => {
    expect(distance(makePoint(-2, -3), makePoint(-4, 4))).toBeCloseTo(7.28, 2);
  });
});
