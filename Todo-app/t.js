const currentDay = {
  today: new Date(),

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

  displayDate: function() {
    document.getElementById("date").textContent = this.today.getDate();
    document.getElementById("day").textContent = this.daysPlaceholder[
      this.today.getDay()
    ];
    document.getElementById("month").textContent = this.monthsPlaceholder[
      this.today.getMonth()
    ];
  }
};

currentDay.displayDate();

const todoList = {
  tasks: [],

  display: function() {
    if (this.tasks.length === 0) {
      console.log("List is empty");
    } else {
      console.log("Tasks:");
      this.tasks.forEach(task => {
        if (task.completed === true) {
          console.log(`(X) ${task}`);
        } else {
          console.log(`( ) ${task}`);
        }
      });
    }
  },

  add: function(task) {
    this.tasks.push(task);
    this.display();
  },

  change: function(index, task) {
    this.tasks[index] = task;
    this.display();
  }
};
