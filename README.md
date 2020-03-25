# Game Of Fifteen

**O jogo**

Jogue <a href="https://rafa-ribeiro.github.io/game_of_fifteen/" target="_blank">aqui</a>

**Como jogar?**

O jogo consiste em um tabuleiro 4x4, contendo peças de número de 1 até 15 e somente um espaço vazio que é utilizado para se fazer a movimentação das demais peças. Assim o objetivo do jogo, é ordenar todas as peças de 1 a 15, sendo que o espaço vazio deve se localizar na posição inferior direita (na matriz sendo linha 3 coluna 3).

*Autor: Rafael Ribeiro*

---
**Motivação**

Desenvolvimento do jogo Game Of Fifteen para estudo e prática de JavaScript, usando o módulo de importação de dependências do ECMAScript 6 (ES6). Além de praticar e fixar a linguagem, implementar um jogo traz conceitos bastante úteis e interessantes como detecção de teclas pressionadas no teclado, como funciona a estrutura de um jogo usando game-loop, como manipular objetos utilizando canvas, e na minha humilde opinião a mais importante, como organizar a arquitetura dos objetos e como o uso da orientação à objetos pode te levar a ter um código simples ou muito complexo.

---
**Ambiente de desenvolvimento**

1. Para utilizar em modo de desenvolvimento, após clonar o repositório, é necessário instalar as dependências do projeto, listados no arquivo package.json no diretório raiz, para isso executar nesse diretório o comando:

<code>
    npm install
</code>

2. Com as dependências devidamente instaladas, o projeto já pode ser colocado em execução com:

* Inicializar o game:
<code>
    npm start
</code>

* Buildar o projeto e gerar os arquivos estáticos no diretório docs (docs por conta do GitHub Pages):

<code>
    npm run-script prod
</code>

Pode ser usado também o comando abaixo, que gera os arquivos estátiscos, mas também commita e os empurra para o repositório no github:

<code>
    npm run-script deploy
</code>





