import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import TwoButtons from '../../common/TwoButtonsAtRow';

@connect(state=>({
  dataProtection: state.dataProtection
}))
export default class DataProtection extends Component {
  state = {

  }

  componentDidMount() {
    console.log('DataProtection did mount');
    console.log(Object.keys(this));
  }

  go = route => {
    this.props.navigation.navigate(route);
  }

  decline = () => {
    this.go('TermsAndConditions');
  }

  accept = () => {
    this.go('Profile');
  }

  render() {
    return (
      <View style={Styles.centeredContainerColumn} >
        <Text>DataProtection page:</Text>
        <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text>
        <TwoButtons
          onLeft={this.decline}
          onRight={this.accept}
          leftTitle='Terms and condition'
          rightTitle='Profile'
        />
      </View>
    );
  }
}
