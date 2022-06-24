# COMANDOS BÁSICOS E ANOTAÇÕES SOBRE GIT VIA LINHA DE COMANDO

## Configurações locais

1. Configurar usuário: 

		git config --global user.name "Seu nome cadastrado no GitHub"
  
2. Configurar e-mail:

		git config --global user.email "Seu email no GitHub"

3. Criar chave SSH:

		ssh-keygen -t rsa -b 4896 -C <Seu email do GitHub>

   - Vão ser solicitadas algumas informações e você pode só apertar **enter** em todas.
 
   - Você deve adicionar essa chave SSH gerada no seu GitHub para vincular sua conta com a máquina local. Assim, você precisará inserir sua senha uma única vez e então sua máquina sempre realizará a autenticação via chave SSH.

4. Conectar no GitHub:

		ssh -T git@github
   
- Caso você troque de máquina ou queira associar novas máquinas a mesma conta do GitHub, esse processo precisa ser repetido.


## Setup do seu repositório

- Uma boa prática é manter um reposítorio por projeto ou projetos com mesmo contexto.

5. Clonar o repositório para sua máquina local: 

		git clone <URL do repositório no GitHub>

6. Criar repositório localmente:

		git init

   - O comando transforma o diretório de trabalho da máquina local em um repositório Git, criando internamente um diretório chamado `.git`, contendo todos os arquivos de versionamento do projeto.

7. Vinculando o repositório local à um remoto:

		git remote add origin <URL do repositório no GitHub>

   - Na verdade, o que esse comando faz é associar a url do repositório remoto a um alias (apelido), para facilitar a escrita dos comandos para o usuário.

   - É possível vincular mais de um repositório remoto ao mesmo repositório local.
  
   - O alias **origin** é apenas uma convenção, porém, é possível dar qualquer nome ao repositório.

8. Listando todos os repositórios remotos vinculados ao repositório local:

		git remote -v

## Comandos do dia-a-dia

9. Fazer a cópia do que está no repositório do GitHub para a máquina local:
  
		git pull <alias-repositorio> <branch>

   - Caso exista algum conflito entre a versão local e o repositório online, uma mensagem informando será impressa na tela.
   
   - Em ambientes empresariais, sempre trabalhamos ao menos com duas branchs: uma de produção, que geralmente leva o nome de **master** ou **main**, além de uma para desenvolvimento. Enquanto estivermos fazendo o desenvolvimento, os commits devem ser realizados na branch de desenvolvimento. Assim que o código tiver sido testado e homologado, é possível enviarmos o código desenvolvido para a branch principal.

10. Verificar se existe alguma alteração que precisa ser commitada:

		git status

11. Adicionar arquivo ou diretório que precisa ser commitado a fila:
    
		git add <arquivo/diretorio>

    - Se você fizer `git add .` ou `git add *` todos os arquivos que foram modificados serão adicionados a fila.

12. Commit da versão LOCAL definitiva:
    
		git commit -m "Mensagem que descreve aquele commit"

13. Upload da última versão commitada no seu repositório local para o repositório do GitHub:
    
		git push <alias-repositorio> <branch>

    - Uma boa prática é sempre darmos um `pull` logo após o `commit` e antes de um `push`. Com isso salvamos o nosso código que sabemos que está funcionando e evitamos a possibilidade de sobrescrevermos códigos que foram alterados entre o período de `pull` e `push` e que não estão no nosso código.

    - Commitamos apenas coisas significativas/fechadas. Cada commit é uma efetivação de elementos relevantes, ou seja, mudanças que podem afetar seu software de forma efetiva.

    - Para que alguém tenha permissão para commitar no seu repositório, você precisa adicionar essa pessoa como **colaborador** do mesmo.

14. Verificar o histórico de commits do repositório: 

		git log

15. Retornar o arquivo para a última versão commitada:

		git checkout -- <arquivo>


## Contribuindo com outros projetos

- Uma prática muito comum no mundo open source é a colaboração de diferentes desenvolvedores em projetos, mesmo que estes não façam parte da organização responsável ou não conheçam os desenvolvedores que o mantém.

- Para colaborar em um projeto disponível, precisamos realizar, via GitHub, um **Fork**, que significa criar uma ramificação desse projeto. A partir dessa ramificação nós podemos criar melhorias e disponibilizá-las aos mantenedores do repositório original, ou podemos customizá-la a ponto de se tornar um novo projeto. Exemplo: o MariaDB é um fork do MySQL.

- A ação de fork criará uma cópia do repositório original no seu próprio perfil do GitHub. É importante entender que nesse caso não deve ser utilizado o comando `git clone`, uma vez que esse não mantém o vínculo entre o projeto original e a sua versão.

- Agora é possível fazer um `pull` do fork criado no seu perfil para a sua máquina local, realizar as alterações, testá-las, commitá-las e por fim, enviá-las para o SEU repositório do GitHub.

- Uma vez com essas alterações presentes no seu GitHub, caso você deseje enviá-las para os mantenedores do projeto original para que esses façam proveito do seu trabalho, é possível, através da plataforma, fazer um **Pull Request**. Nele você especifica quais alterações foram realizadas e os mantenedores podem optar por aceitar as suas alterações e integrá-las ao projeto oficial, ou negá-las.

- É importante que você mantenha as boas práticas de fazer um `pull` antes de enviar a última versão através da Pull Request, e que você realize todos os problemas de conflitos antes de enviá-lo, para não deixar a cargo do mantenedor do projeto decidir o que deve ser mantido e o que deve ser descartado.


## Outras anotações

- Git/GitHub não é apenas para desenvolvedores.

- No **README.md** deve haver uma especificação do projeto, apresentando-o e mostrando como executá-lo.

- O arquivo **.gitignore** lista todos os arquivos e/ou extensões que podem ser ignorados na hora do commit.


## Links importantes

- [Blog do Professor Isidro](https://www.professorisidro.com.br/manual-de-sobrevivencia-do-github/)

- [Manual de Sobrevivência do GitHub (Parte I)](https://www.youtube.com/watch?v=wh6HW3rDoWs)

- [Manuel de Sobrevivência do GitHub (Parte II)](https://www.youtube.com/watch?v=_XuFI4ClKhw)
