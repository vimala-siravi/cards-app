import "./App.css";
import React, { Component } from "react";
import CardList from "./CardList";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
