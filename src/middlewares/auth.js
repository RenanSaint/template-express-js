const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({path: './.env.dev'});

const secret = process.env.SECRET

module.exports = function (req, res, next) {
    const bearerHeader = req.headers.authorization;

    if (bearerHeader) {
        const token = bearerHeader.split(' ')[1];

        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });

    } else {
        res.sendStatus(401);
    }
}