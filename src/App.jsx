import { useState, useEffect } from "react";
import InputTodo from "./components/InputTodo";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    console.log("inside 1 effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const items = await JSON.parse(localStorage.getItem("items"));
      console.log("Initial state:", items);
      setTodoItems(items);
    } catch (error) {
      console.error("Error fetching data from localStorage:", error);
    }
  };
  useEffect(() => {
    console.log("inside 2 effect");
    localStorage.setItem("items", JSON.stringify(todoItems));
  }, [todoItems]);

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const addtodoItemHandler = () => {
    if (inputValue) {
      setTodoItems([
        ...todoItems,
        { title: inputValue, completed: false, edit: false },
      ]);
      setInputValue("");
    } else {
      console.log("enter some todo item");
    }
  };

  const todoCompleteHandler = (i) => {
    const updatedTodoItems = [...todoItems];

    updatedTodoItems[i].completed = !updatedTodoItems[i].completed;

    setTodoItems(updatedTodoItems);
  };

  const todoDeleteHandler = (i) => {
    const updatedTodoItems = [...todoItems];
    const newUpdatedTodoItems = updatedTodoItems.filter(
      (item, index) => index !== i
    );
    setTodoItems(newUpdatedTodoItems);
  };

  const todoEditHandler = (i, editedText) => {
    if (editedText) {
      const updatedTodoItems = [...todoItems];
      updatedTodoItems[i].title = editedText;
      updatedTodoItems[i].edit = !updatedTodoItems[i].edit;
      setTodoItems(updatedTodoItems);
    }
  };

  return (
    <div style={{ width: "500px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#08C56B",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <MdFormatListBulletedAdd size={40} color="white" />
        </div>
        <h1 className="titleText">To-Do App</h1>
      </div>
      <div className="todoContainer">
        {/* Input Container */}
        <div className="inputContainer">
          <InputTodo
            inputValue={inputValue}
            changeInputHandler={changeInputHandler}
          />
          <div className="addButton" onClick={() => addtodoItemHandler()}>
            <IoMdAdd color="white" size={25} title="Add" />
          </div>
        </div>
        {/* Todo List Container */}
        <div>
          <TodoList
            todoItems={todoItems}
            todoCompleteHandler={todoCompleteHandler}
            todoDeleteHandler={todoDeleteHandler}
            todoEditHandler={todoEditHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
