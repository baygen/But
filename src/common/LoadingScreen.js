import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LoadingScreen extends Component {

  render() {
    return (
      <View style={{ backgroundColor: 'gray' }}>
        <Text>LoadingScreen page:</Text>
        {/* <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text> */}
      </View>
    );
  }
}
