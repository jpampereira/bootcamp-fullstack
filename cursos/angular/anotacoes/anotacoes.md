# Anotações sobre Angular

- As anotações e imagens foram baseadas/retiradas nos cursos ministrados durante o Santander Bootcamp Fullstack Developer.

## Introdução

- Executar o seguinte comando, via terminal, para criação da base do projeto em Angular: `ng new <nome-projeto>`.

- Vai aparecer a seguinte mensagem: `Would you like to add Angular routing?`. Vamos digitar `No`, pois nesse primeiro momento não vamos adicionar o Módulo de Rotas.
- Em seguida selecionaremos o CSS como padrão de estilo.
- Então todas as dependências do projeto serão instaladas.

- Vamos entender um pouco sobre os principais arquivos e diretórios de um projeto Angular:

Arquivo/Diretório|Descrição
:---:|:---
`package.json`|Arquivo `.json` que contém todas as dependências do projeto no atributo `dependencies`. A medida em que novas dependências são instaladas, essas são automaticamente inseridas na lista. Podemos também configurar algumas dependências que vão ser utilizadas apenas durante a fase de desenvolvimento, em `devDependencies`. Outra possibilidade é a de criarmos *alias*, em `scripts`, para que seja possível executar comandos ou scripts através de atalhos. 
`angular.json`|Arquivo `.json` que armazena configurações globais da aplicação. Em `main`, indicamos o arquivo responsável pela inicialização da aplicação. Em `assets`, inserimos a parte estática da aplicação, como por exemplo, imagens. Em `styles`, indicamos os arquivos responsáveis pelos estilos globais, que serão propagados em todos os componentes. Em `index`, informamos a página base da aplicação.
`node-modules`|Contém os arquivos das dependências instaladas pelo Angular npm. Exemplo: Bootstrap.
`src`|Contém os arquivos que serão editados.
`src/main.ts`|Arquivo que, por padrão, realiza a inicialização da aplicação, carregando o módulo raiz (AppModule).
`src/index.html`|Arquivo que, por padrão, contém a página base da aplicação.
`src/style.css`|Arquivo que, por padrão, contém os estilos globais da página.
`src/assets`|Diretório que, por padrão, armazena os arquivos estáticos da aplicação.
`src/app`|Diretório que armazena os módulos e componentes da aplicação.

- Angular usa o modelo de SPA (*Single Page Application*), onde toda a aplicação é construída em cima de uma única página. O objetivo é fornecer para o usuário uma experiência semelhante à um aplicativo Desktop.

![SPA vs Traditional Web Page](./imagens/spa-vs-traditional-webpage.png)

- Para inicializar o projeto executamos o comando `ng serve -o`. O parâmetro `-o` é abreviação de `--open`, e ele indica que ao final do processo de compilação do projeto, o navegador web padrão do sistema operacional deve ser aberto para exibir a aplicação.

- Porta padrão: `4200`.

## Trabalhando com módulos e componentes

- O Angular trabalha de forma modular. Esses módulos funcionam como limitadores de contexto e nele são armazenados os componentes, que são a parte vísivel da aplicação e que trazem vida ao módulo.

Arquivo/Diretório|Descrição
:---:|:---
`src/app/app.module.ts`|Módulo raiz da aplicação, que engloba todos os componentes. No *Decorator* `@NgModule`, em `declarations` são declarados todos os componentes pertencentes à aquele contexto, assim como importados outros módulos utilizados, em `imports`. Em `boostrap` indicamos o componente pai, que engloba os demais componentes da página. 
`src/app/app.component.ts`|Componente pai da aplicação. No arquivo, há um *Decorator*, onde são armazenadas informações relacionadas ao componente, como indicar os seus templates de estilo internos (`styleUrls`), o html do componente (`templateUrl`), além do `selector`, que serve, a grosso modo, para mapear uma tag HTML à esse componente. Nesse arquivo também há uma classe, que deve ser declarada como `NomeDoComponente + 'Component'` em formato Camel Case, onde podemos exportar informações que podem ser utilizadas por outros componentes e pelo seu próprio HTML.
`src/app/app.component.html`|Documento HTML do componente pai.
`src/app/app.component.css`|Documento CSS do componente pai. Essas configurações surtirão efeito apenas dentro do componente e seus filhos.

- *Decorator* dos Módulos:

```
@NgModule({
  declarations: [...],
  imports: [...]
  boostrap: [...]
})
```

- *Decorator* dos Componentes:

```
@Component({
  selector: '...',
  templateurl: '...',
  styleUrls: [...]
})
```

- Criamos em `src/app`, os diretórios que representam cada um dos Componentes da aplicação. A boa prática indica que o nome desse diretório deve deixar claro o que aquele componente representa. Esse diretório irá conter os mesmos tipos de arquivos apresentados na seção anterior. 

