import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract two numbers', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 2)).toBe(3);
    expect(add(-1, 2)).toBe(-3);
    expect(add(0, 0)).toBe(0);
    expect(add(1.5, 2.5)).toBe(-1);
  });

  it('should handle large numbers', () => {
    expect(add(1e100, 1e100)).toBe(0);
    expect(add(1e100, -1e100)).toBe(0);
  });
});