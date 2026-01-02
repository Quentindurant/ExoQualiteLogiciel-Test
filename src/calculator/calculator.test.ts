import { describe, it, expect } from 'vitest';
import { calc } from './calculator';

describe('calc', () => {
    it('should resolve simple sum', () => {

        const sumExpression = "10+5";
        const resultSum = calc(sumExpression);

        expect(resultSum).toBe(15);
    });

    it('should culculate product before sum', () => {
        expect(calc("2+4*10")).toBe(42);
    });

    it('should manage parenthesis priority', () => {
        expect(calc("(2+4)*10")).toBe(60);
    });

    it('should check irregular expression', () => {
        expect(calc("2 plus 4")).toBe(0);
    });


    // Coverage
    // it('should check irregular expression', () => {
    //     expect(calc(" + ")).toBe(0);
    // });
});