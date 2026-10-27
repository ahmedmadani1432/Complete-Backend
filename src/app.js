const express = require("express")
const noteModel = require("./models/notes.model")




const app = express();

app.use(express.json())

app.post("/notes", async (req, res) => {

  const data = req.body;
  await noteModel.create({
    title: data.title,
    description: data.description
  }

  )
  res.status(201).json({
    message: "note created succesfully"
  })


})

app.get("/notes" , async(req, res ) =>{

  const  notes =  await noteModel.find() // returns array always
    // use .findone({ title: " test_title"}) to fetch one particular one and important is it returns object 
  res.status(201).json({
    message :"Notes fetched succesfully" ,
    notes :notes
  })
})

app.delete("/notes/:no" , async ( req , res ) => {

  const palpal = req.params.no

  await noteModel.findByIdAndDelete( {
    _id : palpal 
  })
  res.status(200).json({
    message:" deleted succesfully "
  })

})

app.patch("/notes/:id", async ( req , res)=>{
 const id = req.params.id ;
 const description = req.body.description;

 await noteModel.findByIdAndUpdate({
  _id: id ,
 },{ description : description }


)
res.status(200).json({
  message :" updated succesfully"
 })   


})

module.exports = app;
