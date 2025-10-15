const express = require('express');
const router = express.Router();

let usuarios = [
  { id: 1, nome: 'João' },
  { id: 2, nome: 'Maria' }
];

// GET - Listar todos os usuários
router.get('/', (req, res) => {
  res.json(usuarios);
});

// GET - Obter um usuário específico por ID
router.get('/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id == req.params.id);
  if (!usuario) return res.status(404).send('Usuário não encontrado.');
  res.json(usuario);
});

// POST - Criar um novo usuário
router.post('/', (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome
  };
  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

module.exports = router;