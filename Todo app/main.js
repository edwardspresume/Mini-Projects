/* DRAFT V8 */

let todoList = {
  //Our list of tasks
  tasks: [],

  //Add a new task to the list
  addTask: function(task) {
    this.tasks.push({task: task, completed: false});
  },

  //Change an existing task in our list
  changeTask: function(index, task) {
    this.tasks[index].task = task;
  },

  //Delete a task from our list
  deleteTask: function(index) {
    this.tasks.splice(index, 1);
  },

  //Toggles between whether our not a task is completed
  toggleCompleted: function(index) {
    let task = this.tasks[index];
    task.completed = !task.completed;
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
  }
};

//Object for our Event handlers
let handler = {
  addTask: function() {
    let AddTaskInput = document.getElementById('AddTaskInput');
    if (AddTaskInput.value === '') {
      alert('Please enter a task to continue');
    } else {
      todoList.addTask(AddTaskInput.value);
      AddTaskInput.value = '';
    }

    view.displayTasks();
  },

  changeTask: function() {
    let changeTaskIndexInput = document.getElementById('changeTaskIndexInput');
    let changeTaskInput = document.getElementById('changeTaskInput');
    todoList.changeTask(changeTaskIndexInput.valueAsNumber, changeTaskInput.value);
    changeTaskIndexInput.value = '';
    changeTaskInput.value = '';
    view.displayTasks();
  },

  deleteTask: function() {
    let deleteTaskIndexInput = document.getElementById('deleteTaskIndexInput');
    todoList.deleteTask(deleteTaskIndexInput.valueAsNumber);
    deleteTaskIndexInput.value = '';
    view.displayTasks();
  },

  toggleCompleted: function() {
    let toggleCompletedIndexInput = document.getElementById('toggleCompletedIndexInput');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';

    view.displayTasks();
  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTasks();
  }
};

let view = {
  //Displays the tasks in our list
  displayTasks: function() {
    let tasksUl = document.getElementById('tasksUl');
    tasksUl.innerHTML = '';
    for (let i = 0; i < todoList.tasks.length; i++) {
      let taskLi = document.createElement('li');
      let taskCompletion = '';
      let task = todoList.tasks[i];

      if (task.completed === true) {
        taskCompletion = `(X) ${task.task}`;
      } else {
        taskCompletion = `() ${task.task}`;
      }

      taskLi.textContent = taskCompletion;
      tasksUl.appendChild(taskLi);
    }
  }
}
