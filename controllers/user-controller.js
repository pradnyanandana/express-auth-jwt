const db = require('./../db/models')

const profile = async(req, res, next) => {
    try {
        const {id} = req.user
        const user = await db.User.findByPk(id)
        user.password = undefined

        res.json({
            success: true,
            message: "Success retrieve user profile",
            data: user
        })
    } catch (error) {
        next(error)
    }
}

const list = async(req, res, next) => {
    try {
        const users = await db.User.findAll()

        res.json({
            success: true,
            message: "Success retrieve all users",
            data: users
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    profile,
    list
}