//Time
const currentDate = {
  todaysDate: new Date(),

  daysPlaceholder: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],

  monthsPlaceholder: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],

  //Logs the data placeholders into their respected id's
  displayDate: function() {
    document.getElementById("date").textContent = this.todaysDate.getDate();
    document.getElementById("day").textContent = this.daysPlaceholder[
      this.todaysDate.getDay()
    ];
    document.getElementById("month").textContent = this.monthsPlaceholder[
      this.todaysDate.getMonth()
    ];
  }
};

currentDate.displayDate();

//Object of how todoList
const todoList = {
  //Our list of tasks
  tasks: [],

  //Add a new task to the list
  addTask: function(task) {
    this.tasks.push({
      task: task,
      completed: false
    });
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
    const task = this.tasks[index];
    task.completed = !task.completed;
  },

  //Toggles all of our tasks
  toggleAll: function() {
    const totalTaks = this.tasks.length;
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
const handler = {
  addTask: () => {
    const addTaskInput = document.getElementById("addTaskInput");
    if (addTaskInput.value === "") {
      alert("Please enter a task to continue");
    } else {
      todoList.addTask(addTaskInput.value);
      addTaskInput.value = "";
    }

    view.displayTasks();
  },

  changeTask: () => {
    const changeTaskIndexInput = document.getElementById(
      "changeTaskIndexInput"
    );
    const changeTaskInput = document.getElementById("changeTaskInput");
    todoList.changeTask(
      changeTaskIndexInput.valueAsNumber,
      changeTaskInput.value
    );
    changeTaskIndexInput.value = "";
    changeTaskInput.value = "";
    view.displayTasks();
  },

  deleteTask: index => {
    todoList.deleteTask(index);
    view.displayTasks();
  },

  toggleCompleted: () => {
    let toggleCompletedIndexInput = document.getElementById(
      "toggleCompletedIndexInput"
    );
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = "";
    view.displayTasks();
  },

  toggleAll: () => {
    todoList.toggleAll();
    view.displayTasks();
  }
};

//Displays the tasks in our list
const view = {
  displayTasks: function() {
    let tasksUl = document.getElementById("tasksUl");
    tasksUl.innerHTML = "";

    //Loops through our tasks[] and stores them witin an Li(taskLi)
    todoList.tasks.forEach(function(task, index) {
      let taskLi = document.createElement("li");
      let taskCompletion = "";
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

  //Creates a delete button to be added with each task
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },

  setUpEventListener: function() {
    let tasksUl = document.getElementById("tasksUl");
    tasksUl.addEventListener("click", function(event) {
      //Targets the element that was clicked on.
      let elementClicked = event.target;

      //check if elementClicked is a delete deleteButton
      if (elementClicked.className === "deleteButton") {
        handler.deleteTask(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListener();
