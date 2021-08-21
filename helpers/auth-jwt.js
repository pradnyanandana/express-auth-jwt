require("dotenv").config()
const secret_key = process.env.JWT_SECRET
const jwt = require('jsonwebtoken')

const generate = (payload) => {
    const token = jwt.sign(payload, secret_key, {
        expiresIn: '1h',
        algorithm: 'HS256',
        issuer: 'refactory',
        audience: [payload.username]
    })

    return token
}

const verify = (token) => {
    return jwt.verify(token, secret_key)
}

module.exports = {
    generate,
    verify
}