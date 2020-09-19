import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Reactor from "./components/Reactor";

function App() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  function onSubmitHandler(data) {
    setName(data.name);
    setColor(data.color);
    setSize(data.size);
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmitHandler} />
      <Reactor name={name} color={color} size={size} />
    </div>
  );
}

export default App;
