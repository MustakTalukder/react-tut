import React, { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newValue: "Who are you?"
    };
    this.updateInputValue = this.updateInputValue.bind(this);
  
  }

  updateInputValue(evt) {
    this.setState({
      newValue: evt.target.value
    });
  }

  render() {
    return (
      <div>
        <div id="box">
          <input
            value={this.state.value}
            onChange={this.updateInputValue}
            id="input-box"
            type="text"
            placeholder="Enter Your Name"
          />
        </div>

        <div id="list">
          <h1>{this.state.newValue}</h1>
        </div>
      </div>
    );
  }
}

export default First;
