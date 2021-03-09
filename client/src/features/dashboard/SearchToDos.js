import React, { useEffect, useState } from "react";
import "../../App.css";
import ToDoList from "./ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { getSearchToDos, selectSearch } from "./todoSlice";
import { Empty } from "antd";

export default function SearchToDos({ todos }) {
  const search = useSelector(selectSearch);
  console.log(search.length, "s");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchToDos(inputSearch));
  }, []);
  const [inputSearch, setInputSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputSearch, search, "sea");
    // dispatch(updateTodos(inputSearch));
    setInputSearch("");
  }

  return (
    <div>
      <form className="searchList" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-entry"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Enter Your Search Here"
        />
      </form>
      {/* {todos.map((todos) => (
        <ToDoList todos={todos} />
      ))} */}
            {/* { search.length !== 0 ? (

        <ToDoList todos={todos} /> ) : null } */}
    </div>
  )
}
