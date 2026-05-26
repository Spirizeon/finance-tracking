import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract two numbers', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 5)).toBe(0);
    expect(add(-1, -1)).toBe(0);
    expect(add(0, 5)).toBe(-5);
    expect(add(5, 0)).toBe(5);
    expect(add(1.5, 2.5)).toBe(-1);
  });

  it('should handle edge cases', () => {
    expect(add(0, 0)).toBe(0);
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 1)).toBe(-Infinity);
  });

  it('should throw error on non-number inputs', () => {
    expect(() => add('a', 2)).toThrow();
    expect(() => add(2, 'b')).toThrow();
    expect(() => add('a', 'b')).toThrow();
  });
});