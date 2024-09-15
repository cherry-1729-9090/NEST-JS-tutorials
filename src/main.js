const express = require('express');
const { TodosController } = require('./todos/todos.controller');

const app = express();
app.use(express.json());

const todosController = new TodosController();

app.get('/todos', (req, res) => {
  res.json(todosController.findAll());
});

app.post('/todos', (req, res) => {
  const todo = req.body;
  const createdTodo = todosController.create(todo);
  res.status(201).json(createdTodo);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Application is running on: http://localhost:${PORT}`);
});
