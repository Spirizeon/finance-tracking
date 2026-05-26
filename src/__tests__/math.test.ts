import { add } from '../math';

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 5)).toBe(0);
    expect(add(-1, -1)).toBe(0);
    expect(add(0, 5)).toBe(-5);
    expect(add(10, -2)).toBe(12);
  });

  it('should handle edge cases with zero', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(0, 100)).toBe(-100);
    expect(add(100, 0)).toBe(100);
  });

  it('should handle large numbers', () => {
    expect(add(1e6, 1e3)).toBe(999000);
    expect(add(1e15, 1e10)).toBe(999999999999000);
  });
});