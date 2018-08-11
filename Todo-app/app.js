/* ==========================================================================
                        Calculates and displays current date
   ========================================================================== */

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

  //Delete a task from our list
  deleteTask: function(index) {
    this.tasks.splice(index, 1);
  }
};

//Object for our Event handlers
const handler = {
  addTask: () => {
    const addTaskInput = document.getElementById("addTaskInput");
    if (addTaskInput.value === "") {
      alert("Please enter a task to continue");
      return;
    } else {
      todoList.addTask(addTaskInput.value);
      addTaskInput.value = "";
    }

    view.displayTasks();
  },

  deleteTask: index => {
    todoList.deleteTask(index);
    view.displayTasks();
  }
};

//Displays the tasks to the DOM in a list format
const view = {
  displayTasks: function() {
    let tasksUl = document.getElementById("tasksUl");
    tasksUl.innerHTML = "";

    //Loops through our tasks[] and stores them witin an Li(taskLi)
    todoList.tasks.forEach(function(task, index) {
      let taskLi = document.createElement("li");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      //If check box is clicked modify taskLi text style
      checkbox.onclick = function() {
        if (this.checked) {
          task.completed = true;
          taskLi.style.color = "#848484";
          taskLi.style.textDecoration = "line-through";
        } else {
          task.completed = false;
          taskLi.style.color = "#000";
          taskLi.style.textDecoration = "none";
        }
      };
      //Embeds these components within the taskLi
      taskLi.appendChild(checkbox);
      taskText = document.createTextNode(task.task);
      taskLi.appendChild(taskText);
      taskLi.id = index;
      taskLi.appendChild(this.createDeleteButton());
      tasksUl.appendChild(taskLi);
      let taskItems = document.getElementById("taskItems");
      taskItems.textContent = `${(index += 1)} Task left`;
    }, this);

    //Creates a materialize label for each checkbox
    $("input[type=checkbox]").each(function() {
      if (this.nextSibling.nodeName != "label") {
        $(this).after('<label for="' + this.id + '" class="checkbox"></label>');
      }
    });
  },

  //Creates a delete button to be added with each task
  createDeleteButton: function() {
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },

  filterTasks: function() {
    const filter = document.querySelector("#filter");

    filter.addEventListener("keyup", function(e) {
      const text = e.target.value.toLowerCase();

      tasksUl.childNodes.forEach(function(task) {
        const item = task.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
          task.style.display = "block";
        } else {
          task.style.display = "none";
        }
      });
    });
  },

  setUpEventListener: function() {
    const tasksUl = document.getElementById("tasksUl");
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

view.filterTasks();

view.setUpEventListener();
