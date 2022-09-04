import React from "react";
import "./style.css";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addGroup } from "../redux/group";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { logout, selectUser } from "../redux/user";
const CreateGroup = () => {
  const [groupName, setGroupName] = React.useState("");
  const [tripName, setTripName] = React.useState("");
  const [amount, setAmount] = React.useState(null);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  let navigate = useNavigate();
  const createGroup = () => {
    if (groupName) {
      dispatch(
        addGroup({
          groupName: groupName,
          tripName: tripName,
          amount: amount,
        })
      );
      navigate("/member");
    }
  };

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    navigate("/login");
  };
  const displayUser = user.email.split("@");
  console.log(displayUser[0]);
  return (
    <>
      <div className="text-split">
        <h1 className="split-bill-text">Hike with Friends</h1>
        <h1 className="logout-text" onClick={logoutOfApp}>
          Logout
        </h1>
      </div>
      <div className="main-ctn">
        <div className="create-group">
          <div className="center-create-div">
            <h1 className="welcome-user">Welcome {displayUser[0]} </h1>
            <input
              className="input-one"
              placeholder="Enter Group Name"
              onChange={(e) => setGroupName(e.target.value)}
              value={groupName}
            />
            <input
              className="input-one"
              placeholder="Trip Name"
              onChange={(e) => setTripName(e.target.value)}
              value={tripName}
            />
            <input
              className="input-one"
              placeholder="Total cost"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              type={"number"}
            />
            <button onClick={createGroup} className="add-person">
              Create Group
            </button>
          </div>
        </div>
        <div className="left-section-home">
          <TripCard pic={1} />
          <TripCard pic={2} />
          <TripCard pic={3} />
          <TripCard pic={4} />
          <TripCard pic={5} />
          <TripCard pic={1} />
          <TripCard pic={6} />
          <TripCard pic={2} />
        </div>
      </div>
    </>
  );
};

const TripCard = ({ pic }) => {
  return <img src={require(`../img/${pic}.jpg`)} className="trip-img" />;
};

export default CreateGroup;
