import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  function onSubmitHandler(event) {
    event.preventDefault();

    // validate
    if (!name) {
      alert("Name is required");
      return;
    }

    if (!color) {
      alert("Color is required");
      return;
    }

    if (!size) {
      alert("Size is required");
      return;
    }

    // send data to parent
    props.onSubmit({ name, color, size });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="group">
        <label htmlFor="name">Name</label>
        <input onChange={event => setName(event.target.value)} value={name} />
      </div>

      <div className="group">
        <label htmlFor="color">Color</label>
        <select onChange={event => setColor(event.target.value)} value={color}>
          <option value="">Select color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <div className="group">
        <label htmlFor="size">Size</label>
        <select onChange={event => setSize(event.target.value)} value={size}>
          <option value="">Select size</option>
          <option value="1">S</option>
          <option value="1.5">M</option>
          <option value="2">L</option>
          <option value="3">XL</option>
        </select>
      </div>

      <div className="group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
