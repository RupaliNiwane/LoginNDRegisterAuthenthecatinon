const jwt = require('jsonwebtoken');
const User = require('../modal/userSchema');

const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            throw new Error('Token not provided');
        }

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) {
            throw new Error('User not found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;

        next();
    } catch (err) {
        console.error(err);
        res.status(401).send('Unauthorized: No valid token provided');
    }
};

module.exports = authenticate;
