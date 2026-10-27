// import express from "express"
const app = require("./src/app")
const connectDB = require("./src/db/db")
// 



connectDB();



// app.use()


app.listen( 3000, (req, res) => {

  console.log("Server is Running on Port 3000")
})