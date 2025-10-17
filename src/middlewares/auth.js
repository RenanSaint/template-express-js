const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path: './.env.dev'});

const secret = process.env.SECRET

module.exports = function (req, res, next) {
    const authorization = req.headers.authorization;
    
    if (authorization) {
        const token = authorization.split(' ')[1]; // Bearer <token>

        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Token inválido
            }
            req.user = user; // Adicionar informação do usuário à requisição
            next();
        });

    } else {
        res.sendStatus(401); // Token não fornecido
    }
}