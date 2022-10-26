let todoForm    = document.getElementById('form');
let newTodo     = document.getElementById('add-todo');
let todos       = document.querySelector('.todos');
let deleteAll   = document.querySelector('.delete-all');

todoForm.addEventListener('submit', addTodo);

function addTodo(e) {
    e.preventDefault();
    let getTodoText         = newTodo.value;
    let todoDiv             = document.createElement('div');
    let todoDelSpan         = document.createElement('span');
    todoDiv.classList       = 'todo';
    todoDiv.innerText       = getTodoText;
    todoDelSpan.classList   = 'del';
    todoDelSpan.innerText   = 'Delete';
    todos.appendChild(todoDiv);
    todoDiv.appendChild(todoDelSpan);
    todoForm.reset();

    todoDelSpan.onclick = (e) => {
        todoDiv.remove();
    };
    
    deleteAll.onclick = () => {
        todos.innerHTML = "";
    };

    todoDiv.onclick = (e) =>  {
        e.preventDefault();
        let done = todoDiv.classList.contains('done');
        if(done){
            todoDiv.classList.remove('done');
        }else{
            todoDiv.classList.add('done');
        }
    }

}