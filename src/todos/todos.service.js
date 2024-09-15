class TodosService {
    constructor() {
      this.todos = [];
    }
  
    findAll() {
      return this.todos;
    }
  
    create(todo) {
      this.todos.push(todo);
      return todo;
    }
  }
  
  module.exports = { TodosService };
  