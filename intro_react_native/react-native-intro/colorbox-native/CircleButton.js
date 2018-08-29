import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  circleButton: {
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 125,
    borderColor: "white",
    borderWidth: 5,
    height: 250,
    justifyContent: "center",
    width: 250
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default function CircleButton(props) {
  return (
    <TouchableOpacity
      onPress={props.generateRandomColor}
      style={styles.circleButton}
    >
      <Text style={styles.buttonText}>CHANGE</Text>
    </TouchableOpacity>
  );
}
