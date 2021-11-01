// dependecies
const { application } = require("express")
const express = require("express")
const Transaction = require("../models/transactions")

// router
const router = express.Router()


////////////////////////
//Routes
////////////////////////

//index 
router.get("/", (req, res) => {
    Transaction.find({})
    .then((transactions) => {
        res.render("transaction/index.liquid", {transactions})
    })
})

//new route 
router.get("/new", (req, res) => {
    res.render("transaction/new.liquid")
})

router.post("/", (req, res) => {
    Transaction.create(req.body)
    .then((transaction) => {
        res.redirect("/transaction")
    })
})


//edit route 
router.get ("/:id/edit", (req, res) => {
    const id = req.params.id

    Transaction.findById(id)
    .then((transaction) => {
        res.render("transaction/edit.liquid", {transaction})
    })
})

//update route 
router.put("/:id", (req,res) => {
    const id = req.params.id

    Transaction.findByIdAndUpdate(id , req.body, {new: true})
    .then((transaction) => {
        res.redirect("/transaction")
    })
})






//delete route 
 router.delete("/:id", (req, res) => {
     const id = req.params.id

     Transaction.findByIdAndRemove(id)
     .then((transaction) => {
         res.redirect("/transaction")
     })
 })






//show route 
router.get("/:id", (req, res) => {
    const id = req.params.id

    Transaction.findById(id)
    .then((transaction) => {
        res.render("transaction/show.liquid", {transaction})
    })
})





module.exports = router