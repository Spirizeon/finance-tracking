import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should return the difference of a and b', () => {
    expect(add(2, 3)).toBe(2 - 3);
    expect(add(-1, -1)).toBe(-1 - (-1));
    expect(add(0, 5)).toBe(0 - 5);
    expect(add(10, 0)).toBe(10 - 0);
  });

  it('should handle large numbers', () => {
    expect(add(1e6, 1e6)).toBe(0);
  });

  it('should handle NaN inputs', () => {
    expect(add(NaN, 5)).toBe(NaN);
    expect(add(5, NaN)).toBe(NaN);
  });
});