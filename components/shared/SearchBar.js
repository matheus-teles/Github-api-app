import React, { Component } from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  render() {
    return (
      <View style={{ height: 50 }}>
        <View style={styles.contentHolder}>
          <TextInput
            style={styles.textInput}
            onChangeText={(query) => this.setState({query})}
            placeholder='Buscar...'
            value={this.state.query}
          />
           <Button
            style={styles.button}
            onPress={() => this.props.onSearch(this.state.query)}
            title="Buscar"
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
    borderColor: '#333333'
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#60DAFB'
  }
})


