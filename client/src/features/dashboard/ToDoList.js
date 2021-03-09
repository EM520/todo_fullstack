import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteToDo, updateStatus, updateDescription } from "./todoSlice";
const emptyString = " ";

function Description({ id, description }) {
  const dispatch = useDispatch();
  const [canEdit, setCanEdit] = useState(false);
  const [inputDescription, setInputDescription] = useState("");
  useEffect(() => {
    setInputDescription(description);
  }, []);
  function handleUpdate(e) {
    // e.preventDefault();
    dispatch(updateDescription(id, inputDescription));
  }
  return (
    <div>
      {canEdit ? (
        <form onSubmit={handleUpdate(id, description, emptyString)}>
          <input
            type="text"
            onChange={(e) => setInputDescription(e.target.value)}
            value={inputDescription}
            className="descTodo"
          ></input>
        </form>
      ) : (
        <p className="descTodo" onClick={() => setCanEdit(true)}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function ToDoList({ todos }) {
  console.log(todos, "todo");

  // const todos = useSelector(selectToDos);

  const dispatch = useDispatch();

  function handleUpdateStatus(id, status) {
    console.log("update", id, status);
    dispatch(updateStatus(id, status));
  }

  function removeToDo(id) {
    console.log("delete");
    dispatch(deleteToDo(id));
  }
  return todos.map((item) => {
    console.log(item, "item");
    return (
      <div className="todoListContainer" key={item.id}>
        <Description id={item.id} description={item.description} />
        <button
          className="todoCompleted"
          onClick={() => handleUpdateStatus(item.id, "completed")}
        >
          Completed
        </button>
        <button
          className="todoActive"
          onClick={() => handleUpdateStatus(item.id, "active")}
        >
          Active
        </button>
        <div>
          <button
            className="todoDeleteBtn"
            onClick={() => {
              removeToDo(item.id);
            }}
          >
            X
          </button>
        </div>
      </div>
    );
  });
}
