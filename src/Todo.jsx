import { useState } from "react";

// watched 3:36:28

function generateId() {
  return Math.floor(Math.random() * 10000); // Increase the range to reduce the chance of duplicate IDs
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() === "") return; // Prevent adding empty todos

    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
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
            return (
              <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Todo;
