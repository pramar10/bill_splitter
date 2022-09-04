import React from "react";
import "./sign.style.css";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [password, setPassword] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const loginToApp = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please enter the login credentials");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
        navigate("/create");
      })
      .catch((error) => alert(error));
    setPassword("");
    setEmail("");
  };

  return (
    <div className="sign-screen">
      <div className="sign-up-form">
        <h1>Bill Splitter</h1>
        <h2>Login</h2>
        <form action="">
          <input
            className="input-box"
            placeholder="Enter email or phone number"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            placeholder="Enter Password"
            className="input-box"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="signup-btn" onClick={loginToApp}>
            Sign in
          </button>
          <p>
            Back to<a href="/">Sign up</a>
          </p>
        </form>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Login;
