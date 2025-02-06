import mongoose, { model, Schema } from "mongoose";

const esquemaLivros = new Schema({

    nome: String,
    autor: String
})

const forma = model('livros' , esquemaLivros)

export {forma}