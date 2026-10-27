

const mongoose = require("mongoose")
// const { type } = require("node:os")

const noteSchema = {
  title :String ,
  description :String 
}

//  schema me pura vo hai kitne fields and all , note model me kya hai model boleto kya bhai , crud operations rehte shyd na , crud ich rehte crud to usme rehte update delete wagera , to fir model me kya rehta bhai like noteModel me dhancha aata kya nodeSchema , mongoose.
const noteModel =  mongoose.model("note", noteSchema);

module.exports = noteModel ;
