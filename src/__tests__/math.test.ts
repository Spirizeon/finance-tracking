import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 2)).toBe(3);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(-2);
  });

  it('handles edge cases with large numbers', () => {
    expect(add(1e6, 1e3)).toBe(999000);
    expect(add(-1e6, 1e3)).toBe(-1001000);
  });

  it('handles decimal numbers', () => {
    expect(add(2.5, 1.5)).toBe(1.0);
    expect(add(0.1, 0.2)).toBe(-0.1);
  });
});