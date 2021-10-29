// import deps
const express = require("express")
const app = require("liquid-express-views")(express())
const transactions = require("./models/tranaction")


app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))














// route
app.get("/", (req, res) => {
    res.send("This App is working")
})

app.get("/transaction", (req, res) => {
    res.render("index.liquid"), {transactions}
})









// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))