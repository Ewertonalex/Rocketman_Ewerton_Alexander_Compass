<<<<<<< HEAD
// Velocidade máxima de ate 70km
// a cada 5km acima do limite voce ganha 1 ponto na carteira
// Math.Floor() arrendondar numero
// caso pontos maior que 12, carteira suspendida.

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const pontosPorKm = 5;
    
    console.log('Você está a', velocidade, 'km/h!');
    if (velocidade <= velocidadeMaxima)
        console.log('Você está dentro do limite máximo permitido!');
    else {
        console.log('Você está a', velocidade - velocidadeMaxima, 'km/h acima do limite!');
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / pontosPorKm));
        console.log('Você recebeu', pontos, 'pontos na sua carteira!');
        if (pontos >= 12)
            console.log('=== Sua Carteira está Suspensa! ===');
    }

=======
// Velocidade máxima de ate 70km
// a cada 5km acima do limite voce ganha 1 ponto na carteira
// Math.Floor() arrendondar numero
// caso pontos maior que 12, carteira suspendida.

verificarVelocidade(130)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const pontosPorKm = 5;
    
    console.log('Você está a', velocidade, 'km/h!');
    if (velocidade <= velocidadeMaxima)
        console.log('Você está dentro do limite máximo permitido!');
    else {
        console.log('Você está a', velocidade - velocidadeMaxima, 'km/h acima do limite!');
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / pontosPorKm));
        console.log('Você recebeu', pontos, 'pontos na sua carteira!');
        if (pontos >= 12)
            console.log('=== Sua Carteira está Suspensa! ===');
    }

>>>>>>> develop
}