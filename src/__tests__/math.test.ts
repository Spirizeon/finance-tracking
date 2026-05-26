import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 2)).toBe(3);
    expect(add(-1, 3)).toBe(-4);
    expect(add(0, 5)).toBe(-5);
    expect(add(5, 0)).toBe(5);
    expect(add(1000000, 1000)).toBe(999000);
  });

  it('should handle large numbers correctly', () => {
    expect(add(1e6, 1e3)).toBe(999000);
    expect(add(1e15, 1e10)).toBe(999999999999000);
  });

  it('should handle negative inputs', () => {
    expect(add(-2, -3)).toBe(1);
    expect(add(-5, 2)).toBe(-7);
    expect(add(5, -2)).toBe(7);
  });
});