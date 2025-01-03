# Calculadora em JavaScript

Este é um projeto de uma calculadora simples desenvolvida em JavaScript. O objetivo do projeto é demonstrar habilidades de programação, modularização e testes automatizados com Jest.

## Funcionalidades

- **Operações básicas**: Adição, subtração, multiplicação e divisão.
- **Interface simples**: Interface de linha de comando ou interface gráfica (se aplicável).
- **Testes automatizados**: Validação das operações matemáticas utilizando Jest.

## Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/bitsdonerd/calculadoraEx
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd calculadoraEx
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute a calculadora (windows):

   ```bash
   start index.html
   ```

## Scripts de Teste

Este projeto utiliza [Jest](https://jestjs.io/) para testes automatizados.

### Executar todos os testes:

```bash
npm test
```

### Relatório de cobertura de testes:

```bash
npm test -- --coverage
```

## Estrutura do Projeto

```plaintext
├── assets
│   ├── calculadora.js    # Lógica da calculadora
│   ├── style.css          # Funções auxiliares (se houver)
├── tests
│   ├── calculadora.test.js  # Testes da calculadora
├── package.json          # Configurações do projeto e dependências
├── README.md             # Documentação do projeto
```

## Exemplos de Testes

Os testes verificam cenários como:

- Soma de números positivos e negativos.
- Divisão por zero (deve retornar erro ou valor específico).
- Operações encadeadas.

## Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests com sugestões e melhorias.
