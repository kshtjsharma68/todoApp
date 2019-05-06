/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import Home from './components/Home/index';
import Navigator from './Navigation/index';

export default class App extends React.Component {
  render() {
    return (
        <Navigator />
    );
  }
}
