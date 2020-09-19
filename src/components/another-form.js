import React from "react";

function AnotherForm({ onChangeFirstName, onChangeLastName, onChangeGenre }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="firstName">First name</label>
        <input onChange={event => onChangeFirstName(event.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last name</label>
        <input onChange={event => onChangeLastName(event.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select onChange={event => onChangeGenre(event.target.value)}>
          <option value="">Select genre</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </form>
  );
}

export default AnotherForm;
