## useState with Objects 💡

Outro exemplo de um useState complexo é aquele que armazena um <strong>objeto</strong>.
<br><br><br>

### How To 📖
A maneira de operar useStates contendo objeto é similar à do array; observe o exemplo a seguir:
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/6bae7336-e777-4144-8311-a40880280077" alt="img" width="40%"/>
</p>

<br>

<h3 align="center">O Elemento</h3>

<p>Perceba que o nosso elemento alimento por um objeto composto de diferentes dados. Entretanto, a única funcionalidade implementada é a de adicionar o contato como favorito.</p>

<h3 align="center">Funcionamento</h3>
<p>Ao clicar na estrela do elemento, a função toggleFavorite é chamada. É possível perceber que assim como no exemplo do array, é necessário fornecer todos os dados do objeto que não precisam ser modificados e modificar somente o atributo isFavorite.</p>
