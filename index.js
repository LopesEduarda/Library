const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = 3000;

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


// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
