import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, View } from 'react-native';
import { fetchUsers, searchUsers } from '../redux/actions/users';
import UserList from '../components/user/UserList';
import SearchBar from '../components/shared/SearchBar';

class UserSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <>
        <SearchBar onSearch={this.props.searchUsers} />
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
          <UserList users={this.props.users} />
        </View>
        </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.items
  }
}

export default connect(
  mapStateToProps,
  { fetchUsers, searchUsers }
)(UserSearch)
