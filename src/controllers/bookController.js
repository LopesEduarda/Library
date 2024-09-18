import { author } from '../models/Author.js';
import book from '../models/Book.js';

class BookController {

    static async getBooks(req, res) {
        try {
           const listBooks = await book.find({});
           res.status(200).json({ listBooks });
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    };

    static async getBookById(req, res) {
        try {
            const { id } = req.params;
            const findSpecificBook = await book.findById(id);
            res.status(200).json({findSpecificBook});
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    }

    static async createBooks(req, res) {
        const newBook = req.body;

        try {
            const findedAuthor = await author.findById(newBook.author);
            const bookFinished = { ...newBook, author: { ...findedAuthor._doc } };

            const createdBook = await book.create(bookFinished);
            res.status(201).json({ message: 'Success!', book: bookFinished });
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    };

    static async updateBookById(req, res) {
        try {
            const { id } = req.params;
            await book.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Editado com sucesso!', book });
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    };

    static async deleteBookById(req, res) {
        try {
            const { id } = req.params;
            await book.findByIdAndDelete(id);
            res.status(200).json({ message: 'Livro deletado com sucesso!', book })
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    };

    static async findBookByEditora(req, res) {
    try {
        const editora = req.query.editora;

        // Busca pela editora no banco de dados
        const foundBook = await book.find({ editora: editora });

        // Validação para editora não encontrada
        if (!foundBook) {
        return res.status(404).send({ message: 'Editora não encontrada!' });
        }

        // Se a editora for encontrada, retorna o livro
        res.status(200).send({foundBook});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }


};

export default BookController;