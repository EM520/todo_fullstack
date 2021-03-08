import React, {useEffect,useState} from 'react';
import '../../App.css';
import ToDoList from './ToDoList';
import {  useSelector, useDispatch } from "react-redux";
import {selectToDos, getToDos, addToDo} from './todoSlice';

export default  function ManageToDos() {
const todos = useSelector(selectToDos)
console.log(todos ,'m')

const dispatch = useDispatch()
useEffect(() => {
  dispatch(getToDos())
}, []);
const [inputTodo, setInputTodo] = useState('');

function handleSubmit(e) {
  e.preventDefault()

    // e.preventDefault();
    console.log(inputTodo,'input')
    dispatch(addToDo(inputTodo));
    setInputTodo('')
}


  return <div>
    <form className="toDoList" onSubmit={handleSubmit}>
        <input type="text" className="todo-entry" 
         onChange={(e) => setInputTodo(e.target.value)} 
        value = {inputTodo}
        className ="inputTodo"
        placeholder="Enter Your ToDo Here"/>
    </form> 
    <ToDoList todo={todos}/>
    {/* {todos.map(todo => <ToDoList todo={todos} />)} */}
  </div>
}