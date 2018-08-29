import React, { Component } from 'react';
import CircleButton from './CircleButton';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#990099'
    };
  }

  generateRandomColor = () => {
    this.setState({
      // https://www.paulirish.com/2009/random-hex-color-code-snippets/  comments
      color:
        '#' +
        ('000000' + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)
    });
  };

  render() {
    return (
      <div className="App" style={{ backgroundColor: this.state.color }}>
        <CircleButton generateRandomColor={this.generateRandomColor} />
      </div>
    );
  }
}

export default App;
