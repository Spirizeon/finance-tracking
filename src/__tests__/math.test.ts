import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(5, 3)).toBe(2);
    expect(add(10, 4)).toBe(6);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(add(-5, 3)).toBe(-8);
    expect(add(5, -3)).toBe(8);
    expect(add(-5, -3)).toBe(-2);
  });

  it('should work with boundary values', () => {
    expect(add(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE - 1);
    expect(add(1, Number.MIN_VALUE)).toBe(1 - Number.MIN_VALUE);
  });
});