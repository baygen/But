import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SCREENS } from '../../navigator/routes';
import Lang from '../../Languages';
import Styles from '../../common/Styles';
import { AcceptDeclineButtons } from '../../common/TwoButtonsAtRow';

@connect(state => ({
  dataProtection: state.dataProtection,
  store: state
}))
export default class DataProtection extends Component {
  state = {

  }

  componentDidMount() {
    console.log('DataProtection did mount');
    console.log(Object.keys(this.context));
  }

  go = route => this.props.navigation.navigate(route);

  onDecline = () => {
    this.go(SCREENS.AppLoadingPage);
  }

  onAccept = () => {
    this.go(SCREENS.TermsAndConditions);
  }

  render() {
    return (
      <View style={Styles.centeredContainerColumn} >
        <Text>DataProtection page:</Text>
        <AcceptDeclineButtons
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        />
      </View>
    );
  }
}
