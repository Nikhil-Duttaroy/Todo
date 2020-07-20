
    const todoInput=document.querySelector(".todo-input")
    const todoButton=document.querySelector(".todo-Button")
    const todoList=document.querySelector(".todo-list")
    const delTodo=document.querySelector(".trash-btn")
    
    todoButton.addEventListener('click',addTodo)
    // document.querySelector(".trash-btn").addEventListener('click',removeEventListener)


function addTodo(event) {
    event.preventDefault();
    // console.log("hello");
    const todoDiv=document.createElement("div")
    todoDiv.classList.add("todo");

    const newTodo=document.createElement("li")
    newTodo.innerText=todoInput.value;
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

    todoInput.value=" ";
}



