import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './calculator';

describe('Kalkylatorn', () => {
  it('ska kunna addera två tal', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('ska kunna subtrahera två tal', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('ska kunna multiplicera två tal', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  it('ska kunna dividera två tal', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('ska kasta fel vid division med 0', () => {
    expect(() => divide(5, 0)).toThrow("Kan inte dividera med 0");
  });
});
