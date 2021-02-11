import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClass()}>{this.formatCount()}</span>
          </div>

          <div className="col">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => this.props.onIncrement(this.props.counter)}>
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? true : false}>
              -
            </button>
            <button
              className="btn btn-danger btn-sm "
              onClick={() => this.props.onDelete(this.props.counter)}>
              X
            </button>
          </div>
        </div>
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
