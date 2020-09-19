import React from "react";

function Reactor(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        Selected color is{" "}
        <span style={{ color: props.color }}>{props.color}</span>
      </p>
      <p style={{ fontSize: `${props.size}em` }}>
        Selected size is {props.size}
      </p>
    </div>
  );
}

export default Reactor;
