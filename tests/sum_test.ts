// write a deno unit test according AAA pattern

import { Calculator } from 'Boilerplate/Infrastructure/Shared/mod.ts';
import { assertEquals, assertThrows } from "@std/assert";

Deno.test("Calculator sum method", () => {
    // Arrange
    
    const a = 5;
    const b = 3;
    const expected = 8;

    // Act
    const result = Calculator.sum(a, b);

    // Assert
    assertEquals(result, expected);
});

Deno.test("Calculator subtract method", () => {
    // Arrange
    
    const a = 5;
    const b = 3;
    const expected = 2;

    // Act
    const result = Calculator.subtract(a, b);

    // Assert
    assertEquals(result, expected);
});

Deno.test("Calculator multiply method", () => {
    // Arrange
    
    const a = 5;
    const b = 3;
    const expected = 15;

    // Act
    const result = Calculator.multiply(a, b);

    // Assert
    assertEquals(result, expected);
});

Deno.test("Calculator divide method", () => {
    // Arrange
    
    const a = 6;
    const b = 3;
    const expected = 2;

    // Act
    const result = Calculator.divide(a, b);

    // Assert
    assertEquals(result, expected);
});

Deno.test("Calculator divide by zero", () => {
    // Arrange
    
    const a = 6;
    const b = 0;

    // Act & Assert
    assertThrows(() => {
        Calculator.divide(a, b);
    }, Error, "Cannot divide by zero");
});