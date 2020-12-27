import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${this.state.userName}`)
      .then((res) => res.json())
      .then((result) => {
        this.props.onSubmit(result);
        this.setState({
          userName: ""
        });
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="GitHub username"
          value={this.state.userName}
          onChange={(event) =>
            this.setState({
              userName: event.target.value
            })
          }
          required
        />
        <button>Add Card</button>
      </form>
    );
  }
}

export default Form;
