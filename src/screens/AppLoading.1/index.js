import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../../common/Styles';
import TwoButtonsAtRow, { AcceptDeclineButtons } from '../../common/TwoButtonsAtRow';
import { SCREENS } from '../../navigator/routes';

export default class LoadingScreen1 extends Component {
  constructor(props) {
    super(props);
    // this._checkAuth();
  }

  _checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate(SCREENS.AppRoot);
    }, 4000);
  }

  componentDidMount() {
    console.log('LoadingScreen1 did mount');
    // console.keys(this)
  }

  accept = () => {
    console.log('ACCEPTED');
    this.props.navigation.navigate(SCREENS.AppRoot);
  }

  decline = () => {
    console.log('DECLINED');
    this.props.navigation.navigate(SCREENS.SetupFlow);
  }

  render() {
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text>LoadingScreen page:</Text>
        <TwoButtonsAtRow
          onLeft={this.decline}
          leftTitle='Go to setup1'
          rightTitle='Go to app1'
          onRight={this.accept} />
        <AcceptDeclineButtons onDecline={this.accept} onAccept={this.decline} />
        {/* <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text> */}
      </View>
    );
  }
}
