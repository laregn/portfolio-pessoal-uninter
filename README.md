# Meu Portfólio

Este repositório contém o código-fonte para o meu portfólio pessoal, desenvolvido com HTML e CSS. O objetivo é apresentar informações sobre minha carreira, habilidades e projetos.

## Estrutura do Projeto

- `index.html`: Página principal do portfólio.
- `projetos.html`: Página que lista os projetos realizados.
- `habilidades.html`: Página que detalha as habilidades adquiridas.
- `contato.html`: Página de contato.
- `style.css`: Arquivo de estilos CSS para estilização das páginas.
- `app.js`: Arquivo JavaScript para funcionalidades adicionais.
- `img/eu.jpg`: Imagem pessoal para a seção "Sobre Mim".

## Descrição do Código

### HTML

- **DOCTYPE e HTML**: Define o tipo de documento e o início do documento HTML com o idioma definido como português do Brasil.
- **Cabeçalho (`<head>`)**: Contém meta-informações, título da página, referência ao arquivo de estilos CSS (`style.css`) e ao arquivo JavaScript (`app.js`).
- **Corpo (`<body>`)**: Estrutura principal da página, contendo:
  - **Cabeçalho (`<header>`)**: Inclui o título do portfólio.
  - **Navegação (`<nav>`)**: Links para outras seções do portfólio e um botão para retroceder na navegação.
  - **Conteúdo (`<div class="container">`)**: Seção sobre a descrição pessoal, incluindo um parágrafo e uma imagem.
  - **Rodapé (`<footer>`)**: Informações de direitos autorais.

### Funcionalidades

- **Navegação**: Links para diferentes seções do portfólio.
- **Botão "Voltar"**: Utiliza a função `retrocederPagina()` definida no arquivo `app.js` para voltar à página anterior.
- **Seção "Sobre Mim"**: Exibe informações pessoais e profissionais com um texto descritivo e uma imagem.

### CSS e JavaScript

- **`style.css`**: Define estilos para o layout e aparência da página.
- **`app.js`**: Contém scripts para funcionalidades interativas, como a função para retroceder páginas.

## Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
