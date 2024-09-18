import express from 'express';
import AuthorController from '../controllers/AuthorController.js';

const routes = express.Router();

routes.get('/authors', AuthorController.getAuthors);
routes.get('/author/:id', AuthorController.getAuthorById);
routes.post('/authors', AuthorController.createAuthors);
routes.put('/authors/:id', AuthorController.updateAuthorById);
routes.delete('/authors/:id', AuthorController.deleteAuthorById);

export default routes;