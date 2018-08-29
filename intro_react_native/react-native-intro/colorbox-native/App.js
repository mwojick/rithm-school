import React, { Component } from "react";
import { View } from "react-native";
import CircleButton from "./CircleButton";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#990099"
    };
  }

  generateRandomColor = () => {
    this.setState({
      // https://www.paulirish.com/2009/random-hex-color-code-snippets/  comments
      color:
        "#" +
        ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6)
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.state.color,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <CircleButton generateRandomColor={this.generateRandomColor} />
      </View>
    );
  }
}
