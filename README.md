### Calculator in ReactJS

#### Atualização: 13 de dezembro de 2019 - 14:36
#### Criação: 08 de dezembro de 2019
#### Prática : @douglasabnovato

## Ferramentas : 

![ReactJS](/images/logo-reactjs.jpg)
![Git](/images/logo-git.png)
![Github](/images/logo-github.png)
![HTML/CSS/Javascript](/images/logo-html-css-js.jpeg)
![VSCode](/images/logo-VSCode.png)
![Yarn](/images/logo-yarn.png)
![NPM](/images/logo-npm.png)
![Nodejs](/images/logo-nodejs.png) 
![Voitto-Treinamentos](/images/logo-voitto.png) 

> Voitto Treinamentos - Calculadora em ReactJS <br/>
> `https://codepen.io/anderson-amorim/pen/MWYKvxb`
1. separei o front end em componentes ReactJS: `https://pt-br.reactjs.org/docs/getting-started.html`
2. utilizei a arquitetura Flux no projeto,as views, os stores, os dipatchers e as actions, sendo uma forma de fluxo unidirecional de dados entre eventos e ouvintes: `https://facebook.github.io/flux/docs/overview`
3. acrescentei funcionalidades a calculadora: ".", "pi", "+/-", "%"

![Frontend-Calculator](/images/frontend-calculator.jpg)

4. Ciclo completo do Flux : **View –> Action –> Dispatcher –>Store –> View**

5. Arquitetura do Flux :
- View : trata-se dos componentes visuais
- Stores : os **view models** das aplicações tradicionais. As views se inscreverão para receber as mudanças, logo, toda vez que houver uma mudança nos stores, as views correspondentes serão notificadas e renderizadas para refletir tais mudanças.
- Actions : Toda a lógica do funcionamento da nossa calculadora : `CalculadoraActions.js`
- Dispatcher : responsável por receber os dados das actions e enviar esses dados para todos os stores

6. Nossa calculadora
    > A primeira informação a ser armazenada pela nossa calculadora é o valor do display. <br/> 
    > A segunda é quando o usuário clicar na vírgula, haverá necessidade de entrar em modo “decimal” de operação, ou seja, todos os números digitados serão adicionados após a vírgula. <br/> 
    > A terceira variável guardará a operação a ser executada. <br/> 
    > A quarta vai guardar o segundo valor numérico digitado / resultado da operação anterior. Isso porque, precisamos de dois valores para executar a operação corrente, a atual do visor e o valor anterior. <br/>
    > E a última, uma flag que marcará se a calculadora precisa ter o visor limpo quando o usuário apertar o próximo botão.

:. Por Douglas A B Novato - `@douglasabnovato`