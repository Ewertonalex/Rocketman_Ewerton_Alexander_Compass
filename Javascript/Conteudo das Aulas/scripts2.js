<<<<<<< HEAD
//For..In

const pessoa = {
    nome: 'Ewerton',
    idade: 25
};
//key-value
for(let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//For..of

for(let cor of cores) {
    console.log(cor);
=======
//For..In

const pessoa = {
    nome: 'Ewerton',
    idade: 25
};
//key-value
for(let chave in pessoa) {
    console.log(chave, pessoa['nome']);
}

const cores = ['Vermelho', 'azul', 'verde'];

for (let indice in cores) {
    console.log(indice, cores[indice])
}

//For..of

for(let cor of cores) {
    console.log(cor);
>>>>>>> develop
}