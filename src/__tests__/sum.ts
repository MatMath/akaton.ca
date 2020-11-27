/* eslint-env jest */
import sum from '../sum.ts';

describe('sum', () => {
  it('1 + 1 = 2', () => {
    expect(sum(1, 1)).toBe(2);
  });

  it('1 + 2 != 2', () => {
    expect(sum(1, 2)).not.toBe(2);
  });
});
