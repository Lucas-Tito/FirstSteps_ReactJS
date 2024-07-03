## Complex useState 💡

o useState é considerado <strong>complexo</strong> quando, ao invés de armazenar uma variáveL simples (como um número), é armazenada estruturas como arrays ou objetos. 
<br><br><br>

### How To 📖
Segue um exemplo do useState em conjunto com um array:
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/b111d429-2012-4a3a-a98d-4a7eab0f7b4a" alt="img" width="40%"/>
</p>

<br>
<p>Perceba que <strong>antes de adicionar um novo item</strong>, todos os elementos anteriores são fornecidos novamente. Isso acontece por conta da natureza do useState, se apenas o item atual fosse fornecido, o estado de items iria passar a ser uma variável simples apenas com o item novo.</p>