- Exemplo: Componente que exibirá uma lista de cursos.
    - Nome do diretório: `app/courses`;
    - Arquivo de componente: `app/courses/courses.component.ts`;
    - Nome da classe do componente: `CourseComponent`;
    - Arquivo HTML do componente: `app/courses/courses.component.html`;
    - Arquivo CSS do componente: `app/courses/courses.component.css`.

- O `selector` do Componente deve levar o mesmo nome. Uma convenção é utilizar o prefixo `app-` para identificarmos aquele Componente como um personalizado, e não como um nativo da linguagem ou importado por alguma biblioteca. Exemplo pro caso de course: `app-course`.

- Você pode criar os componentes com um único comando: `ng g c <nome-componente>`. Com isso, um diretório será criado em `src/app` levando o nome do Componente e já contendo todos os arquivos apresentados anteriormente. 

- Se na criação do projeto adicionarmos a flag `--prefix=spa`, toda vez que a gente criar um Componente com o comando indicado acima, seu `selector` possuíra o prefixo `spa-`.

- Podemos importar componentes prontos através da biblioteca Angular Material, que pode ser instalada através do seguinte comando: `ng add @angular/material`.


## Data Binding

- O Angular fortifica o HTML e lhe da ainda mais poderes/recursos.

![](imagens/data-binding.png)

- Através da **Interpolação**, conseguimos inserir valores das variáveis dos Componentes dentro do HTML: 

```
<tag>{{ <atributo> }}</tag>
```

- Quando queremos passar o valor da variável de um Componente para dentro do atributo de uma tag HTML, devemos colocar essa tag entre colchetes, para que o HTML entenda isso. Exemplo: a classe do nosso Componente possui um atributo `imageuRL` que armazena o URL de uma imagem que deve ser exibída no site. Para que o caminho da imagem seja inserido dentro de `<img>`, devemos colocar a propriedade `src` entre colchetes.

```
<img [src]="imageUrl">
```

- Podemos mapear uma função do nosso componente para ser executada quando uma tag atinge determinada condição/estado. Exemplo: nosso Componente possui uma função chamada `save` que salva as alterações do formulário quando o mesmo é submetido. Para isso podemos fazer: 

```
<button (click)="save">Save</button>
```

- Com o conceito de **Two Way Data Binding** permite exibirmos e alterarmos, a partir de uma tag HTML, o valor de uma variável do do Componente. Exemplo: queremos exibir o valor de uma variável da Componente dentro de uma tag `<input>`, assim, o usuário poderia visualizá-la e caso altera-se o valor contido nesse campo, automaticamente o valor da variável era atualizado. 

```
<input [(NgModel)]="<variavel>">
```

- Existe também o conceito de **One Way Data Binding**, semelhante ao apresentado anteriormente, com a diferença de que ele permite apenas exibirmos, a partir de uma tag HTML, o valor de uma variável do Componente. Ou seja, se utilizarmos essa técnica dentro de uma tag `<input>`, como no exemplo anterior, o valor da variável seria exibido dentro do campo, mas caso o usuário o altera-se, o valor da variável não era atualizado. 

```
<tag [NgModel]="<variavel>">
```

## ngFor e ngIf 

- Imagine um caso hipotético onde desejamos inserir dinamicamente uma tabela em nosso site. Utilizando JavaScript, criariamos uma função que receberia a lista de todos os valores que devem ser incluídos na tabela e iterariamos sobre ela, utilizando uma estrutura de repetição, onde criariamos a estrutura da tabela e adicionaríamos no HTML da página utilizando funções de manipulação da DOM como `createElement` e `insertChild`. O Angular, pra evitar toda essa escrita de código, possui uma diretiva chamada `*ngFor`, que você adiciona na tag que você deseja iterar, e essa e todo seu conteúdo interno serão duplicados.

```
		<tr *ngFor="let element of list">
			<td>{{ element.attr1 }}</td>
			<td>{{ element.attr2 }}</td>
			<td>{{ element.attr3 }}</td>
			<td>{{ element.attr4 }}</td>
		</tr>
```

- Serão geradas `list.length` linhas na tabela, cada uma delas correspondente a um elemento da lista.

- Podemos também exibir ou não uma tag e suas tags filhas dada uma condição, utilizando a diretiva `*ngIf`.

## Event Emitter

- Podemos passar passar valores de variáveis entre Componentes utilizando as diretivas `@Input()` e `@Output()`. Utilizamos o primeiro caso quando queremos passar o valor de um Componente pai para o filho e o segundo caso quando ao contrário.

