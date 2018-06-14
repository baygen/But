import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._checkAuth();
  }

  _checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('app')
    }, 4000)
  }

  componentDidMount() {
    console.log('LoadingScreen did mount')
    // console.keys(this)
  }

  render() {
    return (
      <View style={{ backgroundColor: 'gray' }}>
        <Text>LoadingScreen page:</Text>
        {/* <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text> */}
      </View>
    );
  }
}
