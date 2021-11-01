require("dotenv").config()
// import mongoose
const mongoose = require("mongoose")


mongoose.connect(process.env.DATABASE_URL, {useUnifiedTopology: true, useNewUrlParser: true})

const db = mongoose.connection


db.on("open", () => console.log("You are connected to mongo"))
db.on("close", () => console.log("You are disconnected from mongo"))
db.on("error", () => console.log(error))

// export the connection
module.exports = mongoose
