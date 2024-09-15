const { Module } = require('@nestjs/common');
const { TodosController } = require('./todos/todos.controller');
const { TodosService } = require('./todos/todos.service');

@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
class AppModule {}

module.exports = { AppModule };
