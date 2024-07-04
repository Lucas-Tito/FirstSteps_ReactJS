## Forms 💡

Trabalhar com <strong>forms</strong> em uma aplicação React requer forte uso do useState, já que é recomendado armazenar cada mudança feita nos campos, o que permite verificações em tempo real por exemplo. 
<br><br><br>

### How To 📖
Os dados dos campos no formulário são armazenado em um único useState em forma de objeto, como o exemplo a seguir:
<p>
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/f9f7938e-ab7d-4a68-9877-716531ffb0c3" alt="img" width="30%"/>
</p>


<br><br>
<h3 align="center">Campo de Texto</h3>
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/b9732c86-278e-4b03-8134-320e1c455dbf" alt="img" width="25%"/>
</p>
<p align="center">Ao observar o campo de texto acima (lastName), é possível observar que fornecemos uma função para a propriedade <strong>onChange</strong> do campo, bem como um valor para a propiedade <strong>value</strong>. Essa prática é necessária para que o valor do campo seja controlado pelo React, facilitando possíveis verificações do campo. Além disso, <strong>É CRUCIAL</strong> que a propriedade name do campo tenha o mesmo nome de sua propriedade correspondente (mais sobre isso no capítulo de funcionamento).</p>


<br><br>
<h3 align="center">Radio Buttons</h3>
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/7831c2cb-a72e-4732-bd3a-d77e8487c198" alt="img" width="35%"/>
</p>
<p align="center">Quando trabalhamos com os ditos <strong>radio buttons</strong> é necessário fazer algumas considerações. Pelo fato de que o campo como um todo é formado por vários botões do tipo radio, cada botão receberá um valor fixo, a função onChange e por fim uma outra propriedade chamada checked. Essa propriedade recebe true ou false para o botão ser ativo, assim só precisamos passar a verificação se o valor desse campo armazenado no useState corresponde ao valor do botão sendo verificado.</p>

<br><br>
<h3 align="center">Dropdown Menu</h3>
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/e66de961-7786-4e27-a47f-a7cfc5594c6c" alt="img" width="35%"/>
</p>
<p align="center">No caso dos menus dropdown, apenas o valor de select é controlado pelo useState.</p>

<br><br>
## Funcionamento

<h3 align="center">Handle Change</h3>
É possível controlar todas as mudanças dos campos do formulário com apenas uma função.
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/4a5774c3-570d-4881-a2f2-1ce63f5ffb14" alt="img" width="50%"/>
</p>
<p align="center">A função acima recebe como parâmetro o último evento da página que é passado automaticamente para todas as funções javascript. A partir desse parâmetro as propriedades nome, valor, tipo e checked são resgatos do campo onde o envento ocorreu. Assim, o useState do formulário é alterado usando as informações anteriores e modificando apenas a que corresponde ao campo atual. Observe que [name] é usado para chamar o atributo correspondente ao campo atual, por esse motivo que a propriedade name do campo precisa ter o mesmo nome do atributo.</p>


<br><br>
<h3 align="center">Handle Submit</h3>
<p align="center">
  <img src="https://github.com/Lucas-Tito/Learning_ReactJS/assets/61806906/b4c8557a-7c6e-4f96-bcbe-df12fdcb5ac9" alt="img" width="50%"/>
</p>
<p align="center">Ao clicar no botão contido no formulário a função handleSubmit é acionado; repare que o botão não precisa chmara a propriedade onClick. Isso se dá pelo fato da função handleSubmit estar recebendo event como parâmetro. Além disso, event.preventDefault() é chamado para impedir que a página recarregue, pois ao contrário do funcionamento normal do HTML, o Ract não precisa recarregar para processar dados.</p>
