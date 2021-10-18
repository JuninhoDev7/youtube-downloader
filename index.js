const express = require("express")
const app = express()

const cors = require("cors")

const download = require("./controller")
const ejs = require("ejs")

app.set("view engine", "ejs")
port = process.env.PORT || 3000

app.use(cors())
app.use(download)
app.get("/home", (req, res) => {
    res.render("index")
})

app.get("/", (req, res) => {
    res.redirect("/home")
})

app.listen(port, () => {
    console.log("[+] SERVER ON [+]")
})