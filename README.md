# JewelrySite

Este é um projeto de uma loja online desenvolvido com React. O projeto inclui uma página principal, uma página de loja, uma página de sobre e uma página de contacto, cada uma com as suas próprias funcionalidades e estilos. Abaixo, encontra-se uma descrição detalhada de cada parte do projeto.

## Índice

1. [Visão Geral](#visão-geral)
2. [Instalação](#instalação)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Componentes/Ficheiros](#componentesficheiros)
    - [About.js](#aboutjs)
    - [Contact.js](#contactjs)
    - [Footer.js](#footerjs)
    - [Main.js](#mainjs)
    - [Navbar.js](#navbarjs)
    - [Shop.js](#shopjs)
    - [App.js](#appjs)
    - [weather.js](#weatherjs)
5. [Estilos](#estilos)
6. [Uso](#uso)
7. [Mudanças Futuras](#mudancas-futuras)

## Visão Geral

Este projeto de uma loja online é construído usando React, com estilos personalizados em CSS e JS e total adaptabilidade aos diferentes tamanhos de ecrã. Este inclui também animações suaves para uma melhor experiência do utilizador. Para além disso, tem a incorporação de uma API externa que permite consultar de forma simples a meteorologia no local onde o utilizador se encontra. Esta informação está disponível no footer.

## Instalação

Para instalar e correr o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/Juvasconcelos1975/projetofinal.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd projetofinal/projeto-final
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

- **projeto-final/**
  - **src/**
    - **About/**
      - About.js
      - About.css
    - **Contact/**
      - Contact.js
      - Contact.css
    - **Footer/**
      - Footer.js
      - Footer.css
    - **images/**
    - **Main/**
      - Main.js
      - Main.css
    - **Navbar/**
      - Navbar.js
      - Navbar.css
    - **Shop/**
      - Shop.js
      - Shop.css
    - App.js
    - App.css
    - index.js
    - index.css
    - weather.js
    - ScrollToTop.js
  - **public/**
    - index.html
  - package.json
  - package-lock.json
  - README.md


## Componentes/Ficheiros

### About.js

Este componente representa a página de informações acerca do dono do website. Inclui o nome da pessoa, assim como uma breve descrição.

### Contact.js

Este componente representa a página de contacto. Inclui informações de contacto da loja, como email, morada e telemóvel, um formulário para envio de mensagens totalmente funcional e um mapa embutido.

### Footer.js

Este componente representa o footer do website, ou seja, o componente que aparece no fim de todas as páginas. É composto por um copyright, por icones com conexões para as diferentes redes sociais da loja, e também pela integração de uma API de tempo, que reflete a meteorologia correspondente ao local onde o utilizador se encontra.

### Main.js

Este componente representa a página principal. Contém um resumo de todas as partes do website, com referências e ligações para as diversas páginas.

### Navbar.js

Este componente representa a barra horizontal que se encontra no topo da página em qualquer parte do site. Através desta, é possível navegar entre as diversas páginas do website de forma fluída e rápida. Para além de bastante útil, é também totalmente adaptável aos diferentes tamanhos de ecrã, assim como todo o website.

### Shop.js

Este componente representa a página da loja. Exibe uma lista de produtos, cada um com animações de entrada e funcionalidades para adicionar ou remover items do carrinho de compras. É possível também limpar todo o carrinho de uma vez, assim como alterar a quantidade de unidades de um produto dentro do próprio carrinho.

### App.js 

O ficheiro `App.js` é o ponto de entrada principal deste website React. Este configura o roteamento usando `react-router-dom` para navegar entre as diferentes páginas da aplicação, como a página principal (`Main`), a página sobre (`About`), a loja (`Shop`) e a página de contato (`Contact`). Inclui também a barra de navegação (`Navbar`), o rodapé (`Footer`) e um componente `ScrollToTop` para encaminhar para o topo da página sempre que um novo componente é carregado.

### weather.js 

Este ficheiro faz a conexão com a API, retirando os dados necessários da mesma e permitindo que estes sejam posteriormente utilizados no footer. Para utilizar esta funcionalidade, aceda ao [site da api](https://www.weatherapi.com/), crie uma chave pessoal e insira-a no ficheiro, assim como o url da API.

## Estilos

Os estilos estão organizados em arquivos CSS separados para cada componente. As animações são definidas usando `@keyframes` na maior parte dos casos, ou apenas CSS noutros, e aplicadas aos elementos conforme necessário.

- **About.css**: Estilos para o componente de sobre.
- **Contact.css**: Estilos para o componente de contact.
- **Footer.css**: Estilos para o componente do footer.
- **Main.css**: Estilos para o componente principal.
- **Navbar.css**: Estilos para o componente da navbar.
- **Shop.css**: Estilos para o componente da loja.

## Uso

Para utilizar o projeto, basta seguir os passos de instalação e iniciar o servidor de desenvolvimento. A aplicação estará disponível no navegador no endereço `http://localhost:3000`.

## Mudanças Futuras

Há várias melhorias e novas funcionalidades que podem ser adicionadas ao projeto para torná-lo ainda mais robusto e funcional. Aqui estão algumas ideias para mudanças futuras:

1. **Integração com API de Pagamento**
   - Implementar uma integração com uma API de pagamento para permitir que os utilizadores realizem compras diretamente na loja online.

2. **Funcionalidade de Busca**
   - Adicionar uma barra de busca na página da loja para que os utilizadores possam procurar por produtos específicos.

3. **Sistema de Avaliações e Comentários**
   - Implementar um sistema de avaliações e comentários para os produtos, permitindo que os utilizadores deixem feedback e avaliem os itens que compraram.

4. **Autenticação e Autorização de Utilizadores**
   - Adicionar funcionalidades de login e registo para que os utilizadores possam criar contas, fazer login e gerir as suas informações pessoais e histórico de compras.

5. **Integração com Redes Sociais**
    - Adicionar funcionalidades de partilha nas redes sociais e integrações com APIs das mesmas para aumentar o alcance da loja .

---
