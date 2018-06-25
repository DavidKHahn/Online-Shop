const jwt = require('jsonwebtoken');

module.exports = ( req, res, next ) => {
    try {
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token); <---to check if we successfully parsed the header
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth Failed'
        });
    }
};