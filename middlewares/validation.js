const ApiError = require("../helpers/api-error")

const validation = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body)
    error ? next(ApiError.badRequest(error.message)) : next()
}

module.exports = validation