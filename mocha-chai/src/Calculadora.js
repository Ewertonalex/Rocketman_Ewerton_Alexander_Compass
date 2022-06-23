

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
    static exponenciacao(a, b) {
        let numPot = Math.pow(a, b)
        return numPot
    }
    static raizQuadrada(a, numRaiz) {
        numRaiz = Math.sqrt(a)
        let resut = numRaiz
        if (resut >= 0) {
            return numRaiz
        } else if (resut < 0) {
            return undefined
        }
        
    }
    static raizCubica(a, numRaizC) {
        numRaizC = Math.cbrt(a)
        return numRaizC
    }
    static porcentagem(a, b) {
        let valorPorcentagem = a/100
        return valorPorcentagem * b
    }
    static mdc(a, b) {
        let resto
        do {
            resto  = a % b
            a = b
            b = resto
        } while (resto != 0)
        return a
    }
    static fatorial(a) {
        if (a == 0) {
            return 1
        }else {
            return a*this.fatorial(a - 1)
        }        
    }
    static calculaMmc(a, b) {
        var resto, x, y
        x = a
        y = b
        while(resto!=0){
          resto = x % y
          x = y
          y = resto
        }
        return (a * b)/x
    }
    static binario(dec){
        return (dec >>> 0).toString(2);
    }
    static menor(a, b) {
        return Math.min(a, b)
    }
    static maior(a, b) {
        return Math.max(a, b)
    }
    
}
