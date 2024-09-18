import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    nacionalidade: { type: mongoose.Schema.Types.String }
}, { versionKey: false });

const author = mongoose.model("autores", authorSchema);

export { author, authorSchema };