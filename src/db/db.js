
const mongoose = require("mongoose")

async function connectDB () {
  await  mongoose.connect("mongodb+srv://samadani1432_db_user:j7aeaOqlwvN04Sqp@cluster0.nhejrfl.mongodb.net/first1")
  console.log("Connected to DB Successfully")
}







module.exports = connectDB

