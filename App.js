import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { View } from 'react-native';
import UserSearch from './container/UserSearch';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
          <UserSearch />
        </View>
      </Provider>
    );
  }
}
