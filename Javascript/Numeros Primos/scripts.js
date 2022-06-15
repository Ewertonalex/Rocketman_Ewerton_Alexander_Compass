// Criar função para mostrar os numeros primos

// Primos
// Composto

//Ex: 11
// numero primo é numero é divisivel apenas por 1 ou ele mesmo

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for(let numero = 2;numero <= limite;numero++) {
        let ehPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) console.log(numero);
    }
}