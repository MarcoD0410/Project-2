const mongoose = require("./connection");
const Transaction = require("./transactions");


// save the connection in a variable
const db = mongoose.connection


db.on("open", () => {

    Transaction.deleteMany({})
    .then(() => { 
    // array of tranaction
    const seedData = [
        { 
            amount: "$1310",
            date: "10/14/2019",
           where: "Apple"
           
        },
        {
            amount: "$1099",
              date: "06/20/2020",
             where: "Micro-center"
        },
        {
            amount: "$435",
              date: "09/27/2020",
             where: "PlayStaion.com"
        },
        {
            amount: "$799",
              date: "04/06/2021",
             where: "Gucci"
        },
        {
            amount: "$10000",
              date: "08/03/2021",
             where: "Honda Dealership"
        },
    
    ];
    Transaction.create(seedData)
    .then((transactions) => {
        console.log(transactions)
        db.close()
    })
})
    
})