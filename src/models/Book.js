import mongoose from "mongoose";
import { authorSchema } from './Author.js';

const bookSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: mongoose.Schema.Types.String , required: true },
    editora: { type: mongoose.Schema.Types.String},
    preco: { type: mongoose.Schema.Types.Number},
    paginas: { type: mongoose.Schema.Types.Number },
    autor: authorSchema
}, { versionKey: false });

const book = mongoose.model('books', bookSchema );

export default book;