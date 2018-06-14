import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';


@connect(state=>({
  termsAndConditions: state.termsAndConditions
}))
export default class TermsAndConditions extends Component {
  state = {

  }

  componentDidMount() {
    console.log('TermsAndConditions did mount')
    console.log(Object.keys(this))
  }

  render() {
    return (
      <View>
        <Text>TermsAndConditions page:</Text>
        <Text style={{color: 'orange'}} >{JSON.stringify(this.props.termsAndConditions)}</Text>
      </View>
    );
  }
}
