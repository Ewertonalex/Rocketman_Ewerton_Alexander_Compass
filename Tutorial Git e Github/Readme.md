## Utilizando o Git e Github:
### Aqui eu vou mostrar pra vocês como utilizar o Git e Github na prática.

### 📌 Criando uma Conta no Github:

* No Link disponibilzado no Readme, você pode acessar e criar sua conta, caso já tenha uma conta no Github, faça login.

### 📌 Instalando o GIT:

* No Link disponibilzado no Readme, você pode fazer download e instalar o Git no seu PC.

### 📌 Criando o Projeto:

* Criar uma nova pasta no PC, com o nome do Projeto, que é o mesmo nome deste `Repositório`.
* Abrir o VSCode nessa pasta.
* Criar um novo arquivo README.md
* Dentro dele você pode editar o Readme de Acordo com o seu projeto e Salva o Arquivo.

### 📌 Agora vamos usar o Git:

* Abrir o Git Bash que foi instalado no PC (dentro da pasta criada, se clicar com o botão direito do mouse, consegue abrir o Git Bash no local).
* No Git Bash, digite `git init` para inicializar o repositório.
* Dentro da sua pasta foi criada uma pasta `.git`. Não apague essa pasta!
* Agora digite git add README.md para colocar o arquivo `Readme` que você criou, na área de stagging.
* Digite `git commit -m "primeiro commit"` para dar um commit no repositório.
* Digite `git branch -M "main"` para alterar o nome da branch principal de `master` para `main`.

### 📌 Criando o Repositório no Github:

* Depois de acessar sua conta no Github, você vai clicar em `Criar novo repositório`.
* Coloque onome no Projeto (Mesmo nome da Pasta Criada no PC), faça uma descrição e clique em criar.
* Logo após vai aparecer uma página com vários comandos, você deve apenas copiar o link que vai aparecer.
* Com o link criado, retorne para o Git Bash.
* Digite `git remote add origin <link do repositório>.
* Agora precisamos enviar o nosso Repositório Local para o nosso Repositóro no Github.
* Para isso digite `git push -u origin main`.
* Agora ao atualizar a página no Github iremos ver o nosso arquivo na plataforma!

### 📌 Editar ou adicionar algo no Repositório:

* Quando fizer alguma alteração lá no arquivo no VS Code, ou adicionar algo novo.
* No Git Bash, você deve digitar `git add .` (Quando colocamos ponto `.`, estamos mandando o Programa adicionar todos os arquivos).
* Agora digite  `git commit -m "Aqui escereva uma mensagem informanado que modificação você fez"`.
* Por fim, digite `git push origin main`para o  respositório do Github seja alterado.

### 📌 Editando o Branch:

* Para nosso Projeto precisamos criar um novo Branch, chamado "develop", onde será o ambiente de trabalho e sua entrega final se dará no Branch "main" que já existe em nosso Repositório.
* Para criar um novo Branch, no Git Bash digite `git checkout -b "develop".
* Quando fazemos isso, o Git Bash, já nos coloca automaticamente na nova Branch "develop", assim como o VS Code também.
* Agora o que for editado no VS Code, no Git Bash você deverá digita `git add .`e commitar com `git commit -m "develop"`.
* E para enviar para o Github, agora então usaremos `git push origin develop`.
* Se atualizar o Github, verá que existem agora dois Branchs.

### 📌 Merge:

* Como sabemos que a entrefa final do Projeto será na Branch "main", precisamos enviar nossos projetos finalizados no "develop", para a Branch Principal.
* Primeiro devemos retornar para nossa Branch Principal, para isso digite `git checkout main`.
* Agora para juntar a Branch "develop" à "main", digite `git merge develop`.
* Por fim, digite `git push origin main`, para mandar tudo para o Github.
