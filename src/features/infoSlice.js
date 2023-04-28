import { createSlice } from "@reduxjs/toolkit";
import { crudInfo, getInfo } from "./localstorage";

const initialState = {
  infos: getInfo()
}

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.infos.push(action.payload);
      crudInfo(state.infos);
    },
    updateUser: (state, action) => {
      state.infos = state.infos.map((m) => m.id === action.payload.id ? action.payload : m)
      crudInfo(state.infos);
    },



  }
});

export const { addUser, updateUser } = infoSlice.actions;
export default infoSlice.reducer;
