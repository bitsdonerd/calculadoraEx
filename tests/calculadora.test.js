const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const calculadora = require('../assets/js/calculadora');


const html = fs.readFileSync(path.resolve(__dirname, '../assets/index.html'), 'utf8');
const dom = new JSDOM(html);
global.document = dom.window.document;
global.window = dom.window;


test("teste soma", () => {
    const display = document.querySelector('.display');
    display.value = '2+2';
    calculadora.realizaConta();
    expect(display.value).toBe('4');
});

test("teste subtração", () => {
    const display = document.querySelector('.display');
    display.value = '5-3';
    calculadora.realizaConta();
    expect(display.value).toBe('2');
});

test("teste multiplicação", () => {
    const display = document.querySelector('.display');
    display.value = '3*3';
    calculadora.realizaConta();
    expect(display.value).toBe('9');
});

test("teste divisão", () => {
    const display = document.querySelector('.display');
    display.value = '10/2';
    calculadora.realizaConta();
    expect(display.value).toBe('5');
});

test("teste conta inválida", () => {
    const display = document.querySelector('.display');
    display.value = '2++2';
    calculadora.realizaConta();
    expect(display.value).toBe('');
});
