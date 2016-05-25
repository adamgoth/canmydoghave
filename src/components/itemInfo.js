import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Data from '../misc/data';

module.exports = React.createClass({
  render: function() {
    var item = this.props.item;
    var info = Data[item];
    return (
      <View style={styles.container}>
        <Text>{item}</Text>
        <Text>{info}</Text>
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
