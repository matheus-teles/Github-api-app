import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FlatList, Text, View } from 'react-native';
import { fetchUsers } from '../../redux/actions/users'

class UserList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.users)
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
          <FlatList
            contentContainerStyle={{ alignItems: "stretch" }}
            data={this.props.users}
            renderItem={({item}) => <Text style={{ textAlign: "center" }} id={item.id}>{item.login}</Text>}
            keyExtractor={(item, index) => item.id}
            ></FlatList>
          <Button
            onPress={this.props.fetchUsers}
            title="Load more"
            color="#841584"
          />
        </View>
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
  { fetchUsers }
)(UserList)
