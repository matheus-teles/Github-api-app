import React, { Component } from 'react';
import { FlatList } from 'react-native';
import UserListItem from './UserListItem';

export default class UserList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <FlatList
        contentContainerStyle={{ alignItems: "stretch" }}
        data={this.props.users}
        renderItem={({item}) => <UserListItem style={{ textAlign: "center" }} id={item.id} user={item}/>}
        keyExtractor={(item, index) => item.id}
        ></FlatList>
    );
  }
}
