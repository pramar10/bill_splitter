import React from "react";
import "./style.css";
const Header = () => {
  const [amount, setAmount] = React.useState();
  const [person, setPerson] = React.useState();
  const [eachAmount, setEachAmount] = React.useState(undefined);

  const calculate = () => {
    setEachAmount(amount / person);
  };
  return (
    <>
      <div className="header">
        <h1 className="logo">Bill Splitter</h1>
        <input className="search-box" placeholder="Search" />
      </div>
      <div className="main-content">
        <div className="left-section">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-one"
            placeholder="Enter the amount"
            type={"number"}
          />
          <input
            value={person}
            className="input-two"
            placeholder="Number of People"
            onChange={(e) => setPerson(e.target.value)}
            type="number"
          />
          <button onClick={calculate} className="btn-each">
            Split
          </button>
          {eachAmount && (
            <h3 className="split-amount">Each person amount : {eachAmount}</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
