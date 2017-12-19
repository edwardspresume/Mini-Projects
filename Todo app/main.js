/* DRAFT V4 */

let todoList = {
  //Our list of tasks
  tasks: [],

  //Print out information
  printInfo: msg => document.write(msg),

  //Displays the tasks in our list
  displayTasks: function() {
    if (this.tasks.length === 0) {
      console.log('Your to do list is empty!');
    } else {
      console.log('My tasks:');
      for (let i = 0; i < this.tasks.length; i++) {
        console.log(this.tasks[i].task);
      }
    }
  },

  //Add a new task to the list
  addTask: function(task) {
    this.tasks.push({task: task, completed: false});
    this.displayTasks();
  },

  //Change an existing task in our list
  changeTask: function(index, task) {
    this.tasks[index].task = task;
    this.displayTasks();
  },

  //Delete a task from our list
  deleteTask: function(index) {
    this.tasks.splice(index, 1);
    this.displayTasks();
  },

  //Toggles between whether our not the task is completed
  toggleCompleted: function(index) {
    let task = this.tasks[index];
    task.completed = !task.completed;
    this.displayTasks();
  }
};
