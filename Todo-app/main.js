//Time
let currentDate = {
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

  displayDate: function () {
    document.getElementById("date").innerHTML = this.todaysDate.getDate();
    document.getElementById("day").innerHTML = this.daysPlaceholder[
      this.todaysDate.getDay()
    ];
    document.getElementById("month").innerHTML = this.monthsPlaceholder[
      this.todaysDate.getMonth()
    ];
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

  //Delete a task from our list
  deleteTask: function (index) {
    this.tasks.splice(index, 1);
  },

};

//Object for our Event handlers
let handler = {
  addTask: () => {
    let addTaskInput = document.getElementById("addTaskInput");
    if (addTaskInput.value === "") {
      alert("Please enter a task to continue");
    } else {
      addTaskInput
      todoList.addTask(addTaskInput.value);
      addTaskInput.value = "";
    }

    view.displayTasks();
  },

  deleteTask: index => {
    todoList.deleteTask(index);
    view.displayTasks();
  },

};

//Displays the tasks to the DOM
let view = {
  displayTasks: function () {
    let tasksUl = document.getElementById("tasksUl");
    tasksUl.innerHTML = "";

    todoList.tasks.forEach(function (task, index) {
      let taskLi = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      taskLi.textContent = task.task;
      taskLi.appendChild(checkbox);

      //If check box is clicked modify taskLi text style
      checkbox.onclick = function () {
        if (this.checked) {
          task.completed = true;
          taskLi.style.color = "#848484"
          taskLi.style.textDecoration = "line-through";
        } else {
          task.completed = false;
          taskLi.style.color = "#000"
          taskLi.style.textDecoration = "none";
        }
      };

      taskLi.id = index;
      taskLi.appendChild(this.createDeleteButton());
      tasksUl.appendChild(taskLi);
      let taskItems = document.getElementById("taskItems");
      taskItems.innerHTML = `${(index += 1)} Task left`;
    }, this);

    //Creates a materialize label for each checkbox
    $("input[type=checkbox]").each(function () {
      if (this.nextSibling.nodeName != "label") {
        $(this).after('<label for="' + this.id + '" class="checkbox"></label>');
      }
    });
  },

  //Creates a delete button to be added with each task
  createDeleteButton: function () {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },

  setUpEventListener: function () {
    let tasksUl = document.getElementById("tasksUl");
    tasksUl.addEventListener("click", function (event) {
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