import { author } from '../models/Author.js';

class AuthorController {

    static async getAuthors(req, res) {
        try {
           const listAuthors = await author.find({});
           res.status(200).json({ listAuthors });
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    };

    static async getAuthorById(req, res) {
        try {
            const { id } = req.params;
            const findSpecificAuthor = await author.findById(id);
            res.status(200).json({findSpecificAuthor});
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    }

    static async createAuthors(req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: 'Success!', author: newAuthor });
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    };

    static async updateAuthorById(req, res) {
        try {
            const { id } = req.params;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: 'Editado com sucesso!', author });
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    }

    static async deleteAuthorById(req, res) {
        try {
            const { id } = req.params;
            await author.findByIdAndDelete(id);
            res.status(200).json({ message: 'Autor deletado com sucesso!', author })
        } catch (error) {
            res.status(500).json({ message: `${error.message}`});
        }
    }

};

export default AuthorController;