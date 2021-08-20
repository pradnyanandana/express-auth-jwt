const bcrypt = require('bcrypt')
const ApiError = require('../helpers/api-error')
const saltRounds = 10
const db = require('./../db/models')

const register = async(req, res, next) => {
    try {
        const user = req.body
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(user.password, salt)
        
        user.password = hash
        const insertData = await db.User.create(user)

        res.status(201).json({
            success: true,
            message: 'Success register a user!',
            data: insertData
        })
    } catch (error) {
        if (error.message === 'Validation error') {
            next(ApiError.badRequest('Username or Email has beed registered!'))
        } else {
            next(error)
        }
    }
}

const login = async(req, res, next) => {
    try {
        const {username, password} = req.body
        const user = await db.User.findOne({
            where: {
                username
            }
        })

        if (user) {
            const isPassword = bcrypt.compareSync(password, user.password)
            user.password = undefined

            if (isPassword) {
                return res.json({
                    success: true,
                    message: "sukses login",
                    data: user
                })
            }
        }

        throw ApiError.badRequest('Username or Password doesn\'t match')
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}