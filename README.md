# API Express.js com Autenticação JWT

Este é um template básico de uma API RESTful construída com **Node.js** e **Express.js** que implementa **autenticação via JWT (JSON Web Token)**. Esse template serve como ponto de partida para projetos que requerem segurança nas rotas através de tokens de acesso.

## Como Usar

### 1. Instale as dependências

Certifique-se de ter o **Node.js** instalado na sua máquina. Em seguida, instale as dependências do projeto:

```bash
npm install
```
### 2. Configure as variáveis de ambiente
Crie um arquivo .env.dev na raiz do projeto com a chave secreta para assinatura dos tokens JWT. Exemplo:

```ini
SECRET=sua_chave_secreta_aqui
PORT=3000
```

### 3. Execute o servidor
Após configurar as variáveis de ambiente, você pode iniciar o servidor localmente com o seguinte comando:

```bash
npm start
```

O servidor será iniciado na porta configurada em .env.dev (por padrão, 3000).

### 4. Teste a API
- **Login (POST /api/login)**: Envie as credenciais de login (por exemplo, ```{"name": "renan.saint", "password": "1234"}```) para receber um token JWT válido.

**Exemplo de resposta**:

```json
{
  "token": "seu_token_jwt_aqui"
}
```

- **Acesso à rota protegida (GET /api/livros)**: Envie o token JWT gerado no cabeçalho Authorization da requisição (no formato ```Bearer seu_token_jwt_aqui```).

**Exemplo de requisição**:

```http
GET /api/livros
Authorization: Bearer seu_token_jwt_aqui
```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
📦src
 ┣ 📂middlewares
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜logger.js
 ┣ 📂routes
 ┃ ┣ 📜livros.js
 ┃ ┗ 📜login.js
 ┗ 📜server.js
```

- **`server.js`**: Inicializa o servidor Express e define as rotas.
- **`login.js`**: Rota responsável pela autenticação do usuário, que gera um token JWT.
- **`livros.js`**: Rota protegida que requer um token válido para acesso.
- **`auth.js`**: Middleware que valida o token JWT em rotas protegidas.
- **`logger.js`**: Middleware para logar requisições (opcional).

## Como Funciona
**1. Login**: O usuário envia suas credenciais para a rota /api/login. Se as credenciais forem válidas, o servidor retorna um token JWT.

Autenticação: Para acessar rotas protegidas, como /api/livros, o usuário deve enviar o token JWT no cabeçalho Authorization de suas requisições.

Validação do Token: O middleware auth.js intercepta as requisições às rotas protegidas e valida o token. Se o token for válido, a requisição é permitida; caso contrário, o acesso é negado.

## Personalizações Futuras
- Este template pode ser expandido e personalizado de acordo com as necessidades do seu projeto. Algumas sugestões de melhorias incluem:

- Implementar um banco de dados para gerenciar usuários de forma persistente.

- Adicionar criptografia de senhas com bcrypt.

- Implementar refresh tokens para renovar tokens expirados sem precisar que o usuário faça login novamente.

- Adicionar validação de entrada (ex.: usando Joi ou express-validator) para garantir que os dados do usuário sejam válidos antes de processá-los.

## Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/en)**
- **[Express.js](https://expressjs.com/)**
- **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)** para geração e verificação de tokens JWT
- **[dotenv](https://www.npmjs.com/package/dotenv)** para configuração de variáveis de ambiente
---
Feito por [Renan Santana](https://github.com/RenanSaint)