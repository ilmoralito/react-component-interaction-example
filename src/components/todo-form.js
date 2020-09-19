import React, { useState } from "react";

export default function TodoForm({ onSubmit }) {
  const [task, setTask] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!task) return;

    onSubmit({ id: Date.now(), task, completed: false });

    setTask("");
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <input onChange={event => setTask(event.target.value)} value={task} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}
