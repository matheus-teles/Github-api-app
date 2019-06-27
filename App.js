import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Text, View } from 'react-native';
import UserList from './components/user/UserList';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
          <UserList />
        </View>
      </Provider>
    );
  }
}
