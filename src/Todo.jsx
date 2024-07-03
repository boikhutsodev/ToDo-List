import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </>
  );
}

export default Todo;
