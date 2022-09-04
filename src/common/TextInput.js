import React from "react";

const TextInput = ({ label, style, placeholder, ...props }) => {
  return (
    <div className="text-input">
      <p className="label">Name</p>
      <input placeholder="Search" />
    </div>
  );
};

export default TextInput;
