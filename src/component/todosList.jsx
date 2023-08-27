import React, { useState } from 'react';
import { todoAction } from '../store/todoSlice';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from './todoItem';

const TodosList = (props) => {

    // const todoList=useSelector(todoAction.todoList);
    // const todoList=useSelector(state => state.todo.todoList);
    const todos=useSelector(state => state.todo.todos);
    

    // console.log("Todos.id:",Todos.id);
    // console.log("Todos.title:",Todos.title);
    // console.log("Todos.done:",Todos.done);
    
    // console.log("date:",Todos.date);
   




    return (
        <div>
          
         {todos.map(todo => 
           ( <TodoItem key={todo.id} id={todo.id} title={todo.title} category1={todo.category} done={todo.done} date={todo.date} 
             todos={todos} 
             value1={props.value1} setValue1={props.setValue1}
           category={props.category} setCategory={props.setCategory} 
           categoryOption={props.categoryOption} setCategoryOption={props.setCategoryOption}
           addCategory={props.addCategory}  />)
      
      )} 

      {todos.lenght ===0 && <h2>Empty TodoList !!!</h2>}
      
        </div>
    );
}

export default TodosList;
