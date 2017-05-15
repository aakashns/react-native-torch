import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ToastAndroid } from "react-native";
import Torch from "./native/Torch";

export default class App extends Component {
  state = {
    torchEnabled: false
  };

  toggleTorch = () => {
    Torch.setTorch(!this.state.torchEnabled, torchEnabled => {
      this.setState({ torchEnabled });
    });
  };

  render() {
    const enabled = this.state.torchEnabled;
    return (
      <View style={styles.container}>
        <Button
          title={enabled ? "Stop Torch" : "Start Torch"}
          onPress={this.toggleTorch}
        />
        <Text style={styles.status}>
          Torch is {enabled ? "ON" : "OFF"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  status: {
    fontSize: 20,
    textAlign: "center",
    color: "#000",
    margin: 10
  }
});
