const express = require('express');
const dotenv = require('dotenv'); 
const app = express();

// Arquivo de configuração do ambiente de desenvolvimento
dotenv.config({path: '.env.dev'});

const port = process.env.PORT;

// Middleware para log de requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.json());

let usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' }
];

// GET - Listar todos os usuários
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET - Obter um usuário específico por ID
app.get('/api/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (!usuario) return res.status(404).send('Usuário não encontrado.');
  res.json(usuario);
});

// POST - Criar um novo usuário
app.post('/api/usuarios', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});