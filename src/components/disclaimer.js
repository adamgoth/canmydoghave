import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => { return this.props.navigator.pop(); }}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </TouchableOpacity>
        <Text style={styles.boldText}>Disclaimer</Text>
        <Text style={styles.text}>The information in this application is for general reference only.</Text>
        <Text style={styles.text}>While I would never intentionally provide false information, I am in no way qualified to give medical advice for your pet.</Text>
        <Text style={styles.text}>Do not rely solely on the information provided in this application. Do your own research or consult your veterinarian.</Text>
        <Text style={styles.text}>Use of this application constitutes your full agreement to the above disclaimer.</Text>
        <Text style={styles.boldText}>Additional Information</Text>
        <Text style={styles.text}>Questions, comments, concerns?</Text>
        <Text style={styles.text}>Contact me at <Text style={{fontWeight: 'bold'}}>adamgoth@gmail.com</Text>.</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boldText: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    fontWeight: 'bold',
    marginTop: 50,
  },
  text: {
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 10,
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
