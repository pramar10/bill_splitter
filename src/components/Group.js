import React from "react";
import PersonCard from "./PersonCard";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../redux/member";
import { db } from "./firebase";
import {
  orderBy,
  query,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

const Group = () => {
  const [name, setName] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [extraPaid, setExtraPaid] = React.useState(null);
  const dispatch = useDispatch();
  const [eachAmount, setEachAmount] = React.useState(undefined);
  const members = useSelector((state) => state.member.members);
  const group = useSelector((state) => state.group.groups);
  const memberCol = collection(db, "members");
  let id = parseInt(Date.now() * Math.random());
  const addMembers = () => {
    if (name && phone && email) {
      dispatch(
        addMember({
          id: id,
          name: name,
          emailId: email,
          phoneNo: phone,
          paid: extraPaid,
          groupName: group.groupName,
        })
      );
      addDoc(memberCol, {
        id: id,
        name: name,
        emailId: email,
        phoneNo: phone,
        paid: extraPaid,
        groupName: group.groupName,
      });
      setName("");
      setEmail("");
      setPhone("");
      setExtraPaid("");
    }
  };

  const calculateBill = () => {
    console.log(group.amount, members.length);
    setEachAmount((group.amount / members.length).toFixed(2));
  };
  return (
    <div className="group">
      <div className="add-member">
        <div className="trip">
          <p className="group-name">Group : {group.groupName}</p>
          {group.amount && (
            <p className="trip-cost">Trip Cost : {group.amount}</p>
          )}
        </div>

        <input
          className="input-one"
          placeholder="Enter the name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          placeholder="Enter Email id"
          className="input-one"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Enter Phone number"
          className="input-one"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type={"number"}
        />
        <input
          placeholder="If any amount paid"
          className="input-one"
          onChange={(e) => setExtraPaid(e.target.value)}
          value={extraPaid}
          type={"number"}
        />
        <button className="add-person" onClick={addMembers}>
          Add member
        </button>
        <button className="add-person" onClick={calculateBill}>
          Split bill
        </button>
      </div>
      <div className="view-member">
        {members.map((member) => (
          <PersonCard
            name={member.name}
            email={member.emailId}
            phone={member.phoneNo}
            id={member.id}
            eachAmount={eachAmount}
            paid={member.paid * 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Group;
