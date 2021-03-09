import React, { useEffect, useState } from "react";
import "../../App.css";
import ToDoList from "./ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { getSearch, selectSearch } from "./todoSlice";
import { Empty } from "antd";

export default function SearchToDos({ todos }) {
  const search = useSelector(selectSearch);
  console.log(search, "s");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearch(inputSearch));
  }, []);
  const [inputSearch, setInputSearch] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputSearch, search, "sea");
    // dispatch(updateTodos(inputSearch));
    setInputSearch("");
  }

  return search != Empty ? (
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

      {/* <ToDoList todos={todos} /> */}
    </div>
  ) : null;
}
