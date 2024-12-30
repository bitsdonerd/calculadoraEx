const calculadora = require('../assets/models/calculator');

// test (parameter, callbackfunction()) - expect().toBe()
test("teste soma 2 + 2 deve retornar 4", () => {
    const resultado = new calculadora().somar(2, 2)
    expect(resultado).toBe(4);
})

test("teste soma 10 + 10 deve retornar 20", () => {
    const resultado = new calculadora().somar(10, 10)
    expect(resultado).toBe(20);
})

test("teste 'Banana' + 10 deve retornar Error", () => {
    const resultado = new calculadora().somar('Banana', 10)
    expect(resultado).toBe(Error);
})

test("teste multiplicação 2 * 5 deve retornar 10", () => {
    const resultado = new calculadora().multiplicar(2, 5)
    expect(resultado).toBe(10);
})