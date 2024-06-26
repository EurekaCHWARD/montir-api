const jwt = require('jsonwebtoken');
require('dotenv').config();

const requireAuthUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(400).json({ message: 'Token tidak terdeteksi, harap login terlebih dahulu!' });
    }

    // Check JWT exist & is verified
    jwt.verify(token, process.env.SECRET_STRING, (err, decodedToken) => {
        if (err) {
            return res.status(400).json({ message: 'Anda tidak memiliki hak untuk mengakses request ini!' });
        }
        req.user = decodedToken; // Set the decoded token to req.user
        return next();
    });
};

const requireAuthAdmin = (req, res, next) => {
    const token = req.cookies.jwt;

    if (!token) {
        return res.status(400).json({ message: 'Token tidak terdeteksi, harap login terlebih dahulu!' });
    }

    // Check JWT exist & is verified
    jwt.verify(token, (process.env.SECRET_STRING_ADMIN), (err) => {
        if (err) {
            return res.status(400).json({ message: 'Request ini hanya bisa diakses oleh admin!' });
        }
        // console.log(decodedToken);
        return next();
    });
    return 0;
};

module.exports = { requireAuthUser, requireAuthAdmin };