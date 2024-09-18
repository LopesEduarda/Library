import express from 'express';
import book from './booksRoutes.js';
import author from './authorsRoutes.js';

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node js!"));

    app.use(express.json(), book, author);
};

export default routes;