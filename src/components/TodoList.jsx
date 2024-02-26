import React, { useState } from "react";

import SingleTodo from "./SingleTodo";
const TodoList = ({
  todoItems,
  todoCompleteHandler,
  todoDeleteHandler,
  todoEditHandler,
  edit,
  setEdit,
}) => {
  return (
    <div className="todoListContainer">
      {todoItems.map((items, index) => (
        <SingleTodo
          items={items}
          index={index}
          key={index}
          todoCompleteHandler={todoCompleteHandler}
          todoDeleteHandler={todoDeleteHandler}
          todoEditHandler={todoEditHandler}
        />
      ))}
    </div>
  );
};

export default TodoList;
