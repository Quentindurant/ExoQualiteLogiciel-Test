import { describe, it, expect } from 'vitest';
import { calcule, Addition } from './calculator';

describe('calcule', () => {
    it('should resolve simple sum', () => {

        const sumExpression = "10+5";
        const resultSum = calcule(sumExpression);

        expect(resultSum).toBe(15);
    });

    it('should culculate product before sum', () => {
        expect(calcule("2+4*10")).toBe(42);
    });

    it('should manage parenthesis priority', () => {
        expect(calcule("(2+4)*10")).toBe(60);
    });

    it('should check irregular expression', () => {
        expect(calcule("2 plus 4")).toBe(0);
    });

});
describe('calcule - EdgeCases', () => {
    it('should handle zero as result', () => {
        expect(calcule("0+0")).toBe(0);
    }); // a finir
});
describe('addition - ErrorCases', () => {
    it(' should return NaN for invalide token', () => {
        const result = Addition(10, 0);
        expect(Number.isNaN(result)).toBe(true);
    });
});







// Coverage
// it('should check irregular expression', () => {
//     expect(calc(" + ")).toBe(0);
// });
