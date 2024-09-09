export class Calculator {
    public static sum(a: number, b: number): number {
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }

    public static multiply(a: number, b: number): number {
        return a * b;
    }

    public static divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}
