import dotenv from 'dotenv';
import mysql from 'mysql2';
import express from 'express';
import routes from './routes/index.js';
import  createConnection  from './config/dbConnect.js';

dotenv.config(); 

const port = 3003;
const app = express();
routes(app);

const connection = await createConnection();

connection.on("error", (error) => {
  console.error("Connection Error:", error);
});

connection.once("open", () => {
  console.log("Connection succeeded!");
});


// Configurações do banco de dados
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  port: 3308, // Porta interna do MySQL no container
  password: process.env.PASSWORD, // Senha definida no Docker Compose
  database: process.env.DATABASE // Nome do banco de dados definido no Docker Compose
});


// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL');
  }
});

function buscaLivros(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  });
  // me retorne o livro do array que possui o id igual ao que eu estou passando na função / requisição
};

app.use((req, res, next) => {
  res.on('finish', () => {
    console.log(`Resposta: ${res.statusCode} ${res.statusMessage}`);
  });
  next();
});


// Rota simples
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
    status: 'success'
  });
});

// Rota para testar o banco de dados
app.get('/users', (req, res) => {
  console.log('Requisição recebida na rota /users');
  const query = 'SELECT * FROM users';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      res.status(500).send('Erro ao buscar dados');
    } else {
      console.log('Resultados da consulta:', results);
      res.json(results);
    }
  });
});

app.get('/livros/:id', (req, res) => {
    const bookIndex = buscaLivros(req.params.id);
    res.status(200).json(livros[bookIndex]);
});

app.put('/livros/:id', (req, res) => {
  const bookIndex = buscaLivros(req.params.id);
  // encontrei o livro pelo index
  const newBookTitutlo = livros[bookIndex].titulo = req.body.titulo;
  // o nome do livro novo que será recebido / alterado pelo body
  res.status(200).json({ message: 'Nome do livro alterado com sucesso!', newBookTitutlo });
});

// delete com SPLICE
app.delete('/livros/:id', (req, res) => {
  const bookIndex = buscaLivros(req.params.id);
  
  if (bookIndex !== -1) {  // Verifica se o livro foi encontrado
    livros.splice(bookIndex, 1);  // Remove o livro do array
    res.status(200).json({ message: 'Livro removido com sucesso!', livros });
  } else {
    res.status(404).json({ message: 'Livro não encontrado!' });
  }
});

// delete com FILTER
app.delete('/livros/:id', (req, res) => {
  const bookId = req.params.id;
  
  // Filtra o array para criar um novo sem o livro que possui o id especificado
  const updatedLivros = livros.filter(livro => livro.id !== bookId);
  
  if (updatedLivros.length === livros.length) {
    return res.status(404).json({ message: 'Livro não encontrado!' });
  }

  // Atualiza o array original 
  livros = updatedLivros;

  res.status(200).json({ message: 'Livro removido com sucesso!', livros });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
