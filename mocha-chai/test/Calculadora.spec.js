import assert from "assert";
import chai from "chai"
import Calculadora from "../src/Calculadora.js";

const expect = chai.expect

// Verificar Soma
describe('Testes de Adição', () => {
    it('Teste: Números Naturais. Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Teste: Numeros Inteiros. Deve somar -4 e -5 resultando em -9', () => {
        let resultado = Calculadora.soma(-4, -5)
        expect(resultado).to.be.eq(-9)
    })
    it('Teste: Numeros Inteiros. Deve somar -5 e 4 resultando em -1', () => {
        let resultado = Calculadora.soma(-5, 4)
        expect(resultado).to.be.eq(-1)
    })
    it('Teste: Numeros Decimais. Deve somar os elementos do array 7.5 e 3.2 resultando em 10.7', () => {
        let resultado = Calculadora.soma(7.5, 3.2 )
        expect(resultado).to.be.eq(10.7)
    })
    it('Teste: Soma Array. Deve somar os elementos do array 10, 5, 2 resultando em 17', () => {
        let resultado = Calculadora.somaArray([10, 5, 2])
        expect(resultado).to.be.eq(17)
    })
    
})


// Verifica Subtração
describe('Testes de Subtração', () => {
    it('Teste: Números Naturais. Deve subtrair 5 e 4 resultando em 1', () => {
        let resultado = Calculadora.subtrair(5, 4)
        expect(resultado).to.be.eq(1)
    })
    it('Teste: Numeros Inteiros. Deve subtrair -5 e -4 resultando em -1', () => {
        let resultado = Calculadora.subtrair(-5, -4)
        expect(resultado).to.be.eq(-1)
    })
    it('Teste: Subtração Array. Deve subtrair os elementos do array 1, 2, 5 resultando em 4', () => {
        let resultado = Calculadora.subtrairArray([1, 2, 5])
        expect(resultado).to.be.eq(4)
    })
   
})

// Verifica  Multiplicação
describe('Testes de multiplicacao', () => {
    it('Teste: Números Naturais. Deve multiplicar os numeros 4 e 5 resultando em 20', () => {
        let resultado = Calculadora.multiplicacao(4, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Teste: Numero Inteiros. Deve multiplicar os numeros 4 e -5 resultando em -20', () => {
        let resultado = Calculadora.multiplicacao(4, -5)
        expect(resultado).to.be.eq(-20)
    })
    it('Teste: Numeros Inteiros. Deve multiplicar os numeros -4 e -5 resultando em -20', () => {
        let resultado = Calculadora.multiplicacao(-4, -5)
        expect(resultado).to.be.eq(20)
    })
})


// Verifica  Divisão
describe('Testes de Divisão', () => {
    it('Teste: Números Naturais. Deve Dividir os numeros 100 e 5 resultando em 20', () => {
        let resultado = Calculadora.divisao(100, 5)
        expect(resultado).to.be.eq(20)
    })
    it('Teste: Numero zero. Dividir os numeros 4 e 0 resultando em 4', () => {
        let resultado = Calculadora.divisao(4, 0)
        expect(resultado).to.be.eq(Infinity)
    })
})

// Verifica o Dobro de um valor
describe('Teste do dobro de um Valor', () => {
    it('Teste: Recebe o numero 4 resultando em 8 ', () => {
        let resultado = Calculadora.Dobrar(4)
        expect(resultado).to.be.eq(8)
    })
    it('Teste: Numero Negativo. Recebe o numero -16 resultando em -32', () => {
        let resultado = Calculadora.Dobrar(-16)
        expect(resultado).to.be.eq(-32)
    })
})
// Vericar média
describe('Teste de Verificar Media', () => {
    it('Teste: Deve receber dois valores 8 e 7 e retornar media 7.5 ', () => {
        let resultado = Calculadora.media(8, 7)
        expect(resultado).to.be.eq(7.5)
    })
    it('Teste: Numero zero. Deve receber dois valores 0 e 0 e retornar media 0', () => {
        let resultado = Calculadora.media(0, 0)
        expect(resultado).to.be.eq(0)
    })
})

// Verificar Raiz quadrada
describe('Teste de Raiz quadrada', () => {
    it('Teste: Deve receber o valor 25 resultando na sua raiz quadrada que é 5', () => {
        let resultado = Calculadora.raizQuadrada(25)
        expect(resultado).to.be.eq(5)
    })
})

// Verificar Raiz Cubica
describe('Teste de Raiz cubica', () => {
    it('Teste: Deve receber o valor 512 resultando na sua raiz cubica que é 8', () => {
        let resultado = Calculadora.raizCubica(512)
        expect(resultado).to.be.eq(8)
    })
})

// Verificar Exponenciação
describe('Teste de Exponenciação', () => {
    it('Teste: Deve receber o valor 7 elevado 2 e resultando 49', () => {
        let resultado = Calculadora.exponenciacao(7, 2)
        expect(resultado).to.be.eq(49)
    })
})

// Verificar Porcentagem
describe('Teste de Porcentagem', () => {
    it('Teste: Calculando 20% de 100, resultado deve ser 20', () => {
        let resultado = Calculadora.porcentagem(20, 100)
        expect(resultado).to.be.eq(20)
    })
    it('Teste: Numero negativo. Calculando 40% de -200, resultado deve ser -80', () => {
        let resultado = Calculadora.porcentagem(40, -200)
        expect(resultado).to.be.eq(-80)
    })
})
// Verificar MDC
describe('Teste de MDC (Máximo Divisor Comum)', () => {
    it('Teste: Deve calcular o MDC de 30 e 20. O resultado deve ser 10', () => {
        let resultado = Calculadora.mdc(30, 20)
        expect(resultado).to.be.eq(10)
    })
})
// Verificar MMC
describe('Teste de MMC (Mínimo Múltiplo Comum)', () => {
    it('Teste: Deve calcular o MMC de 30 e 20. O resultado deve ser 60', () => {
        let resultado = Calculadora.calculaMmc(30, 20)
        expect(resultado).to.be.eq(60)
    })
})
// Verificar Fatorial
describe('Teste de Fatorial', () => {
    it('Teste: Deve calcular o fatorial de 5. O resultado deve ser 120', () => {
        let resultado = Calculadora.fatorial(5)
        expect(resultado).to.be.eq(120)
    })
})
// Verificar Binário
describe('Teste de Converter Decimal para Binário', () => {
    it('Teste: Deve converter 10 em Binário. O resultado deve ser 1010', () => {
        let resultado = Calculadora.binario(10)
        expect(resultado).to.be.eq('1010')
    })
    it('Teste: Deve converter 225 em Binário. O resultado deve ser 11100001', () => {
        let resultado = Calculadora.binario(225)
        expect(resultado).to.be.eq('11100001')
    })
})
// Verificar Menor Número
describe('Teste de Menor Número', () => {
    it('Teste: Deve rececer os numeros 10 e 20 e retornar o menor 10', () => {
        let resultado = Calculadora.menor(10, 20)
        expect(resultado).to.be.eq(10)
    })
})
// Verificar Maior Número
describe('Teste de Maior Número', () => {
    it('Teste: Deve rececer os numeros 10 e 20 e retornar o maior 20', () => {
        let resultado = Calculadora.maior(10, 20)
        expect(resultado).to.be.eq(20)
    })
})
