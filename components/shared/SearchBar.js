import React, { Component } from 'react';
import { Keyboard, TextInput, View, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleSearch = () => {
    Keyboard.dismiss();
    this.props.onSearch(this.state.query);
  }

  render() {
    return (
      <View style={{ height: 70, padding: 10, backgroundColor: '#6633B9' }}>
        <View style={styles.contentHolder}>
          <TextInput
            style={styles.textInput}
            onChangeText={(query) => this.setState({query})}
            placeholder='Buscar...'
            value={this.state.query}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Icon
            name='search'
            type='fontawesome'
            color='#fff'
            size={50}
            containerStyle={styles.button}
            underlayColor={'transparent'}
            onPress={this.handleSearch}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentHolder: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch'
  },
  textInput: {
    flex: 4,
    borderWidth: 0.5,
    borderColor: '#333333',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingStart: 20,
    fontSize: 28,
    fontWeight: '300'
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})


