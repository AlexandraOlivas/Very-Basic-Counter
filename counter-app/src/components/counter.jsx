import React, { Component } from "react";

class Counter extends Component {

  render() {

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm mt-2"> 
          Increment
        </button>
        <button 
        onClick={() => this.props.onDelete(this.props.counter.id)} 
        className='btn btn-danger btn-sm mt-2 ml-3'>Delete</button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge mr-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "success";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; /* object desctructuring */
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
