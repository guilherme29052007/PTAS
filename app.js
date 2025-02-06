import express from "express"
import route from "./routes.js"
import mongoose from "mongoose"


const app = express()
mongoose.connect('mongodb://localhost:27017/biblioteca').then(function(){
    console.log("conectado ao mongo")
})
app.use(express.json())
app.use("/", route)

    app.listen(3000, ()=> {
        console.log("servidor rodando na porta 3000")
    })