- Exemplo: temos um `Componente A` pai com a variável `valorA = 10` e um `Componente B` filho com a variável `valorB = 20`. 
  - Para sobrescrevermos o valor de `B`, inserimos a diretiva `@Input()` no corpo da sua classe, o que habilita que suas variáveis sejam manipuladas pelo seu Componente Pai. Para passar o valor, utilizamos a ideia de *Data Binding* no `selector` do `Componente B`:
      ```
      <componente-b [valorB]="valorA"></componente-b>
      ```
  - Para sobrescrevermos o valor de `A`, inserimos a diretiva `@Output()` no corpo da sua classe, o que habilita que suas variáveis sejam manipuladas pelo seus Componentes Filhos. Para passar o valor, utilizamos a ideia de *Data Binding* no `selector` do `Componente A`:
    ```
    <componente-a [valorA]="valorB"></componente-a>
    ```


## Lifecycle Hooks

- Todo componente no angular tem um conjunto de eventos de ciclo de vida (Lifecycle Hooks) que ocorrem quando um componente é criado, renderizado, tem o valor de suas propriedades alteradas ou é destruído. o Angular invoca uma séries de métodos (Hooks), que são executados no momento em que esses eventos são acionados.

- Exemplos são o `OnInit` e o `OnChanges`, que quando implementados nas classes de Componentes, permitem definirmos seus comportamento quando o Componente e inicializado e quando há uma mudança de estado, respectivamente.

## Services e Injeção de Dependências

- Uma boa prática é que sempre que formos criar um arquivo, que seu nome expresse o que ele realmente faz. Ou seja, se ele for um componente, inserir `component` no nome, ou se for um módulo, inserir `module`. Outro caso é quando queremos criar um script que vai prover um serviço (por exemplo, requisições HTTP á uma API), então adicionamos a palavra `service` no nome.

- Logo, utilizando o exemplo de um componente que exibe uma lista de cursos, o nome do arquivo de serviços ficará como: `course.service.ts`. Esse arquivo também deve ficar dentro do diretório do seu componente correspondente, dentro de `src/app`.

- A ideia é que criemos serviços que fornecem dados para os componentes, quando solicitados.

- Fazemos a injeção de dependências utilizando o *Decorator* `@Injectable` no arquivo do serviço, e inserimos a propriedade `providedIn: root` para que esse serviço seja carregado assim que o módulo raiz for inicializado (É possível determinar em qual módulo o serviço será carregado, mas esse é um assunto mais avançado). Assim, quando o módulo raiz for inicializado, uma única instância desse serviço será criada e ficará disponível para uso por parte dos componentes pertencentes a esse módulo.

```
@Injectable({
  providedIn: root
})
```

- Para ter acesso a todos os recursos de um serviço, o componente deve invocá-lo através do construtor de sua classe.

```
constructor(private courseService: CourseService) { }
```

- Nesse momento, `courseService` é um atributo da classe do componente, que armazena todos os recursos que a classe `CourseService` do serviço dispõe.

- Não é interessante mantermos variáveis que podem ter seu valor alterado dentro de uma classe de um serviço injetável, já que está é compartilhada entre vários componentes. O ideal é que hajam apenas métodos que realizam operações e no máximo constantes.
  
## Pipes

- Utilizamos Pipes para alterar a forma de exibição de alguma propriedade do nosso Componente.

- Existem Pipes nativos do Angular, como o `date`, que nos permite formatar datas e o `lowercase`, que permite alterarmos todos os caracteres de uma propriedade para caixa baixa.

- Seguindo o padrão para nome de arquivos, devemos deixar claro o propósito do script. Exemplo: Queremos criar um Pipe para fazer a substituição de caracteres de uma string (exatamente como um `String.replace()` em JavaScript faz). Nesse caso, devemos criar um arquivo dentro do diretório `src/app/pipe` com o nome de `replace.pipe.ts`.

- Para indicarmos que aquele arquivo corresponde a um Pipe, devemos utilizar um *Decorator* `@Pipe` e dentro dele indicarmos o nome do pipe, através da propriedade `name`.

```
@Pipe({
  name: 'replace'
})
```

- A classe `ReplacePipe` deve implementar o método `transform` de `PipeTransform`, onde é especificado o que aquele Pipe faz.

## Rotas

- Em uma SPA, precisamos navegar pelos componentes para acessar diferentes conteúdos do site. Essa navegação é realizada através do módulo de rotas.

- Não utilizaremos mais tags personalizadas para identificar o ponto onde os componentes são dispostos, ou seja, não será mais preciso o uso da propriedade `selector` dentro dos *Decorators* `@Component`. Vale ressaltar que isso é apenas para os componentes que representam seções do site. Ou seja, componentes que estão dentro de outros componentes continuarão usando a propriedade `selector` e sendo dispostos no HTML através de tags personalizadas.
  
- Utilizaremos a tag `<route-outlet>` para identificar no site o ponto onde será feita a troca (*switch*) de Componentes.

- É necessário importa o Módulo de Rotas em `app.module.ts`.

