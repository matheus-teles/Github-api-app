import React, { Component } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default class UserListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.contentHolder}>
          <Image
            style={styles.avatar}
            source={{uri: this.props.user.avatar_url}}
          />
          <Text style={styles.text}>{this.props.user.login}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  contentHolder: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    backgroundColor: '#eeeeee'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 5
  },
  text: {
    textAlign: 'center',
    fontSize: 28
  }
})
