# Anotações sobre TypeScript

Anotações feitas durantes os cursos de TypeScript ministrados no Santander Bootcamp Fullstack Developer e do [Mini-curso de TypeScript](https://www.youtube.com/watch?v=mRixno_uE2o&list=PLlAbYrWSYTiPanrzauGa7vMuve7_vnXG_).

## Introdução

- É um superset (extensão) do JavaScript;
- Adiciona novas features ao JavaScript;
- Basicamente, tipagem estática (ou seja, definimos o tipo da variável na sua declaração, como é feito em linguagens como Java e C);
- Compila (na verdade, é um transpilador) para JavaScript para ser interpretado;
- Permite adoção gradual (arquivos `.ts` convivem com `.js`);
- Criada pela Microsoft;
- Alguns consideram TypeScript uma linguagem de programação, enquanto outros consideram ele apenas um superset;
    - Cada um acha o que quiser!
    - C++ já foi considerado um superset de C.

### Por que usar TypeScript

1. Evita resultados inesperados: por ser uma linguagem de tipagem dinâmica, erros como o do exemplo abaixo podem ocorrer no JavaScript:

    ```
    function sum(a, b) {
        return a + b;
    }

    sum(1, 2) // 3
    sum('1', '2') // 12?
    ```

- Por ter tipagem estática, o TypeScript não permitira que a segunda operação fosse realizada, e reportaria o erro.

2. Reporta, durante a fase de escrita do código, caso o desenvolvedor esteja fazendo algo de errado.

3. Já funciona como uma espécie de primeira documentação:

    ```
    type Platform = 'Windows' | 'Mac OS' | 'Linux'
    type Feature = 'Single Player' | 'Multiplayer' | 'Co-op'

    interface GameDetails {
        id: number;
        title: string;
        description: string;
        platforms: Platform[];
        features: Feature[];
    }
    ```

- Só de ler o código acima, você consegue entender como quais tipos e valores os atributos da interface trabalham.

4. Deixa a sua IDE extremamente poderosa: o TypeScript vai te auxiliar durante a escrita de código mostrando as opções de métodos existentes para cada tipo e evitando que você escreva coisas erradas.

5. Compila um JavaScript mais resiliente e com isso, ajuda a desenvolver boas práticas de programação.

6. Detecta erros durante a compilação que seriam percebidos apenas em execução no JavaScript.

### Desvantagens

- Necessita ser compilado;
- Aprendizagem inicial dos tipos e boas práticas;
- Erros nem sempre muito claros ou então muito grandes.

*Se você sabe JavaScript, sabe TypeScript!*





## Mitos e verdades

- *"Vou ter que aprender tudo de novo."*
    - Mentira, pois TS utiliza a sintaxe do JS e apenas adiciona algumas funcionalidades, como interfaces, tipos, Generics etc.

- *"Vou precisar reescrever tudo para TS."*
    - Mentira, a adoção pode ser gradual, já que arquivos `.ts` convivem com `.js`.

- *"Já escrevo testes, não preciso disso."*
    - Mentira, se você já escreve testes, você já possui uma camada de segurança, mas ele nem sempre prevê todos os casos, por isso a importância do TS.

- *"Só funciona com POO."*
    - Mentira, pode ser usado com paradigma funcional.

- *"Ele é verboso demais, precisa tipar tudo."*
    - Mentira. Claramente você escreve um pouco a mais, mas o TS utiliza inferência para casos onde ele sabe o tipo do valor esperado, não sendo necessário definir um tipo.

- *"Só serve para projeto grande."*
    - Mentira, pode ser utilizado em qualquer projeto.

- *"É só usar PropTypes que dá na mesma."*
    - PropType permite definir os tipos das variáveos, mas não bloqueia o código em caso de infração (o máximo que ele vai fazer é dar um *warning*, que pode ser ignorado).

## Instalando o compilador e escrevendo primeiro código

- Para compilar um arquivo `tsc <nome-arquivo>.ts -- watch`.
    - O parâmetro `--watch` faz com que o compilador seja executado toda vez que houver uma alteração no script em questão.

    ```
    const num1 = window.document.getElementById('num1') as HTMLInputElement;
    const num2 = window.document.getElementById('num2') as HTMLInputElement;
    const button = window.document.getElementsByTagName('button')[0];

    function sum(a: number, b: number) {
        return a + b;
    }

    button.addEventListener('click', () => {
        console.log(sum(Number(num1.value), Number(num2.value)))
    });
    ```

- No código acima, podemos ver um caso da inferência realizada pelo TS: não foi necessário declararmos o tipo de retorno da função, pois o TS consegue determinar, por inferência, que o retorno da soma de dois números, sempre será um número.

- Não é uma boa prática tipar tudo: se a IDE e o compilador não reclamaram, então deixa quieto!

- Mas por que o tipo de `input` foi declarado com o uso da palavra reservada `as`?
    - Métodos como `getElementById` retornam o tipo genérico HTMLElement, que não possui propriedades como `.value`, utilizado no exemplo;
    - Logo, precisamos converter esse tipo para ser coerente com a tag que estamos acessando e manipulando. 
    - Se fizermos `let input: HTMLInputElement = ...`, ocorrerá um erro, já que `input` espera um tipo e `getElementById` retorna outro. 
    - Quando utilizamos o `as` depois de `getElementById`, estamos garantindo que o valor atribuído à `input` será um `HTMLInputElement`.

## Criando e configurando TSConfig

- O TSConfig é um arquivo no formato `.json`, que permite configurarmos algumas opções do processo de compilação do nosso projeto, como o diretório onde os arquivos compilador devem ficar disponíveis, a versão do ECMA utilizada etc.

- Para iniciar o arquivo, devemos dar o seguinte comando dentro do diretório raiz do nosso projeto: `tsc --init`.

- Após configurar esse arquivo, basta executar o comando `tsc` que todos os arquivos `.ts` do projeto serão compilados utilizando essas configurações.
    - Se você compilar um arquivo individualmente, as configurações do TSConfig não serão aplicadas.

- Algumas propriedades do arquivo:
    - `target`: define a versão do ECMA que será utilizada para gerar o `.js`;
    - `lib`: definir libs que devem ser inseridas na compilação;
    - `outDir`: definir onde os arquivos `.js` gerados no processo de compilação serão armazenados (a convenção é definirmos um diretório chamado `dist` para armazenar esses arquivos);
    - `rootDir`: definir o diretório raiz dos arquivos `.ts` que serão compilados.

## Types

- Como declarar uma variável: `let <nome-variavel>: <tipo>;`.

- Olhar o arquivo `types.ts` para ver os tipos existentes, com exemplos.

## Type Inference

- Você precisa tipar apenas o que o TS não conhece ou o que o desenvolvedor não saberia identificar;

- Boa prática: evite redundâncias!

- No código abaixo vemos uma redundância. Se você, na declaração da variável, atribui uma string literal a ela, você não precisa declarar o seu tipo, pois o TS consegue determinar por inferência o seu tipo e também está claro para o programador.

    ```
    let message: string = 'Hello world!';
    ```

- No código abaixo, não é necessário informar o tipo de `e`, pois o TS sabe o tipo de retorno que esperar de `addEventListener`.
    - Por saber o tipo de retorno desse método, ele até te da as opções de atributos e métodos que `e` possui.

    ```
    button.addEventListener('click', (e) => {
        console.log(e.target);
    });
    ```


## Type Aliases e Union

- Imagine que você tenha uma função que recebe o id de um usuário, porém, esse id pode vir tanto como `number` quanto `string`. Na hora de declarar o tipo do parâmetro, podemos utilizar um operador chamado `Union`, para determinar todas as possibilidades de tipo desse parâmetro.
    - O `Union` é representado por um Pipe.

    ```
    function logInfo(uid: number | string, user: string) {
        console.log(`An user with ${uid} has a name as ${user}.`);
    }
    ```

- Logo, `uid` será do tipo `number` **OU** `string`.

- Podemos criar um apelido para `uid`, assim não precisamos ficar toda hora escrevendo `number | string`.
    - Chamamos isso de Type Aliases.

    ```
    type Uid = number | string;

    function logInfo(uid: Uid, user: string) {
        console.log(`An user with ${uid} has a name as ${user}.`);
    }
    ```

- Então podemos reaproveitar `Uid` em todo o código.

- Podemos também usar o Type Aliases para delimitar os possíveis valores de um tipo.

    ```
    type Platform = 'Windows' | 'Mac OS' | 'Linux';

    function renderPlatform(platform: Platform) {
        return platform;
    }
    ```

- Quando chamar a função `renderPlatform`, só será possível passar no argumento um dos valores determinados na declaração de `Platform`. Qualquer coisa diferente dessas opções, o TS reportará um erro.


## Estendendo Type Aliases com Intersection

- Enquanto o `Union` é utilizado para determinar que uma variável pode ter um valor x **OU** y, o `Intersection` é utilizado para informar que deve ser x **E** y.

- Ele é utilizado para determinar tipos mais complexos, como interseção de objetos.

- Ver o arquivo `user.ts` para entender melhor.

## Classes

- A sintaxe de classes é a mesma utilizada no JS.
    - Uma das funcionalidade adicionais são os modificadores nos atributos, como `private`, `protected` e `readonly`.

1. `public` (padrão): os atributos podem ser acessados e modificados dentro ou fora da classe;
2. `private`: os atributos só podem ser acessados e modificados dentro da própria classe;
3. `protected`: os atributos só podem ser acessados e modificados pela sua classe e suas subclasses;
4. `readonly`: os atributos podem ser acessados dentro ou fora da classe, mas não podem ser modificados em hipótese alguma.

- Outra funcionalidade é criar classes abstratas, utilizando a palavra reservada `abstract` antes de `class`.
    - Classes abstratas são classes que não podem instanciadas, apenas extendidas.

## Interfaces

- Utilizamos as interfaces para descrever a estrutura de objetos.
    - Os métodos não são definidos, apenas sua assinatura é declarada. A escrita do método é feita na sua instanciação ou na sua implementação nas classes.

- Podemos utilizar modificadores nas suas propriedades:
    - `readonly` para somente leitura;
    - `?` para definir como opcional (pode ser utilizado em classes também).

- Podemos extender uma ou mais interfaces, como nas classes, usando o `extends`.

- Podemos implementar interfaces em classes utilizando a palavra reserbada `implements`.

- Ver arquivo `interfaces.ts` para ver a aplicação.


## Type Alias vs Interface

- O Type Alias pode ser utilizado para criar tipos personalizados a partir de tipos primitivos ou objetos, enquanto as interfaces se limitam a objetos.
    - Geralmente utilizamos Type Alias para estruturas mais simples e Interfaces para coisas mais complexas.

- O Type Alias permite apenas uma declaração por escopo, enquanto Interfaces permitem múltiplas declarações e as une.

- No exemplo abaixo, o TS reporta um erro:

    ```
    type JQuery = { a: string };
    type JQuery = { b: string };
    ```

- No exemplo abaixo, o TS faz um *merge* das interfaces:

    ```
    interface JQuery {
        a: string;
    }

    interface JQuery {
        b: string;
    }

    const $: JQuery = {
        a: 'foo',
        b: 'bar'
    }
    ```

- O fato de permitir múltiplas declarações é uma vantagem de interfaces em casos onde estamos construindo libs extensíveis.

- Por outro lado, o fato de não permitir múltiplas declarações é uma vantagem de Type Alias em questões de segurança.

- Não existe melhor ou pior, o que importa é consistência, ou seja, use apenas um deles.
    - Via de regra, vamos optar por utilizar Type Alias e deixar pra utilizar Interfaces em projetos POO.

## Generics

- Uma das coisas mais importantes no desenvolvimento é o reaproveitamento de código a partir de funções.
    - Torna o código menor;
    - Menor área de impacto em casos de tratativa de bug.

- Logo, criar funções genéricas potencializam esse reaproveitamento.

- *Generics* nos permitem criar funções sem fixarmos o tipo dos argumentos, suas propriedades internas ou seu retorno.

- Funções *Generics* retornam, por padrão, o tipo `unknown`:
    - `unknown`, assim como `any`, não possui um tipo definido, como `string`, `number`, `boolean` etc., podendo ser qualquer coisa;
    - A diferença é que o tipo `any` permite a alteração do tipo da variável ao longo da execução, enquanto `unknown`, a partir do momento em que houve a primeira atribuição de valor, seu tipo não é possível de alterar.

- Podemos declarar tipos genéricos na assinatura da função, utilizando `<>` logo após o seu nome.

- Os nomes desses tipos genéricos podem ser qualquer um a sua escolha, porém, costuma-se utilizar um padrão:

    Símbolo|Significado
    :---:|:---:
    S|State
    T|Type
    K|Key
    V|Value
    E|Element

- Podemos limitar os possíveis tipos desse tipo genérico, utilizando a palavra reservada `extends`.

- Podemos definir um tipo padrão para esse genérico.

    ```
    function useState<S extends number | string = string>() {
        ...
    }
    ```

- Na chamada da função, podemos informar o tipo genérico (senão será adotado o padrão ou feita a inferência).

    ```
    useState(); // S = string (padrão)
    useState<number>(); // S = number
    ```

## Type Utilities

- Esses utilitários permitem fazer operações em cima dos tipos. Veremos os mais comuns.

### Readonly

- Permite tornar todos os atributos do objeto para o modo de apenas leitura.

    ```
    type Todo = {
        title: string;
        description: string;
        completed: boolean;
    }

    const todo = Readonly<Todo> = {
        title: 'Fazer curso de TS',
        description: 'Aprender sobre Type Utilities',
        completed: false
    }
    ```

- O `Readonly` (e outros utilitários) não mexe na estrutura do tipo `Todo`. Essa operação retorna um outro tipo, semelhante a `Todo`, mas com uma diferença: todos os seus atributos são apenas de leitura.
    - Ou seja, caso criemos outro objeto, logo em seguida, do tipo `Todo`, mas sem utilizar o utilitário `Readonly`, todas as propriedades desse objeto são mutáveis.

### Partial

- Torna todas as propriedades do tipo opcionais.

    ```
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        return { ...todo, ...fieldsToUpdate };
    }

    const todo2: Todo = updateTodo(todo, { completed: true });
    ```

- Como o `todo` é imutável, precisamos replicar o objeto e alterar o que queremos, que é exatamente o que `updateTodo` faz.
    - No parâmetro `fieldsToUpdate`, passamos um objeto apenas com as propriedades que desejamos alterar e seus novos valores;
    - Porém, se `fieldsToUpdate` fosse do tipo `Todo`, um erro aconteceria, pos estariamos passando um objeto com apenas uma propriedade, quando na verdade, `Todo` possui três propriedades obrigatórias;
    - Logo, usamos o `Partial` para que seja possível passarmos apenas as propriedades que desejamos alterar.

### Pick

- Retorna um tipo apenas com os atributos passados como parâmetro e descarta os demais.

    ```
    type TodoPreview = Pick<Todo, 'title' | 'completed'>;

    const todo3: TodoPreview = {
        title: 'Fechar ghost of Tsushima',
        completed: false
    }
    ```

- O tipo `TodoPreview` possui apenas as propriedades que foram passadas como parâmetro em `Pick`.
    - Logo, `TodoPreview` não possui a propriedade `description`.

### Omit

- Retorna um tipo sem os atributos passados como parâmetro.

- Lógica inversa do `Pick`.

    ```
    type TodoPreview2 = Omit<Todo, 'description'>;

    const todo4: TodoPreview2 = {
        title: 'Fechar ghost of Tsushima',
        completed: false
    }
    ```

- Para decidir se você usa o `Pick` ou `Omit`, faça a seguinte pergunta: eu quero mais descartar ou coletar propriedades?
    - Coletar mais => Use `Omit`;
    - Descartar mais => Use `Pick`;

- Voltando no assunto sobre `Generics`... Olha como a documentação do Type Utility `Omit` descreve a função:

    ```
    type Omit<T, K extends string | number | symbol> { ... }
    ```

- Olha os símbolos utilizados na assinatura da Generic... Exatamente como o padrão já apresentado.
    - T = Type => Todo;
    - K =  Key => 'description'.