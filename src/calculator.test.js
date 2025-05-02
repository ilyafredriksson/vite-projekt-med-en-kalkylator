import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculator';

describe('Kalkylatorn', () => {
  it(' addera två tal', () => {
    expect(add(2, 3)).toBe(5);
  });

  it(' subtrahera två tal', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it(' multiplicera två tal', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  it(' dividera två tal', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it(' kasta fel vid division med 0', () => {
    expect(() => divide(5, 0)).toThrow("Kan inte dividera med 0");
  });
});
