//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOption=document.querySelector(".filter-todo");


//Event Listeners
document.addEventListener('DOMContentLoaded',getTodos)
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo)

//Functions

function addTodo(event){
    event.preventDefault();
    //create div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');

    //create li-item
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // add todo to localstorage
    saveLocalTodos(todoInput.value);
    //create completeButton
    const completedButton=document.createElement('button');
    completedButton.innerHTML="<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //create trashButton
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    //append to list
    todoList.appendChild(todoDiv);
    todoInput.value="";

}

function deleteCheck(event){
    const item=event.target;
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.classList.add("fall");
        //removeLocalTodos(todo);
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0]==='complete-btn'){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
} 

function filterTodo(event){
const todos=todoList.childNodes;
todos.forEach(function(todo) {
      if(todo.length!==9){
      console.log(todo.length,todo)
      switch(event.target.value){
          case "all":
              todo.style.display = "flex";
              break;
          case "completed":
              if(todo.classList.contains('completed')){
                  todo.style.display = "flex";
              }else{
                  todo.style.display= "none";
              }
              break;
          case "uncompleted":
            if(todo.classList.contains('completed')){
                todo.style.display = "none";
            }else{
                todo.style.display= "flex";
            }
            break;
      }
    }
  });

}




function saveLocalTodos(todo){
    //check --do i already have this
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos =[]
    }else{
        todos =JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}


function getTodos(){
    console.log("ewhg")
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos =[];
    }else{
        todos =JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){


//create div
const todoDiv=document.createElement('div');
todoDiv.classList.add('todo');

//create li-item
const newTodo=document.createElement('li');
newTodo.innerText=todo;
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//create completeButton
const completedButton=document.createElement('button');
completedButton.innerHTML="<i class='fas fa-check'></i>";
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//create trashButton
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);


//append to list
todoList.appendChild(todoDiv);
todoInput.value="";


    })

}


function removeLocalTodos(todo){
    console.log("srdf")
    let todos;
    if(localStorage.getItem('todos')=== null){
        todos =[];
    }else{
        todos =JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex= todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem('todos',JSON.stringify(todos));

}