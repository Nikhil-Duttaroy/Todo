//To reset local Storage
//localStorage.clear();

const todoInput=document.querySelector(".todo-input")
const todoButton=document.querySelector(".todo-Button")
const todoList=document.querySelector(".todo-list")
const filterOption=document.querySelector(".filter-todo")
const todos=todoList.childNodes;
// const completedtodos=todos.childNodes;
// console.log(completedtodos);

//EVENT LISTENERS
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);


function addTodo(event) {
//PREVENT PAGE TO RELOAD
event.preventDefault();
//Create Div element with LI ,Buttons in it 
const todoDiv=document.createElement("div")
todoDiv.classList.add("todo");

const newTodo=document.createElement("li")
newTodo.innerText=todoInput.value;
newTodo.classList.add("todo-item")
todoDiv.appendChild(newTodo)
//Adding todos in local storage
saveLocalTodos(todoInput.value);

const completedButton=document.createElement("button");
completedButton.innerHTML ="<i class='fas fa-check'></i>"
completedButton.classList.add("completed-btn")
todoDiv.appendChild(completedButton);

const trashButton=document.createElement("button");
trashButton.innerHTML ="<i class='fas fa-trash'></i>"
trashButton.classList.add("trash-btn")
todoDiv.appendChild(trashButton);

todoList.appendChild(todoDiv)

todoInput.value=" ";
}


function deleteCheck(event){
const item=event.target;

if(item.classList[0] === 'trash-btn'){
    const todo=item.parentElement;
    todo.classList.add("fall")
    removeLocalTodos(todo)
    todo.addEventListener('transitionend',function(){
        todo.remove();
    })
}

if(item.classList[0] ==='completed-btn'){
    const todo=item.parentElement;
    todo.classList.toggle('completed');
}
}


function filterTodo(e){
//const todos=todoList.childNodes;
todos.forEach(function(todo){
    if (todo.classList !== undefined) {
        switch (e.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
            case "uncompleted":
            if (!todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          default:
            break;
        }
      }
      return;
    });
}


function saveLocalTodos(todo){
//check if already exists
let todos;
  if(localStorage.getItem('todos') === null){
      todos=[];
    }
  else{
      todos=JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos))
}

function getTodos(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos=[];
  }
else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach((todo) => {
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo");

    const newTodo=document.createElement("li")
    newTodo.innerText=todo;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    const completedButton=document.createElement("button");
    completedButton.innerHTML ="<i class='fas fa-check'></i>"
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton);

    const trashButton=document.createElement("button");
    trashButton.innerHTML ="<i class='fas fa-trash'></i>"
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv)

  })
}

function removeLocalTodos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos=[];
  }
  else{
    todos=JSON.parse(localStorage.getItem('todos'));
  }

   const todoIndex = todo.children[0].innerText
   todos.splice(todos.indexOf(todoIndex),1);
  localStorage.setItem('todos',JSON.stringify(todos));

}































