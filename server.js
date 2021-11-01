// import deps
require("dotenv").config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const TransactionRouter = require("./controllers/transaction")

//create app object 
const app = require("liquid-express-views")(express())



//set up middleware 
app.use(morgan("tiny"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))



// route
app.get("/", (req, res) => {
    res.send("This App is working")
})


app.use("/transaction", TransactionRouter)












// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))