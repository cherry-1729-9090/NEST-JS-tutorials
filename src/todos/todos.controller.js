const { TodosService } = require('./todos.service');

class TodosController {
  constructor() {
    this.todosService = new TodosService();
  }

  findAll() {
    return this.todosService.findAll();
  }

  create(todo) {
    return this.todosService.create(todo);
  }
}

module.exports = { TodosController };
