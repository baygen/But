import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


@connect(state=>({
  dataProtection: state.dataProtection
}))
export default class DataProtection extends Component {
  state = {

  }

  componentDidMount() {
    console.log('DataProtection did mount')
    console.log(Object.keys(this))
  }

  render() {
    return (
      <View>
        <Text>DataProtection page:</Text>
        <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text>
      </View>
    );
  }
}
