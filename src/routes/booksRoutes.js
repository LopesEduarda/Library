import express from 'express';
import BookController from '../controllers/BookController.js';

const routes = express.Router();

routes.get('/livros', BookController.getBooks);
routes.get('/livros/busca', BookController.findBookByEditora);
routes.get('/livro/:id', BookController.getBookById);
routes.post('/livros', BookController.createBooks);
routes.put('/livros/:id', BookController.updateBookById);
routes.delete('/livros/:id', BookController.deleteBookById);

export default routes;