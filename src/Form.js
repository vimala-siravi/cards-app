import React, { useState } from "react";

const Form = (props) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((result) => {
        props.onSubmit(result);
        setUserName("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub username"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
        required
      />
      <button>Add Card</button>
    </form>
  );
};

export default Form;
