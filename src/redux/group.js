import { createSlice } from "@reduxjs/toolkit";

export const group = createSlice({
  name: "group",
  initialState: {
    groups: {},
    group: {
      id: "",
      grpupName: "",
      tripName: "",
      amount: "",
    },
  },
  reducers: {
    getGroup: (state, action) => {
      state.group = state.groups.find((el) => el.id === action.payload);
    },
    removeGroup: (state) => {
      state.group = {
        groupName: "",
        tripName: "",
        amount: "",
      };
    },
    addGroup: (state, action) => {
      state.groups = action.payload;
    },
    updateGroup: (state, action) => {
      state.groups = state.groups.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    deleteGroup: (state, action) => {
      state.groups = state.groups.filter((el) => el.id !== action.payload);
    },
  },
});

export const { getGroup, addGroup, removeGroup, updateGroup, deleteGroup } =
  group.actions;

export default group.reducer;
