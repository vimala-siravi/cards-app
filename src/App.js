import "./App.css";
import React, { useState } from "react";
import CardList from "./CardList";
import Form from "./Form";

const App = (props) => {
  const [profiles, addNewProfile] = useState([]);

  return (
    <div>
      <div className="header">{props.title}</div>
      <Form
        onSubmit={(profileData) => addNewProfile([...profiles, profileData])}
      />
      <CardList profiles={profiles} />
    </div>
  );
};

export default App;
