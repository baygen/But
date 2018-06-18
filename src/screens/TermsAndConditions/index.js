import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { SCREENS } from '../../navigator/routes';
import { AcceptDeclineButtons } from '../../common/TwoButtonsAtRow';
import Styles from '../../common/Styles';


@connect(state => ({
  termsAndConditions: state.termsAndConditions
}))
export default class TermsAndConditions extends Component {
  state = {

  }

  componentDidMount() {
    console.log('TermsAndConditions did mount');
    console.log(Object.keys(this));
  }

  go = route => this.props.navigation.navigate(route);

  onDecline = () => {
    this.go(SCREENS.DataProtection);
  }

  onAccept = () => {
    this.go(SCREENS.PersonalDetails);
  }

  render() {
    return (
      <View style={Styles.centeredContainerColumn}>
        <Text>TermsAndConditions page:</Text>
        <Text style={{ color: 'orange' }}>
          {JSON.stringify(this.props.termsAndConditions)}
        </Text>
        <AcceptDeclineButtons
          onDecline={this.onDecline}
          onAccept={this.onAccept}
        />
      </View>
    );
  }
}
