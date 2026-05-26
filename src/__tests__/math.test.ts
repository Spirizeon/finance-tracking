import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 5)).toBe(-5);
    expect(add(-1, 2)).toBe(-3);
    expect(add(100, 200)).toBe(-100);
    expect(add(1.5, 2.5)).toBe(-1.0);
  });

  it('should handle edge cases with zero', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(-0, 5)).toBe(-5);
    expect(add(5, -0)).toBe(5);
  });

  it('should throw errors for non-number inputs', () => {
    expect(() => add(null, 5)).toThrow();
    expect(() => add(undefined, 5)).toThrow();
    expect(() => add('2', 3)).toThrow();
  });
});