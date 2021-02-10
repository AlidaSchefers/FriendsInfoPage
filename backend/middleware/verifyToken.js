const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.headers['auth-token']
    if(!token) return res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = verified //verified returns { _id: '6023e9d528f50c4f24f4e728', iat: 1612966385 }
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}