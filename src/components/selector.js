import React, { Component} from 'react';
import {
  Alert,
  View,
  Text,
  Picker,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      item: ''
    };
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text>CAN MY DOG HAVE...</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.item}
          onValueChange={(item) => this.setState({item: item})}>
          <Picker.Item label="" value="" />
          <Picker.Item label="Chocolate" value="chocolate" />
          <Picker.Item label="Apples" value="apples" />
          <Picker.Item label="Dog Food" value="dog food" />
        </Picker>
        <TouchableHighlight
          style={styles.button}
          underlayColor={'gray'}
          onPress={this.onSubmitPress}
          >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    )
  },
  onSubmitPress: function() {
    if (this.state.item === '') {
      return Alert.alert(
        'No Item Selected',
        'Please select an item'
      )
    }
    this.props.navigator.push({
      name: 'itemInfo',
      passProps: {
        item: this.state.item
      }
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  picker: {
    width: 250
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'black',
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});
