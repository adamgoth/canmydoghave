import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Data from '../misc/data';

module.exports = React.createClass({
  render: function() {
    var item = this.props.item;
    var info = Data[item];
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => { return this.props.navigator.pop(); }}>
          <Text style={styles.backText}>{'< Back'}</Text>
        </TouchableOpacity>
        <Text style={styles.info}>Can my dog have...</Text>
        <Text style={styles.item}>{item.toUpperCase()}?</Text>
        <Text style={styles.answer}>{info.answer}</Text>
        <Text style={styles.info}>{info.info}</Text>
        <Text style={styles.info}><Text style={ {fontWeight: 'bold'} }>Source:</Text> {info.source}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  answer: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  item: {
    fontSize: 40,
    margin: 5,
    textAlign: 'center'
  },
  info: {
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center'
  },
  backButton: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 40,
  },
  backText: {
    marginLeft: 10,
    fontSize: 15
  }
});
