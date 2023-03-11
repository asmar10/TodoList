import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [item, setItem] = useState();
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setItem(value);
  }

  function handleClick() {
    setTodos((prevVal) => {
      return [...prevVal, item];
    });
    setItem("");
  }

  function deleteItem(item) {
    setTodos(
      todos.filter((todo, index) => {
        if (index !== item) {
          return todo;
        }
      })
    );
    // console.log(todos);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {todos.map((e, i) => {
            return (
              <>
                <TodoItem key={i} id={i} deleteItem={deleteItem} e={e} />
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
