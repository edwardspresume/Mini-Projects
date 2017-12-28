//Time
let currentDate = {
  todaysDate: new Date(),

  daysPlaceholder: [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
  ],

  monthsPlaceholder: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],

  displayDate: function () {
    document.getElementById("date").innerHTML = this.todaysDate.getDate();
    document.getElementById("day").innerHTML = this.daysPlaceholder[this.todaysDate.getDay()];
    document.getElementById("month").innerHTML = this.monthsPlaceholder[this.todaysDate.getMonth()];
    document.getElementById('addIcon').innerHTML = "&#xf055";
  }
};


currentDate.displayDate();

//Object of how todoList
let todoList = {
  //Our list of tasks
  tasks: [],

  //Add a new task to the list
  addTask: function (task) {
    this.tasks.push({
      task: task,
      completed: false
    });
  },

  //Change an existing task in our list
  changeTask: function (index, task) {
    this.tasks[index].task = task;
  },

  //Delete a task from our list
  deleteTask: function (index) {
    this.tasks.splice(index, 1);
  },

  //Toggles between whether our not a task is completed
  toggleCompleted: function (index) {
    let task = this.tasks[index];
    task.completed = !task.completed;
  },

  //Toggles all of our tasks
  toggleAll: function () {
    let totalTaks = this.tasks.length;
    let completedTasks = 0;

    //Get number of completed tasks.
    this.tasks.forEach(task => {
      if (task.completed === true) {
        completedTasks++;
      }
    });

    this.tasks.forEach(task => {
      //If everything's true, making everything false.
      if (completedTasks === totalTaks) {
        task.completed = false;

        //Otherwise, make everything true.
      } else {
        task.completed = true;
      }
    });
  }
};

//Object for our Event handlers
let handler = {
  addTask: function () {
    let AddTaskInput = document.getElementById('AddTaskInput');
    if (AddTaskInput.value === '') {
      alert('Please enter a task to continue');
    } else {
      todoList.addTask(AddTaskInput.value);
      AddTaskInput.value = '';
    }

    view.displayTasks();
  },

  changeTask: function () {
    let changeTaskIndexInput = document.getElementById('changeTaskIndexInput');
    let changeTaskInput = document.getElementById('changeTaskInput');
    todoList.changeTask(changeTaskIndexInput.valueAsNumber, changeTaskInput.value);
    changeTaskIndexInput.value = '';
    changeTaskInput.value = '';
    view.displayTasks();
  },

  deleteTask: function (index) {
    todoList.deleteTask(index);
    view.displayTasks();
  },

  toggleCompleted: function () {
    let toggleCompletedIndexInput = document.getElementById('toggleCompletedIndexInput');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
    view.displayTasks();
  },

  toggleAll: function () {
    todoList.toggleAll();
    view.displayTasks();
  }
};

//Displays the tasks in our list
let view = {
  displayTasks: function () {
    let tasksUl = document.getElementById('tasksUl');
    tasksUl.innerHTML = '';

    todoList.tasks.forEach(function (task, index) {
      let taskLi = document.createElement('li');
      let taskCompletion = '';
      if (task.completed === true) {
        taskCompletion = `(X) ${task.task}`;
      } else {
        taskCompletion = `( ) ${task.task}`;
      }

      taskLi.id = index;
      taskLi.textContent = taskCompletion;
      taskLi.appendChild(this.createDeleteButton());
      tasksUl.appendChild(taskLi);
    }, this);
  },

  createDeleteButton: function () {
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  setUpEventListener: function () {
    let tasksUl = document.getElementById('tasksUl');
    tasksUl.addEventListener('click', function (event) {
      //Targets the element that was clicked on.
      let elementClicked = event.target;

      //check if elementClicked is a delete deleteButton
      if (elementClicked.className === 'deleteButton') {
        handler.deleteTask(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListener();