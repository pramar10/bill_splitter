import React from "react";
import "./sign.style.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
            })
          );
        });
      })
      .catch((error) => alert(error));
    setName("");
    setPhone("");
    setPassword("");
    setEmail("");
    navigate("/create");
  };
  return (
    <div className="sign-screen">
      <div className="sign-up-form">
        <h1>Bill Splitter</h1>
        <h2>Sign Up</h2>
        <input
          className="input-box"
          placeholder="Enter the name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          placeholder="Enter Email id"
          className="input-box"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Enter Phone number"
          className="input-box"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />
        <input
          placeholder="Enter Password"
          className="input-box"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={"password"}
        />
        <hr />
        <p className="or">OR</p>
        <button className="signup-btn" onClick={register}>
          Sign up
        </button>
        <p>
          Do you have an account ? <a href="/login">Sign in</a>{" "}
        </p>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default SignUp;
