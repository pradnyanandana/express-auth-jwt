const register = (req, res) => {
    res.json({
        success: true,
        message: "Welcome to Register Controller"
    })
}

module.exports = {
    register
}