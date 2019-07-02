import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Text, View } from 'react-native';
import { searchUsers } from '../redux/actions/users';
import UserList from '../components/user/UserList';
import SearchBar from '../components/shared/SearchBar';

class UserSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let list;
    if (this.props.isFetching) {
      list = <ActivityIndicator size="large" color="#6633B9" />
    } else if (this.props.didInvalidate) {
      list = <Text style={{textAlign: 'center'}}>Erro na busca de usuários</Text>
    } else if (!this.props.users.length) {
      list = <Text style={{textAlign: 'center'}}>Nenhum usuário encontrado</Text>
    } else {
      list = <UserList users={this.props.users} />
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
          <SearchBar onSearch={this.props.searchUsers} />
          <View style={{ flex: 1, alignItems: "stretch", paddingTop: 0 }}>
            {list}
          </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.items,
    isFetching: state.users.isFetching,
    didInvalidate: state.users.didInvalidate
  }
}

export default connect(
  mapStateToProps,
  { searchUsers }
)(UserSearch)
