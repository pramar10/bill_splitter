import React from "react";
import TextInput from "./common/TextInput";
import CreateGroup from "./components/CreateGroup";
import Group from "./components/Group";
import Header from "./components/Header";
import PersonCard from "./components/PersonCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./redux/user";
function App() {
  const user = useSelector(selectUser);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {user && (
            <>
              <Route path="/create" element={<CreateGroup />} />
              <Route path="/member" element={<Group />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
