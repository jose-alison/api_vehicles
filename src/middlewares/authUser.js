const password = require("../database/password");

const checkPassword = (req, res, next) => {
    const passwordBody = req.body.senha;

    if (passwordBody === password) {
        return next();
    } else {
        return res.status(401).json({ message: "Incorrect password" });
    }
};

module.exports = {
    checkPassword
};
