import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProp, prevState) {
    console.log("PrevProps", prevProp);
    console.log("PrevState", prevState);
    if (prevProp.counter.value !== this.props.counter.value)
      console.log("Updated REal and VirtualDom");
  }

  render() {
    // console.log("Props",this.props);
    console.log("Counter-Rendered");

    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}>
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter)}>
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classBadge = "badge m-2 badge-";
    if (this.props.counter.value === 0) return (classBadge += "warning");
    return (classBadge += "primary");
  }

  formatCount() {
    return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
  }
}

export default Counter;
