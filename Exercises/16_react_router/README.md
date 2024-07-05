## React Router 💡

React Router é o pacote mais utilizado para criar rotas, as quais no contexto de uma aplicação single page correspondem as páginas da aplicação.
<br><br><br>

### How To 📖
<br>

Para instalar o react router:
```
npm i react-router-dom
```
<br>
Além disso você deve configurar o o react router no arquivo que contém o <strong>ReactDOM.createRoot().render()</strong>. Para tal, é necessário primeiro importar a função createBrowserRouter e atribuí-la a uma variável.

<br>
<p>
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/e7d74963-06a8-4851-8ffd-ab9b769e17d3" alt="img" width="50%"/>
</p>

Essa função recebe um array de objetos que representam as páginas/rotas configuradas.

<br><br>
<h3 align="center">Configurando Rotas</h3>

<p align="center">Para configurar essas páginas/rotas é necessário criar uma pasta "routes" na raiz do projeto, a qual irá conter os elementos jsx das páginas. Além disso, é necessário fornecer esses elementos para o array dentro da função createBrowserRouter, que por sua vez recebe objetos contendo um elemento pai com diferentes elementos filhos dentro.</p>

<br><br>
<h3 align="center">Elemento Pai</h3>
<p align="center">O elemento pai é aquele que recebe o componente Outlet, que por sua vez é necessário para renderizar apenas os elementos que diferenciam de página a página (com o Outlet é possível manter, por exemplo, uma navbar de página em página sem precisar renderizá-la de novo a cada página).</p>

<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/52092bcd-4f69-40e2-852e-f781b2fb21ad" alt="img" width="35%"/>
</p>

<p align="center">Perceba que para configurar o Outlet só é preciso importar o componente e declará-lo no local da estrutura jsx que receberá as mudanças (o restante dos itens jsx continuarão os mesmos para as páginas children).</p>
<br><br>

<br><br>
<h3 align="center">Elementos Filho</h3>
<p>Observando novamente nossa figura da função createBrowserRouter é possível notar que ela recebe um objeto pai com os atributos:</p>

+ path (caminho até a página),
+ element (elemento que possui o componente Outlet),
+ children (array contendo os elementos que assumirão o lugar do Outlet).

<p>
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/e7d74963-06a8-4851-8ffd-ab9b769e17d3" alt="img" width="50%"/>
</p>

<br><br>
<h3 align="center">Finalização</h3>
<p>Em fim, para efetivar as configurações anteriores, é preciso que dentro do createRoot().render(), ao invés de renderizar o elemento App, renderizar o elemento RouterProvider que por sua vez recebe como prop o router. </p>

<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/368fccc2-beb3-4246-ab16-2121ea0ffe75" alt="img" width="40%"/>
</p>

<br><br><br>
## Navegação

<h3 align="center">Link</h3>
Link é um componente que funciona de maneira similar ao "a" no html; como propriedade o Link recebe um "to", que corresponde ao destino.
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/a77c3d9b-04d9-467c-a1ab-9d5d1b05cc89" alt="img" width="35%"/>
</p>


<br><br>
<h3 align="center">useNavigate</h3>
Também é possível realizar o redirecionamento na parte da lógico, para isso é preciso importar o useNavigate e usá-lo da seguinte maneira:
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/9ac193e5-a732-487f-9367-2dfbbc870570" alt="img" width="35%"/>
</p>

<br><br><br>
## Extras
