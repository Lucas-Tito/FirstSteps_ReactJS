## useEffect 💡

O <strong>useEffect</strong> permite executar efeitos colaterais em componentes,como buscar dados de uma API.
<br><br>

### How To 📖
O useEffect recebe uma função e um array de dependência como argumento. A cada mudança em alguma das dependências a função dentro do useEffect será chamada. No caso do array de dependência estar vazio, a função será executada uma única vez.
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/a8e70696-1ce7-4765-8009-32fd98575c5a" alt="img" width="30%"/>
</p>

<p align="center">No exemplo acima, toda vez que o estado de count for modificado, a função que loga "sus" será chamada.</p>
