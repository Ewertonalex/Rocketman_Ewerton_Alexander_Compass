<<<<<<< HEAD
// Arrays

let familia = [true,45,'Ewerton',17];
console.log(familia.length);
console.log(familia[0]);

let nomeDoColega = ['Enzo', 8, 2013];
console.log(nomeDoColega.length);

// Função
let corSite = "azul";
function resetaCor(cor, tonalidade) {
    corSite = cor + tonalidade;
}
console.log(corSite);
resetaCor("vermelho"," escuro");
console.log(corSite);

// Operadores Aritiméticos

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

let idade = 18;

console.log(++idade);
console.log(idade);

// If..Else

// Se a hora estiver entre as 6h ate 12h : Bom dia
// 12h a 18h : Boa tarde
// Caso contrario : Boa noite

let hora = 21;

if (hora > 6 && hora < 12) {
    console.log("Bom dia!")
}
else if (hora > 12 && hora < 18) {
    console.log("Boa Tarde!")
}
else {
    console.log("Boa Noite!")
}

// switch case

let permissao; //comum, gerente, direto
permissao = 'gerente';

switch (permissao) {
    case 'comum':
    console.log("Usuário Comum");
    break;

    case 'gerente':
    console.log("Usuário Gerente");
    break;

    case 'diretor':
    console.log("Usuário Diretor");
    break;

    default: 
    console.log("Usuário não reconhecido!")
}

// laço For...Loop

// For
// While
// Do...While
// For..In
// For..of

// For
// numero impar

for(let i = 0;i < 5;i++){
    if(i % 2 !== 0) {
        console.log(i);
    }
}
// 0rdem decrescente

for(let i = 5;i >= 1;i--){
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// While loop

let i = 5;

while(i >= 1) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// Do..While
//let a = 0;
//do {
 //   console.log('digitando');
  //  i++;
// } while (a < 10);


=======
// Arrays

let familia = [true,45,'Ewerton',17];
console.log(familia.length);
console.log(familia[0]);

let nomeDoColega = ['Enzo', 8, 2013];
console.log(nomeDoColega.length);

// Função
let corSite = "azul";
function resetaCor(cor, tonalidade) {
    corSite = cor + tonalidade;
}
console.log(corSite);
resetaCor("vermelho"," escuro");
console.log(corSite);

// Operadores Aritiméticos

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

let idade = 18;

console.log(++idade);
console.log(idade);

// If..Else

// Se a hora estiver entre as 6h ate 12h : Bom dia
// 12h a 18h : Boa tarde
// Caso contrario : Boa noite

let hora = 21;

if (hora > 6 && hora < 12) {
    console.log("Bom dia!")
}
else if (hora > 12 && hora < 18) {
    console.log("Boa Tarde!")
}
else {
    console.log("Boa Noite!")
}

// switch case

let permissao; //comum, gerente, direto
permissao = 'gerente';

switch (permissao) {
    case 'comum':
    console.log("Usuário Comum");
    break;

    case 'gerente':
    console.log("Usuário Gerente");
    break;

    case 'diretor':
    console.log("Usuário Diretor");
    break;

    default: 
    console.log("Usuário não reconhecido!")
}

// laço For...Loop

// For
// While
// Do...While
// For..In
// For..of

// For
// numero impar

for(let i = 0;i < 5;i++){
    if(i % 2 !== 0) {
        console.log(i);
    }
}
// 0rdem decrescente

for(let i = 5;i >= 1;i--){
    if(i % 2 !== 0) {
        console.log(i);
    }
}

// While loop

let i = 5;

while(i >= 1) {
    if(i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// Do..While
//let a = 0;
//do {
 //   console.log('digitando');
  //  i++;
// } while (a < 10);


>>>>>>> develop