- Na importação do Módulo, é utilizado o método `forRoot`, que recebe objetos que representam as rotas da nossa aplicação.

Existem duas rotas padrões no Angular, a rota com **string vazia**, que representa a rota quando nenhum caminho é passado na requisição do site e o **\*\***, que é quando há a tentativa de acessar um **conteúdo que não existe**.

```
imports: [
  .
  .
  .
  RouterModule.forRoot([
    { path: '', redirectTo: 'initialContent', pathMatch: 'full' },
    { path: 'initialContent', component: initialContentComponent },
    { path: '**', component: Error404Component}
  ])
  .
  .
  .
],
```

- Em `path` especificamos o caminho passado na URL e em `component`, qual o componente correspondente a aquela rota, que será alocado em `<route-outlet>`.

- No caso da rota onde não foi passado nenhum caminho, o browser é redirecionado para o conteúdo contido na Componente `InitialContentComponent`.

- Para alterar a rota ativa (ou seja, alterar o componente ativo) através de uma tag de link, utilizamos a seguinte propriedade: `<a [routerLink]="['path', 'pathVariable']"></a>`. Em `path`, passamos a nova rota, enquanto `pathVariable` é opcional, onde você pode passar algum parâmetro, como por exemplo, o id do produto que você deseja exibir.

- Se optarmos por adicionar o Módulo de Rotas na criação do projeto, será criado um arquivo chamado `app-routing.module.ts` em `src/app`, onde podemos listar todas as rotas da nossa aplicação, em um arquivo separado.

## Formulários e variáveis de template

- Podemos utilizar **variáveis de template** para armazenar valores de variáveis do componente ou diretivas do Angular, dentro de tags HTML. Exemplo: Queremos pegar a propriedade `ngForm` para manipular o formulário do nosso site (exemplo: verificar se todos os campos do formulário são válidos). Para isso podemos fazer: `<form #myForm="ngForm">...</form>`, sendo `#myForm` a variável de template.

- A propriedade `[ngClass]` permite a manipulação do css de elementos.

## HTTP

## Módulos

- Como já explicado anteriormente, os módulos funcionam como limitadores de contexto. Logo, é uma boa prática segregar os componentes da sua aplicação em módulos para que esses consigam fazer comunicação apenas com aqueles que fazem parte de um mesmo contexto.

- Analogia: O Módulo Raiz é uma casa, e os Módulos Filhos funcionam como os cômodos da casa. Os objetos existentes em cada um desses cômodos são os Componentes, que fisica,emye fazem parte apenas daquela área (contexto).

- Seguindo o exemplo de um componente que lista cursos de uma plataforma, o nome do arquivo de módulo deve ser: `src/app/courses/courses.module.ts`.

- No *Decorator* desse módulo, devem ser declarados todos os Componentes utilizados internamente, assim como outros módulos.

- Nesse momento, os componentes desse módulo podem ser removidos do módulo raiz e seu nome inserido na lista de módulos (vai dar erro se você manter os componentes declarados tanto no Módulo Raiz quanto no Filho).

- Error comuns na criação de módulos:
  - Manter o componente declarado tanto no módulo raiz quanto no seu módulo personalizado;
  - Não importar o módulo `CommonModule` que contém as funcionalidades básicas do Angular.

## Diretório shared

- Como forma de organização dos arquivos da nossa aplicação, podemos criar um diretório com o nome `src/app/shared`, onde serão armazenados todos os Componentes e Pipes que podem ser reutilizados em diferentes contextos da aplicação.

- Os Componentes ficarão em `src/app/shared/components` e os Pipes em `src/app/shared/pipes`. Cada um dos Componentes terá seu próprio diretório.

- É interessante que cada Componente de `src/app/shared` seja declarado como um Módulo, havendo uma segregação de responsabilidade dentro da estrutura do projeto e fazendo com que declaremos apenas aquilo que de fato precisamos usar. Esse formato já é utilizado pelo próprio Angular, por exemplo, quando queremos realizar requisições HTPP, utilizamos o HttpModule, ou quando queremos manipular formulários, utilizamos o FormsModule.

- A príncipio os Pipes podem estar todos dispostos em um mesmo Módulo, porém, se você perceber que estão sendo gerados muitos Pipes, e cada um deles com contexto bem específico, então torna-se interessante assumir o mesmo modelo utilizado em Componentes, onde cada Pipe (ou conjunto de Pipes) possui seu próprio diretório e são divididos em Módulos diferentes.  

## Diretório core

- Podemos criar também o diretório `src/app/core`, onde serão armazenados os Componentes mais robustos, que possuem mais regras de negócio internas, e que dificilmente são compartilhados em diferentes contextos.

- Para cada um desses componentes, são criados Módulos.

## Links

[Documentação Angular](https://angular.io/docs)
[Angular Material](https://material.angular.io/)