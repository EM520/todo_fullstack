import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    // inviteNotgoing: [],
    // inviteGoing: [],
    todos:[],
    search: []
  },
  reducers: {
    setToDo: (state, action) => {
      state.todos = action.payload;
      
    },
    setSearchToDo : (state, action) => {
      state.search = action.payload
    }
  }
});

export const { setToDo, setSearchToDo } = todoSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getToDos = () => (dispatch) => {
  axios.get("api/todos/1").then((resp) => {
    console.log(resp.data, "data");
    dispatch(setToDo(resp.data));
  });
};

// export const getRejectInvite = () => (dispatch) => {
//   axios.get("/notgoing").then((resp) => {
//     console.log(resp.data, "reject");
//     dispatch(showNotGoing(resp.data));
//   });
// };

export const addToDo = (todo) => (dispatch) => {
  console.log(todo,'hi')
  axios.post("/api/todos/1", {description:todo, status: "active", user_id: 1})
  .then((resp) => {
    console.log(resp, "add ToDo");
    dispatch(getToDos());
  });
};


export const deleteToDo = (idNum) => (dispatch) => {
  console.log(typeof idNum, idNum,'tan')
  axios.delete("/api/todos/"+ idNum )
  .then((resp) => {
    console.log(resp, "delete")
    dispatch(getToDos());


  })

}

export const updateDescription = (desc, id) => (dispatch) => {
  axios.patch('/api/todos/:userId')
  .then((resp) => {
    console.log(resp, "description")
    dispatch(getToDos());


  })
  

}
export const updateStatus = (id, status) => (dispatch) => {
  console.log(id, status, 'status')
  axios.patch('/api/todos',{id: id, status: status})
  .then((resp) => {
    console.log(resp, "status")
    // dispatch(getToDos());


  })

}

export const getSearchToDos = (desc) => (dispatch) => {
  console.log(`"%${desc}%"`,'desc')
  axios.get("api/todosearch/1/"+desc, {description: desc})
  .then((resp) => {
    console.log(resp.data, "search");
    dispatch(setSearchToDo(resp.data));
  });
};
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
// export const selectNotGoing = (state) => state.invite.inviteNotgoing;
// export const selectGoing = (state) => state.invite.inviteGoing;
export const selectToDos = (state) => state.todo.todos;
export const selectSearch = (state) => state.todo.search;

export default todoSlice.reducer;