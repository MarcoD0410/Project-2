//import schema 
const {Schema, model} = require("./connection")



//create the schema 
const transactionSchema = new Schema({
    amount: String,
    date: String,
    where: String,
    })




// Model

const Transaction = model("Transaction", transactionSchema)

module.exports = Transaction