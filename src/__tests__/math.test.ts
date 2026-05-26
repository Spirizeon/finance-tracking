import { describe, it, expect } from 'vitest';
import { add } from '../math';

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 2)).toBe(3);
    expect(add(-1, 1)).toBe(-2);
    expect(add(0, 5)).toBe(-5);
    expect(add(5, 0)).toBe(5);
    expect(add(1000000, 1000000)).toBe(0);
  });
});