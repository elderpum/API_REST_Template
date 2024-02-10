const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateJWT = (req, res, next) => {
    // Leer el token
    const token = req.header('x-token');
    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'There is no token in the request'
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        req.uid = uid;
        next();
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        });
    }
}

module.exports = {
    validateJWT
}