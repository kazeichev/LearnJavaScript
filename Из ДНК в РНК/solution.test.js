import { toRna } from '../solution';

test('solution', () => {
    expect(toRna('ACGTGGTCTTAA')).toBe('UGCACCAGAAUU');
});
