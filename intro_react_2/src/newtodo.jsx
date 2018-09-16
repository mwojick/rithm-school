import React, { Component } from "react";

class NewTodoForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let newTodo = {
      title: e.target.title.value,
      description: e.target.description.value
    };
    this.props.addTodo(newTodo);

    e.target.title.value = "";
    e.target.description.value = "";
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="description" placeholder="description" />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default NewTodoForm;
