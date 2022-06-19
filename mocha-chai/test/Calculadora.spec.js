import assert from "assert";
import chai from "chai"
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect

// Verificar Soma
describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Numeros Negativos. Deve somar -4 e -5 resultando em -9', () => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    })
    it('Numero Negativo e Positivo. Deve somar -5 e 4 resultando em -1', () => {
        let resultado = Calculadora.soma(-5, 4)
        expect(resultado).to.be.eq(-1)
    })
    it('Soma Array. Deve somar os elementos do array 10, 5, 2 resultando em 17', () => {
        let resultado = Calculadora.somaArray([10, 5, 2])
        expect(resultado).to.be.eq(17)
    })
})


// Verifica Subtração
describe('Testes de Subtração', () => {
    it('Deve subtrair 5 e 4 resultando em 1', () => {
        let resultado = Calculadora.subtrair(5, 4)
        expect(resultado).to.be.eq(1)
    })
    it('Numeros Negativos. Deve subtrair -5 e -4 resultando em -1', () => {
        let resultado = Calculadora.subtrair(-5, -4)
        expect(resultado).to.be.eq(-1)
    })
    it('Subtração Array. Deve subtrair os elementos do array 1, 2, 5 resultando em 4', () => {
        let resultado = Calculadora.subtrairArray([1, 2, 5])
        expect(resultado).to.be.eq(4)
    })
   
})

// Verifica  Multiplicação
describe('Testes de multiplicacao', () => {
    it('Deve multiplicar os numeros 4 e 5 resultando em 20', () => {
        let resultado = Calculadora.multiplicacao(4, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Numero Positivo e Negativo. Deve multiplicar os numeros 4 e -5 resultando em -20', () => {
        let resultado = Calculadora.multiplicacao(4, -5)
        expect(resultado).to.be.eq(-20)
    })
    it('Numeros Negativos. Deve multiplicar os numeros -4 e -5 resultando em -20', () => {
        let resultado = Calculadora.multiplicacao(-4, -5)
        expect(resultado).to.be.eq(20)
    })
})


// Verifica  Divisão
describe('Testes de Divisão', () => {
    it('Deve Dividir os numeros 100 e 5 resultando em 20', () => {
        let resultado = Calculadora.divisao(100, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Numero zero. Dividir os numeros 4 e 0 resultando em 4', () => {
        let resultado = Calculadora.divisao(4, 0)
        expect(resultado).to.be.eq(Infinity)
    })
})

// Verifica o Dobro de um valor
describe('Teste do dobro de um Valor', () => {
    it('Recebe o numero 4 resultando em 8 ', () => {
        let resultado = Calculadora.Dobrar(4)
        expect(resultado).to.be.eq(8)
    })
    it('Numero Negativo. Recebe o numero -16 resultando em -32', () => {
        let resultado = Calculadora.Dobrar(-16)
        expect(resultado).to.be.eq(-32)
    })
})
// Vericar média
describe('Teste de Verificar Media', () => {
    it('Deve receber dois valores 8 e 7 e retornar media 7.5 ', () => {
        let resultado = Calculadora.media(8, 7)
        expect(resultado).to.be.eq(7.5)
    })
    it('Numero zero. Deve receber dois valores 0 e 0 e retornar media 0', () => {
        let resultado = Calculadora.media(0, 0)
        expect(resultado).to.be.eq(0)
    })
})

// Verificar Raiz quadrada
describe('Teste de Raiz quadrada', () => {
    it('Deve receber o valor 25 resultando na sua raiz quadrada que é 5', () => {
        let resultado = Calculadora.raizQuadrada(25)
        expect(resultado).to.be.eq(5)
    })
})

// Verificar Raiz Cubica
describe('Teste de Raiz cubica', () => {
    it('Deve receber o valor 512 resultando na sua raiz cubica que é 8', () => {
        let resultado = Calculadora.raizCubica(512)
        expect(resultado).to.be.eq(8)
    })
})

// Verificar Potencia de um valor
describe('Teste de Potenciacao', () => {
    it('Deve receber o valor 4 elevado 5 e resultando 1024', () => {
        let resultado = Calculadora.potencia(4, 5)
        expect(resultado).to.be.eq(1024)
    })
})




