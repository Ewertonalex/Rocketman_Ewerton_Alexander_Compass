// Faixa de Preços
// Criar um array de obj de faiza de preço para que
// ela possa ser usada em um site

//Primeira opção

let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'até R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 999999999}
];

// Segunda opção
function criaFaixaPreco(tooltip, minimo, maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000),
]
console.log(faixas);
console.log(faixa2);


