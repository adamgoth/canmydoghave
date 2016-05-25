import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet
} from 'react-native';
import Selector from './src/components/selector';
import ItemInfo from './src/components/itemInfo'

var ROUTES = {
  selector: Selector,
  itemInfo: ItemInfo
};

var Root = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} {...route.passProps} />;
  },

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ name: 'selector' }}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('canmydoghave', () => Root);
