import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract two numbers', () => {
    expect(add(5, 3)).toBe(2);
    expect(add(-1, 4)).toBe(-5);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle edge cases', () => {
    expect(add(1e6, 1e6)).toBe(0);
    expect(add(-1e6, 1e6)).toBe(-2e6);
  });

  it('should throw type errors for non-number inputs', () => {
    expect(() => add('2', 3)).toThrow(TypeError);
    expect(() => add(2, '3')).toThrow(TypeError);
    expect(() => add('a', 'b')).toThrow(TypeError);
  });
});