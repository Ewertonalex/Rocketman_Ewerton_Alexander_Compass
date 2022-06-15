<<<<<<< HEAD
// Criar um metodo para ler propriedades de um objeto
// Exibir somente as propriedades do tipo String que estão nesse objeti=o

const filme = {
    titulo : 'Vingadores',
    ano : 2022,
    diretor : 'Robin',
    personagem : 'Hulk'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
=======
// Criar um metodo para ler propriedades de um objeto
// Exibir somente as propriedades do tipo String que estão nesse objeti=o

const filme = {
    titulo : 'Vingadores',
    ano : 2022,
    diretor : 'Robin',
    personagem : 'Hulk'
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
>>>>>>> develop
}