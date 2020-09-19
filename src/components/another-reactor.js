import React from "react";

function AnotherReactor({ firstName, lastName, genre }) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>First name</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Genre</td>
            <td>{capitalize(genre)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AnotherReactor;
