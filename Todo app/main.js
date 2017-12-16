/* DRAFT V2 */

let todoList = {
  //Our list of tasks
  todos: [
    'item1', 'item2', 'item3'
  ],

  //Displays the tasks in our list
  displayTodos: function() {
    console.log(this.todos.join(', '));
  },

  //Add a new task to the list
  addTodo: function(task) {
    this.todos.push(task);
    this.displayTodos();
  },

  //Change an existing task in our list
  changeTodo: function(index, newValue) {
    this.todos[index] = newValue;
    this.displayTodos();
  },

  //Delete a task from our list
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  }
};
