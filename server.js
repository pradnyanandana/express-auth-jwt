const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routers = require('./routes')

app.use(routers)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Hello Refactorian !"
    })
})

app.listen(port, () => {
    console.log(`Run app in port ${port}`)
})