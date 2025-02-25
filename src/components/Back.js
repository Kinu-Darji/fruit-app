import React, { Component } from "react";
import "../components/Display.css";

class Back extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      fruitlist: this.props.list,
    };
  }
  render() {
    return (
      <div className="flex-container">
        {this.state.fruitlist.map((item) => (
          <div key={item.id} className={`${item.class} font`}>
            <img src={item.img} alt={item.name} height="100px" />
            <i>{item.name}</i>
          </div>
        ))}
      </div>
    );
  }
}

export default Back;
