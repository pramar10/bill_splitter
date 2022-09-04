import { createSlice } from "@reduxjs/toolkit";

export const member = createSlice({
  name: "member",
  initialState: {
    members: [],
    member: {
      id: "",
      name: "",
      emailId: "",
      phoneNo: "",
      paid: "",
      groupName: "",
    },
  },
  reducers: {
    getMember: (state, action) => {
      state.member = state.members.find((el) => el.id === action.payload);
    },
    removeMembers: (state) => {
      state.member = {
        name: "",
        emailId: "",
        phoneNo: "",
        paid: "",
        groupName: "",
      };
    },
    addMember: (state, action) => {
      state.members = [...state.members, action.payload];
    },
    updateMember: (state, action) => {
      state.members = state.members.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
    deleteMember: (state, action) => {
      state.members = state.members.filter((el) => el.id !== action.payload);
    },
  },
});

export const {
  getMember,
  addMember,
  removeMembers,
  updateMember,
  deleteMember,
} = member.actions;

export default member.reducer;
