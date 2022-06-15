// Media nota escola
// Obter media a partir de Array

// 0-59 E
// 60-69 D
// 70-79 C
// 80-89 B
// 90-100 A

const array = [100,10,70];


console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let soma = 0;
    for (let nota of notas){
        soma += nota;
    }
    const media = soma/(notas.length);

    if (media >= 0 && media <= 59)
        return 'E'
    if (media >= 60 && media <= 69)
        return 'D'
    if (media >= 70 && media <= 79)
        return 'C'
    if (media >= 80 && media <= 89)
        return 'B'
    else
        return 'A'
}
