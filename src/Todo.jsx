import { useState } from "react";

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) => {
      todos.concat({
        text: input,
        id: generateId(),
      });
      setInput("");
    });
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul className="todo-list">
          {todos.map(({ text, id }) => {
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => removeTodo}>
                X
              </button>
            </li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
