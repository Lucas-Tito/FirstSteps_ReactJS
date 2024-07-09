## useContext 💡

<strong>useContext</strong> é usado para compartilhar valores entre componentes sem precisar passar explicitamente props através de cada nível da árvore de componentes. Ele funciona através de um contexto, que representa os dados a serem compartilhados e um provedor que irá envolver os componentes que poderão acessar esses dados.
<br><br><br>

### How To 📖

<br>
Para configurar o useContext, você deve criar uma pasta context na raiz do projeto e dentro dela o arquivo com o nome do contexto seguido de Context (no nosso caso o contexto é o tema do site).

<br><br>

Além disso, dentro desse arquivo é necessário importar as funções createContext e useState, bem como exportar o contexto como uma invocação da função createContext; outra exportação necessária é o provider desse contexto.

<br>
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/e2e4edfe-2ebb-48ea-9e31-bf5e19871a24" alt="img" width="50%"/>
</p>

Esse provider irá receber uma função com a propriedade children (componentes filhos que usarão o contexto) que retorna um jsx que utiliza o componente provider do nosso contexto. Ademais, a propriedade children estará dentro desse componente.

<br>

Por fim, é necessário um valor para ser manipulado e consultado no contexto, para tal é necessário criar um estado e uma função que modifique esse estado, os quais serão passados na propriedade value do provider.

<br><br>
<h3 align="center">Configurando Provider</h3>

<p align="center">É necessário importar o provider na página principal (que contém ReactDOM.createRoot().render()) e envolver a aplicação no provider.</p>

<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/131cabbf-5a25-4f52-806a-b730e47ca8a9" alt="img" width="45%"/>

<br><br>
<h3 align="center">Consulta e Modificação do Context</h3>
<p align="center">Para modificar e consultar os valores do contexto você precisa importar a função use context e também o contexto. Além disso, você deve iniciar variáveis com o estado e a função passadas na propriedade value do provider com a função useContext, que recebe o contexto como argumento; a partir daí é só utilizar essas varíaveis para realizar a consulta e a mudança dos valores do context.</p>

<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/f5a1cd3b-9f18-4075-a4d1-558a8d91dd83" alt="img" width="45%"/>
</p>
