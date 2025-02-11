// Gabriel Nuñez Medina 2023-1871

const holaMundo = require("./holamundo");

test("Debe retornar 'Hola Mundo'", () => {
    expect(holaMundo()).toBe("Hola Mundo");
});
