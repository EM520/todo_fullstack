import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    // inviteNotgoing: [],
    // inviteGoing: [],
    todos:[],
  },
  reducers: {
    setToDo: (state, action) => {
      state.todos = action.payload;
    }

  }
});

export const { setToDo } = todoSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const getToDos = () => (dispatch) => {
  axios.get("/todos").then((resp) => {
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
  axios.post("/api/todos/:userId", {}).then((resp) => {
    console.log(resp, "add ToDo");
  });
};


export const deleteToDo = (id) => (dispatch) => {
  axios.delete("/api/todos/:userId", )
  .then((resp) => {
    dispatch(getToDos());

  })

}

export const updateDescription = (desc, id) => (dispatch) => {
  axios.patch('/api/todos/:userId')

}
export const updateStatus = (id, status) => (dispatch) => {
  axios.patch('/api/todos/:userId')

}


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.invite.value)`
// export const selectNotGoing = (state) => state.invite.inviteNotgoing;
// export const selectGoing = (state) => state.invite.inviteGoing;
export const selectToDos = (state) => state.todo.todos;
export default todoSlice.reducer;