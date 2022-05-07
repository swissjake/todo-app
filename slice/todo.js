import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    items: [],
    text: ""
  }

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
      //actions
    addtoTodo: (state, action) => {
        state.items = [...state.items, action.payload]
    },
    deleteTodo: (state, action) => {
        const index = state.items.findIndex((todoItem) => todoItem.id === action.payload.id);
            let newTodo =  [...state.items];
            if(index >= 0){
            //the items exists in the basket
            newTodo.splice(index, 1)
            }else{
            console.warn(
            `cant remove todo [id: ${action.payload}]`
            );
        }     
        state.items = newTodo;
    },
    setCheck: (state, action) => {
      state.items.map((item) => {
        if(action.payload === item.id){
          if(item.done === true){
            item.done = false
          }else{
            item.done = true
          }
        }
      })
    }
  }
})

// Action creators are generated for each case reducer function
export const {addtoTodo, deleteTodo, setCheck} = todoSlice.actions;

//selectors
export const selectItems = (state) => state.todo.items;
export default todoSlice.reducer;

