const express = require('express');
const router = express.Router();

let livros = [
  { id: 1, nome: 'O Hobbit' },
  { id: 2, nome: 'Duna' }
];

// GET - Listar todos os livros
router.get('/', (req, res) => {
  res.json(livros);
});

// GET - Obter um livro específico por ID
router.get('/:id', (req, res) => {
  const livro = livros.find(u => u.id == req.params.id);
  if (!livro) return res.status(404).send('Livro não encontrado.');
  res.json(livro);
});

// POST - Inserir um novo livro
router.post('/', (req, res) => {
  const novoLivro = {
    id: livros.length + 1,
    nome: req.body.nome
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

module.exports = router;