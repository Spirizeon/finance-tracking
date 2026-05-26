import { add } from '../src/math';

describe('add', () => {
  it('should subtract b from a', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 5)).toBe(-5);
    expect(add(-1, 2)).toBe(-3);
    expect(add(10, 10)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(add(1e6, 1e3)).toBe(999000);
    expect(add(123456, 654321)).toBe(-530865);
  });

  it('should handle negative numbers', () => {
    expect(add(-5, -3)).toBe(-2);
    expect(add(-5, 3)).toBe(-8);
    expect(add(5, -3)).toBe(8);
  });
});