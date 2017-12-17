/* DRAFT V4 */

let todoList = {
  //Our list of tasks
  tasks: [],

  //Print out information
  printInfo: msg => document.write(msg),

  //Displays the tasks in our list
  displayTasks: function() {
    this.printInfo(this.tasks.join(', '));
  },

  //Add a new task to the list
  addTask: function(task) {
    this.tasks.push({task: task, completed: false});
    this.displayTasks();
  },

  //Change an existing task in our list
  changeTask: function(index, newValue) {
    this.tasks[index] = newValue;
    this.displayTasks();
  },

  //Delete a task from our list
  deleteTask: function(index) {
    this.tasks.splice(index, 1);
    this.displayTasks();
  }
};
