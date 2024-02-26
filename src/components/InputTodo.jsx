import React from "react";

const InputTodo = ({ inputValue, changeInputHandler }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder="Enter Things To Do "
      value={inputValue}
      onChange={changeInputHandler}
    />
  );
};

export default InputTodo;
