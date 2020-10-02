import React from "react";

const Form = ({ handleChange, input,handleClick }) => {
  return (
    <form className="form">
      <input type="text" onChange={handleChange} value={input} />
      <button onClick={handleClick}>ADD</button>
    </form>
  );
};

export default Form;
