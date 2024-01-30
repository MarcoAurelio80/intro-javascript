const { cuadradoNumerosNaturales } = require("./ejercicio16");

test("retorna el cuadrado de los 9 primeros numeros naturales", () => {
  expect(cuadradoNumerosNaturales()).toStrictEqual([
    0, 1, 4, 9, 16, 25, 36, 49, 64, 81,
  ]);
});
