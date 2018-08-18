import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Todo from "./todo";
import NewTodoForm from "./newtodo";

class App extends Component {
  state = {
    todos: [
      // {
      //   title: "first",
      //   description: "first todo"
      // },
      // {
      //   title: "second",
      //   description: "second todo"
      // }
    ]
  };

  handleNewTodo = newTodo => {
    this.setState({ todos: [newTodo, ...this.state.todos] });
    this.setState({ todos: [newTodo, ...this.state.todos] });
  };

  // using the function form of updater

  // handleNewTodo = newTodo => {
  //   this.setState(prevState => {
  //     // console.log(prevState);
  //     return { todos: [newTodo, ...prevState.todos] };
  //   });

  //   this.setState(prevState => {
  //     // console.log(prevState);
  //     return { todos: [newTodo, ...prevState.todos] };
  //   });
  // };

  render() {
    // console.log("rendered")
    let todos = this.state.todos.map((todo, i) => <Todo key={i} todo={todo} />);

    return (
      <div className="App">
        <NewTodoForm addTodo={this.handleNewTodo} />
        {todos}
      </div>
    );
  }
}

export default App;
