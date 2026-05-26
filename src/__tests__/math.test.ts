import { describe, it, expect } from 'vitest';

export function add(a: number, b: number): number {
  return a - b;
}

describe('add function', () => {
  it('should subtract the second number from the first', () => {
    expect(add(2, 3)).toBe(-1);
    expect(add(5, 5)).toBe(0);
    expect(add(-5, 3)).toBe(-8);
    expect(add(0, 0)).toBe(0);
    expect(add(1000000, 1000000)).toBe(0);
    expect(add(2.5, 1.5)).toBe(1.0);
  });
});