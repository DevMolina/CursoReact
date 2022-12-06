import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 09-deses-arr', () => {
    test('Debe retornar un string y un número', () => {
        const [letters, numbers] = retornaArreglo();
        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(numbers).toEqual(expect.any(Number));
        expect(letters).toEqual(expect.any(String))
    });
});