function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosEwerton = ['Ana Luiza', 'Ana Sofia', 'Beatriz', 'Anne Rayssa', 'Luciana', 'Sablina']
    if (ConvidadosEwerton.includes(NomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Bem vindo! Você pode Entrar!'
        
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Desculpa, você não pode entrar!'
    }
}