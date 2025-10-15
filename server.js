const express = require('express');
const dotenv = require('dotenv'); 
const logger = require('./src/middlewares/logger.js');
const users = require('./src/routes/users.js')
const app = express();

// Arquivo de configuração do ambiente de desenvolvimento
dotenv.config({path: '.env.dev'});

const port = process.env.PORT;

// Middlewares
app.use(logger);
app.use(express.json());

// Rotas
app.use('/api/users', users);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});