
import React, {useEffect,useState} from 'react';
import '../../App.css';
import ToDoList from './ToDoList';
import {  useSelector, useDispatch } from "react-redux";
import {getSearchToDos,selectSearch} from './todoSlice';

export default  function SearchToDos() {
const search = useSelector(selectSearch)
console.log(search ,'s')

const dispatch = useDispatch()
useEffect(() => {
  dispatch(getSearchToDos())
}, [search]);
const [inputSearch, setInputSearch] = useState('');

function handleSubmit(e) {
  e.preventDefault()

    // e.preventDefault();
    console.log(inputSearch,'search')
    dispatch(getSearchToDos(inputSearch));
    setInputSearch('')
}

  return <div>
    <form className="searchList" onSubmit={handleSubmit}>
        <input type="text" className="todo-entry" 
         onChange={(e) => setInputSearch(e.target.value)} 
        value = {inputSearch}
        placeholder="Enter Your ToDo Here"/>
    </form> 
    
    <ToDoList todo={search}/>
    {/* {todos.map(todo => <ToDoList todo={todos} />)} */}
  </div>
}