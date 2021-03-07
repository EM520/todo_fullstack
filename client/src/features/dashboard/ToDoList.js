import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  deleteToDo,
  updateStatus,
  updateDescription

} from './todoSlice'

export default function ToDoList() {
  // const todos = useSelector(selectToDos);

  const dispatch = useDispatch();

  function handleUpdateStatus(id,status) {
    dispatch(updateStatus(id,status));
  }

  function handleUpdateDescription(id,desc) {
    dispatch(updateDescription(id,desc));
  }


  return (
    <div className="todoListContainer">
        <form>
            <input type="text"
                    // onChange={}
                    // value={}
                    // className=""
            ></input>
        </form>
        <div
            className="todoCompleted"
            onClick={() => handleUpdateStatus(item.id,'completed')}
        >
            Completed
        </div>
        <div
            className="todoActive"
            onClick={() => handleUpdateStatus(item.id, 'active')}
        >
            Active
        </div>
        <div>
        <button
              className="todoDeleteBtn"
              onClick={() => {dispatch(deleteToDo(item))}}
            >
              X
            </button>
        </div>

    </div>
  );
}