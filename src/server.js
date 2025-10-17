const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middlewares/logger.js');
const auth = require('./middlewares/auth.js');
const livros = require('./routes/livros.js')
const login = require('./routes/login.js')
const app = express();

// Arquivo de configuração do ambiente de desenvolvimento
dotenv.config({path: './.env.dev'});

const port = process.env.PORT;

// Middlewares
app.use(logger);
app.use(express.json());

// Rotas
app.use('/api/livros', auth, livros); // auth como middleware para proteger a rota
app.use('/api/login', login);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});