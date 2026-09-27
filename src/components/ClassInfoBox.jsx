import React, { Component } from "react";

class ClassInfoBox extends Component {
  render() {
    const { title, message } = this.props;

    return (
      <div className="class-info-box">
        <h3 className="class-info-title">{title}</h3>
        <p className="class-info-message">{message}</p>
      </div>
    );
  }
}

export default ClassInfoBox;
