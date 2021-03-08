import React, {useState }from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  deleteToDo,
  updateStatus,
  updateDescription

} from './todoSlice'

export default function ToDoList({todo}) {
  console.log(todo, 't')
  const [inputDescription, setInputDescription] = useState('');


  // const todos = useSelector(selectToDos);

  const dispatch = useDispatch();

  function handleUpdateStatus(id,status) {
    console.log('update')
    dispatch(updateStatus(id,status));
  }

  function handleUpdateDescription(id,desc) {
    dispatch(updateDescription(id,desc));
  }

  function removeToDo(obj) {
    console.log('delete')
    dispatch(deleteToDo(obj))
    
  }
  return (
    todo.map((item)=> {
      console.log(item, 'item')
      return (
    <div className="todoListContainer" key = {item.id}>
      
        
    
        <form onSubmit={handleUpdateDescription(item.id, inputDescription)}>
          
            <input type="text"
         onChange={(e) => setInputDescription(e.target.value)} 
         value={item.description}
                    className="descTodo"
            ></input>
        </form>
        <button
            className="todoCompleted"
            onClick={() => handleUpdateStatus(item.id,"completed")}
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
              onClick={() => {removeToDo(item.id)}}
            >
              X
            </button>
        </div>

    </div> )
    })  
  );
}