# TrabFullStack1 - PokéApi

<div align="center" style="display: display_block">

[![image_info](https://img.shields.io/badge/API-PokeAPI-red)](https://pokeapi.co/)
![image_info](https://img.shields.io/badge/Linguagem-JavaScript-yellow)
![image_info](https://img.shields.io/badge/Framework-React,_Vite-blue)

</div>

<div align="center">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="100" height="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg" width="100" height="100"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" width="100" height="100"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" width="100" height="100"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" width="100" height="100"/>
</div>

## 🎓 Estudantes

<div align="center">
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Mei0-Metr0">
        <img src="https://avatars.githubusercontent.com/u/163468366?v=4" width="100px;" alt="Mei0-Metr0"/><br>
        <sub>
          <b>Joice Kelly Oliveira Mendes - Mei0-Metr0</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/LCostaF">
        <img src="https://avatars.githubusercontent.com/u/146568540?v=4" width="100px;" alt="LCostaF"/><br>
        <sub>
          <b>Lucas Costa Fuganti - LCostaF</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
</div>

<div align="center">

**Universidade Tecnológica Federal do Paraná - UTFPR**

</div>

## 💬 Sobre

Este repositório apresenta uma atualização do PROJETO 1 de FullStack, considerando as temáticas selecionadas - POKÉMON,  construído em 3 camadas: `Front-end`, `Back-end HTTP` e `Banco de dados`, utilizando [React](https://react.dev/), [Ajax](https://www.w3schools.com/xml/ajax_intro.asp), [Vite](https://vite.dev/) e [Node](https://nodejs.org/), desenvolvido na linguagem [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript). O projeto foi desenvolvido seguindo o conceito de [SPA - Single Page Application](https://en.wikipedia.org/wiki/Single-page_application), que se conecta a uma [API JSON](https://pokeapi.co/) e banco de dados [MongoDB Atlas](https://www.mongodb.com/atlas).

## Requisitos funcionais

A aplicação deve implementar os seguintes requisitos:

1. `Login` - Apenas usuários cadastrados podem acessar o sistema.

2. `Busca` - Consulta de dados de acordo com a temática do PROJETO 1.

3. `Inserção` - Adição de novos dados dentro da temática do PROJETO 1.

- Apenas usuários autenticados podem realizar buscas e inserções. 

- O sistema possuí um conjunto pré-definido de usuários no banco de dados para fins de login. 

- O sistema não possuí uma funcionalidade de cadastro de usuários.

## 💾 API Escolhida

A API escolhida para o projeto foi a [PokeAPI](https://pokeapi.co/), que apresenta em formato JSON informações sobre os [Pokémons](https://www.pokemon.com/br).

A API oferece diversas opções para consultar informações sobre Pokémons, como por nome do Pokémon, por tipos de Pokémons, habilidades de Pokémons, dados sobre os golpes, formas e localizações em que os Pokémons podem ser encontrados, entre outras.

## 📮 Funcionalidades

O projeto realiza a intermediação da API de Pokémons com a cotação do dólar (USD) para reais brasileiros (BRL), com o objetivo de, com base no valor de cotação das moedas, obter o número de Pokédex equivalente.

<div align="center">

![image](https://github.com/user-attachments/assets/129fe57f-f6fb-43c8-b4f7-5f009b3377dc)

</div>

Por exemplo, caso a cotação esteja `3,00 BRL` para cada `1,00 USD`, o valor considerado seria `3,00`, que seria multiplicado por 100, obtendo o valor `300`. Em seguida, seria buscado o Pokémon de número de Pokédex 300, que seria o Skitty:

<div align="center">

![image](https://github.com/user-attachments/assets/a7d3dd46-08d6-4896-a889-024fdf9d7761)

</div>

<div align="center">

A tabela abaixo conta com mais alguns exemplos de conversões de valor de cotação em números de Pokémons:

| Cotação USD em BRL | Número de Pokédex | Pokémon |
|--------------------|-------------------|---------|
| 3,00               | 300               | Skitty  |
| 1,51               | 151               | Mew  |
| 4,83               | 483               | Dialga  |
| 0,25               | 25               | Pikachu  |
| 0,01               | 1               | Bulbasaur  |

</div>

Além disso, o projeto oferece uma galeria dos pokémons, ordenados por número de Pokédex, e que oferece algumas opções para filtrar a lista:

- Filtragem por nome, em campo de texto;
- Filtragem por número de Pokédex, em campo de texto;
- Filtragem por tipo de Pokémon, por dropdown box.

<div align="center">

![image](https://github.com/user-attachments/assets/15e5c11e-a331-4754-b251-0a23aacf289c)

</div>

## 💻 Estrutura do Projeto

O código do projeto encontra-se no diretório [pokeDolar](https://github.com/Mei0-Metr0/TrabFullStack1/tree/main/pokeDolar) deste repositório.

A estrutura do diretório pokeDolar é apresentada a seguir:

```
pokeDolar/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Pagination.jsx
│   │   ├── PendingState.jsx
│   │   ├── PokemonCard.jsx
│   │   ├── PokemonCreateForm.jsx
│   │   ├── PokemonDisplay.css
│   │   ├── PokemonDisplay.jsx
│   │   ├── PokemonGallery.jsx
│   │   ├── PokemonTypeFilter.jsx
│   │   ├── RejectState.jsx
│   │   └── SearchBar.jsx
│   ├── config/
│   │   ├── cache.js
│   │   └── db.js
│   ├── models/
│   │   ├── Pokemon.js
│   │   └── User.js
│   ├── services/
│   │   ├── apiService.js
│   │   └── dbService.js
│   ├── slices/
│   │   ├── authSlice.js
│   │   ├── customPokemonSlice.js
│   │   ├── dollarPokemonSlice.js
│   │   ├── filterSlice.js
│   │   ├── gallerySlice.js
│   │   └── paginationSlice.js
│   ├── store/
│   │   └── store.js
│   ├── utils/
│   │   └── stringUtils.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── server.js
└── vite.config.js
```

## Arquitetura do Sistema

A aplicação será estruturada em 3 camadas principais:

- **Front-end**: Desenvolvido em React.js, funcionando como uma Single-Page Application (SPA), interagindo com o Back-end via requisições HTTP.
- **Back-end HTTP**: Implementado com Express.js, seguindo padrões RESTful para comunicação com o Front-end e acesso direto ao banco de dados.
- **Banco de Dados**: Pode ser utilizado qualquer SGBD.

## Tecnologias Utilizadas
- **Front-end**: React.js, Axios
- **Back-end**: Node.js, Express.js
- **Banco de Dados**: MongoDB Atlas
- **Segurança**: HTTPS, bcrypt para hashing de senhas, sanitização de entrada

## Critérios de Avaliação
- Implementação de Login, Busca e Inserção no Front-end com React.js
- Implementação de Login, Busca e Inserção no Back-end com Express.js
- Validação de entradas no servidor
- Envio de mensagens de erro adequadas
- Implementação do padrão REST na API
- Regras de segurança:
  - Uso de HTTPS e hashing de senhas
  - Proteção contra SQL/NoSQL Injection e XSS
  - Controle de sessões e expiração de tokens
  - Registro de logs para autenticação, buscas e inserções
- Otimização do Front-end:
  - Compressão de arquivos estáticos
  - Compressão de respostas do servidor
- Implementação de cache no Back-end
- Configuração de pool de conexões no banco de dados

## 🔧 Configuração e Execução do Projeto

Para executar o projeto, primeiro será necessário fazer o download deste repositório, e descompactar o arquivo em alguma pasta local.

```bash
git clone https://github.com/LCostaF/TrabFullStack2.git
cd <pasta>
```

Em seguida, será preciso abrir o projeto, por exemplo por uma IDE como o [VSCode](https://code.visualstudio.com/), e acessar a pasta `pokeDolar` por terminal de comando.

Execute o seguinte comando para instalar as dependências da aplicação:

`npm install`

Após a instalação das dependências, execute o comando abaixo para que a aplicação rode localmente:

### Back-end
```bash
node server.js
```

### Front-end
```bash
`npm run dev`
```

### 5. Configuração do MongoDB Atlas

Para uma execução adequada do banco de dados MongoDB Atlas, siga os passos abaixo:

1. Instale a versão mais recente do Node.js (v22).
2. Reinicie o terminal do VS Code fechando e reabrindo o editor.
3. Exclua o arquivo `package-lock.json` e a pasta `node_modules`, depois execute o comando:

```bash
npm install
```

Sem a versão mais recente do Node.js, pode ocorrer um erro de conexão informando que é necessário permitir a conexão na lista de IPs, mesmo com a configuração correta da permissão.