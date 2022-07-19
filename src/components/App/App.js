import "./App.css";
import Input from "../Input/Input";
import List from "../List/List";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function addToDo() {
    setTodos([
      ...todos,
      { id: Math.random() * 500, item: text, completed: false },
    ]);
    setText("");
  }

  console.log(todos);
  return (
    <div className="main">
      <div className="heading">
        <h1>To Do List</h1>
      </div>
      <div className="input">
        <Input addToDo={addToDo} text={text} setText={setText} />
      </div>

      <div className="list">
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
export default App;
