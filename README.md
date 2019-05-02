## Comandos importantes do curso

| Comando | O que faz ?
|---|--|
| `npm i -g create-react-app`| Comando para instalar globalmente a ferramenta que ajuda na configuração de um projeto react,a versão 2.1.8 fora usado nesse projeto |
| `create-react-app {nameApp}`| Comando da ferramenta instalada logo acima para criar um projeto com todas as configurações já prontas para o desenvolvimento(Webpack e etc...) |


## Definições

| Conceito | O que é ?
|---|--|
| `JSX`| Na prática, é escrever código em HTML dentro de um arquivo JavaScript e para esse código ser interpretado pelo Browser, é feito uma conversão desse mesmo código parecido com HTML para funções nativas de JavaScript |
| Sobre passar valor boleano para algum componente| Nesse caso, podemos ter uma sintaxe mais enxuta passando apenas o nome do atributo que o componente esperar num exemplo o que poderia ser assim: `<Componente par={true}/>` fica apenas assim `<Componente par />`. Existe um exemplo disso no Projeto Calculadora no componente [Calculator](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/projects/calculadora-react/src/main/Calculator.jsx)|
| state|  Uma um atributo default de um componente React que funciona de forma evolutiva, ou seja, quando algum valor é atribuido a algum state, ele não é atribuído ao pé da letra, o valor do state é evoluído, sendo assim, é possível ter um rastro de todas evoluções daquele state.|
|Contornando o Problema de Elementos de mesmo nível devem ter um pai em comum de três jeitos diferente, os três jeitos foram seperados por uma virgula|`<React.Fragment>  <h1>Parte 1</h1>   <h1>Parte 2</h1> </React.Fragment>`,`[<h1>Parte 1</h1>,<h1>Parte 2</h1>]`,`<> <h1>Parte 1</h1> <h1>Parte 2</h1> </>`|
| Forma de como trabalhar com componentes filhos| É só ver o exemplo no Componente [Família.jsx](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/exercicios-react/src/components/Familia.jsx)
| Sobre Arrow Function e `this`| O recurso de Arrow Function garante que o `this` será associado ao local que a função foi escrita, diferente de uma função comum que o `this` pegaria o contexto da onde a função foi chamada|
| Operador de desestruturação (destructuring assignmen)| Esse recurso nos permite fazer várias coisas de forma enchuta, um exemplo disso seria com a atribuição mais inteligente de variáveis de um array, desse jeito : `[a,b,c] = [1,2,3]` o código a seguir, faz com que as variáveis receam os valores sequenciamente, sendo `a` variável ver sendo 1, a variábel `b` sendo 3 e a variável `c` sendo 3|

## Redux

| Conceito | O que é ?
| - | - |
| mapStateToProps | No Mundo do React com Redux, essa é a nomenclatura que é comunmente usada para mapear as props da Store do Redux com as propriedades de algum componente|
| mapDispatchToProps | No Mundo do React com Redux, essa é a nomenclatura que é comunmente usada para mapear as Action Creators(funções) que alteram os objetos da store
| Uso de redux-promise | Com esse package, é possível configurar de uma forma mais enxuta, as actions que possuem métodos assíncronos(requisição http por exemplo). Em outras palavras, esse package faz com que sempre quando tiver um retorno assíncrono em alguma action, a mesma é esperada ser resolvido é só depois disso é retornado, torando métodos assíncronos em métodos síncronos. Só para ficar claro, não é só com esse package que torna isso possível, mas também a combinação dele com o método applyMiddleware do redux. Existe um exemplo do uso dessa combinação no projeto [todo](https://github.com/kelvi-ribeiro/curso-react-redux/tree/master/projects/todo-app), no arquivo [index.jsx](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/projects/todo-app/app-todo/src/index.jsx)|
| Uso de redux-multi | Com esse package, após configurado, é possível executar funções ou qualquer outra operação dentro dos actions creator, tecnicamente, dentro de um action creator, ao invés de ter apenas um retorno, com esse package, podemos ter vários retornos, um array de retornos, podendo fazer com as actions aconteçam sequencialmente. Existe um exemplo disso no projeto [todo](https://github.com/kelvi-ribeiro/curso-react-redux/tree/master/projects/todo-app). A configuração de Middleware fica no arquivo [index.jsx](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/projects/todo-app/app-todo/src/index.jsx) e o uso dessa funcionalidade fica no arquivo [todoActions.js](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/projects/todo-app/app-todo/src/todo/todoActions.js)|
| Uso de redux-thunk | Com esse package, após configurado, é possível que num action creator não seja mais retornado uma action tradicional(com type obrigatório e geralmente um payload), mas sim um método. Esse método recebe como parâmetro o dispatch(responsável por enviar as acitons para todos os reducers) que justamente dispara as ações  |


## JavaScript

| Conceito | O que é ?
| - | - |
| `+variavel` ou `-variavel` | o código a seguir transforma a variável passada em um número, uma forma mais simples que converter uma string para um número, passando apenas o operador antes da variável|


## Sobre o React Hook React  16.8
Com esse novo recurso, é possível escrever componente baseados em funções com recursos disponíveis apenas em componentes baseado em classe, como ciclo de vida e state. Existe um exemplo desse recurso no componente [Hook](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/exercicios-react/src/components/Hook.jsx)
