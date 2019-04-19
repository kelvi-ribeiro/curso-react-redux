## Comandos importantes do curso

| Comando | O que faz ?
|---|--|
| `npm i -g create-react-app`| Comando para instalar globalmente a ferramenta que ajuda na configuração de um projeto react,a versão 2.1.8 fora usado nesse projeto |

## Definições

| Conceito | O que é ?
|---|--|
| `JSX`| Na prática, é escrever código em HTML dentro de um arquivo JavaScript e para esse código ser interpretado pelo Browser, é feito uma conversão desse mesmo código parecido com HTML para funções nativas de JavaScript |
| state|  Uma um atributo default de um componente React que funciona de forma evolutiva, ou seja, quando algum valor é atribuido a algum state, ele não é atribuído ao pé da letra, o valor do state é evoluído, sendo assim, é possível ter um rastro de todas evoluções daquele state.|
|Contornando o Problema de Elementos de mesmo nível devem ter um pai em comum de dois jeitos diferente, os dois jeitos foram seperados por uma virgula|`<React.Fragment>  <h1>Parte 1</h1>   <h1>Parte 2</h1> </React.Fragment>`,`[<h1>Parte 1</h1>,<h1>Parte 2</h1>]`|
| Forma de como trabalhar com componentes filhos| É só ver o exemplo no Componente [Família.jsx](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/exercicios-react/src/components/Familia.jsx)
| Sobre Arrow Function e `this`| O recurso de Arrow Function garante que o `this` será associado ao local que a função foi escrita, diferente de uma função comum que o `this` pegaria o contexto da onde a função foi chamada|
| Operador de desestruturação (destructuring assignmen)| Esse recurso nos permite fazer várias coisas de forma enchuta, um exemplo disso seria com a atribuição mais inteligente de variáveis de um array, desse jeito : `[a,b,c] = [1,2,3]` o código a seguir, faz com que as variáveis receam os valores sequenciamente, sendo `a` variável ver sendo 1, a variábel `b` sendo 3 e a variável `c` sendo 3|

## Sobre o React Hook React  16.8
Com esse novo recurso, é possível escrever componente baseados em funções com recursos disponíveis apenas em componentes baseado em classe, como ciclo de vida e state. Existe um exemplo desse recurso no componente [Hook](https://github.com/kelvi-ribeiro/curso-react-redux/blob/master/exercicios-react/src/components/Hook.jsx)
