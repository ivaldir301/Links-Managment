const express = require("express")
const bp = require('body-parser')

const app = express()

require('dotenv').config()

const linksManagmentRouter = require('./routes/linkmanagment.router')
const usersmanagmentAuthRouter = require('./routes/auth.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/linksmanagment", linksManagmentRouter)
app.use("/api/v2/userauth", usersmanagmentAuthRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running ...")
})
