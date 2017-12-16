/* DRAFT V2 */

let todoList = {
  //Our list of tasks
  todos: [
    'item1', 'item2', 'item3'
  ],

  //Print out information
  printInfo: msg => document.write(msg),

  //Displays the tasks in our list
  displayTasks: function() {
    this.printInfo(this.todos.join(', '));
  },

  //Add a new task to the list
  addTask: function(task) {
    this.todos.push(task);
    this.displayTasks();
  },

  //Change an existing task in our list
  changeTask: function(index, newValue) {
    this.todos[index] = newValue;
    this.displayTasks();
  },

  //Delete a task from our list
  deleteTask: function(index) {
    this.todos.splice(index, 1);
    this.displayTasks();
  }
};

todoList.displayTasks();
