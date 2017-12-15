/* DRAFT V1 */

let todos = ['item1', 'item2', 'item3'];

//Print information to the page
let print = (msg) => {
  document.write(msg);
};

//Displays the task in our list
let displayTodos = () => {
  print(todos.join(', '));
};

//Add a new task to the list
let addTodo = (task) => {
  todos.push(task);
  displayTodos();
};

//Change an existing task in our list
let changeTodo = (index, newValue) => {
  todos[index] = newValue;
  displayTodos();
};

//Delete a task from our list
let deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodos();
};

deleteTodo(2);
