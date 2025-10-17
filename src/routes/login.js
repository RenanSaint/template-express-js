const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config({path: './.env.dev'});

const secret = process.env.SECRET // Chave secreta no arquivo de configuração

const user = {
    name: "renan.saint",
    password: "1234"
}

router.post('/', (req, res) => {
    console.log(secret);

    if (JSON.stringify(req.body) === JSON.stringify(user)) {
        const token = jwt.sign({userId: req.body.name}, secret, { expiresIn: '1h' }); // Assinatura do token
        res.json({token});
    }
});

module.exports = router;