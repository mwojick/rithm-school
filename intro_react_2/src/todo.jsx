import React, { Component } from 'react';

class Todo extends Component {


  render() {
    return (
      <div>
        <div>
        {this.props.todo.title}
        </div>
        
        <div>
        {this.props.todo.description}
        </div>
      </div>
    )
  }
}

export default Todo;