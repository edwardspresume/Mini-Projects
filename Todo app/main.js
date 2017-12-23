/* DRAFT V6 */

let todoList = {
  //Our list of tasks
  tasks: [],

  //Displays the tasks in our list
  displayTasks: function() {
    if (this.tasks.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My tasks:');
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].completed === true) {
          console.log(`(X) ${this.tasks[i].task}`);
        } else {
          console.log(`() ${this.tasks[i].task}`);
        }
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

  //Toggles between whether our not a task is completed
  toggleCompleted: function(index) {
    let task = this.tasks[index];
    task.completed = !task.completed;
    this.displayTasks();
  },

  //Toggles all of our tasks
  toggleAll: function() {
    let totalTaks = this.tasks.length;
    let completedTasks = 0;

    //Get number of completed tasks.
    for (let i = 0; i < totalTaks; i++) {
      if (this.tasks[i].completed === true) {
        completedTasks++;
      }
    }

    //If everything's true, making everything false.
    if (completedTasks === totalTaks) {
      for (let i = 0; i < totalTaks; i++) {
        this.tasks[i].completed = false;
      }
      //Otherwise, make everything true.
    } else {
      for (let i = 0; i < totalTaks; i++) {
        this.tasks[i].completed = true;
      }
    }
    this.displayTasks();
  }
};

//Object for our Event handlers
let handler = {
  displayTasks: () => todoList.displayTasks(),
  toggleAll: () => todoList.toggleAll();
}
