import React, { useEffect, useState } from "react";
import "../../App.css";
import ToDoList from "./ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { selectToDos, getToDos, addToDo } from "./todoSlice";

export default function ManageToDos() {
  const todos = useSelector(selectToDos);
  console.log(todos, "m");

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("called once....");
    dispatch(getToDos());
  }, []);
  const [inputTodo, setInputTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit the todo....");
    // e.preventDefault();
    console.log(inputTodo, "input");
    dispatch(addToDo(inputTodo));
    setInputTodo("");
  }

  return (
    <div>
      <form className="toDoList" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-entry"
          onChange={(e) => setInputTodo(e.target.value)}
          value={inputTodo}
          className="inputTodo"
          placeholder="Enter Your ToDo Here"
        />
      </form>
      {/* {todos.map(todos => <ToDoList todos ={todos}/>)} */}
      <ToDoList todos={todos} />
    </div>
  );
}
