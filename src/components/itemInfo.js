import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text>{this.props.item}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  }
});
