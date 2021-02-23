const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    const token = req.headers['auth-token']
    // const token = req.headers['auth-token'] ? req.headers['auth-token'] : localStorage.getItem('token')
    // const token = req.body['auth-token']
    console.log(`header auth-token:`)
    console.log(req.headers['auth-token'])
    console.log(`!token:`)
    console.log(!token)
    // console.log(`local storage token:`)
    // console.log(localStorage.getItem('token'))
    // const token = localStorage.getItem('token')
    // const token = req.body['auth-token']
    if(!token) return res.status(401).send('Access Denied')
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = verified //verified returns { _id: '6023e9d528f50c4f24f4e728', iat: 1612966385 }
        next()
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}