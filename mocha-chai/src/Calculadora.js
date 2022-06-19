

export default class Calculadora {

    static soma(a, b) {
        return a + b
    }
    static somaArray([a, b, c]) {
        let array = [a, b, c]
        let som = 0
        for (let i = 0; i < array.length; i++) {
            som += array[i]
        }
        return som
    }
    static subtrair(a, b) {
        return a - b
    }
    static subtrairArray([a, b, c]) {
        let array = [a, b, c]
        let sub = 0
        for (let i = 0; i < array.length; i++) {
            sub = array[i] - sub
        }
        return sub
    }
    static multiplicacao(a, b) {
        return a * b
    }
    static divisao(a, b) {
        return a / b
    }
    static Dobrar(a, numDobro) {
        numDobro = a * 2
        let dobro = numDobro
        return dobro
    }
    static media(a, b, somamedia) {
        somamedia = a + b
        let mediatotal = somamedia / 2
        return mediatotal
    }
    static potencia(a, b) {
        let numPot = Math.pow(a, b)
        return numPot
    }
    static raizQuadrada(a, numRaiz) {
        numRaiz = Math.sqrt(a)
        let resultado = numRaiz
        return resultado
    }
    static raizCubica(a, numRaizC) {
        numRaizC = Math.cbrt(a)
        let resultado = numRaizC
        return resultado
    }
    
}
