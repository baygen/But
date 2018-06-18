import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Styles from '../../common/Styles';
import TwoButtonsAtRow, { AcceptDeclineButtons } from '../../common/TwoButtonsAtRow';

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    // this._checkAuth();
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

  accept = () => {
    console.log('ACCEPTED')
    this.props.navigation.navigate('app')
  }

  decline = () => {
    console.log('DECLINED')
    this.props.navigation.navigate('setup')
  }

  render() {
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text>LoadingScreen page:</Text>
        <TwoButtonsAtRow
          onLeft={this.decline}
          leftTitle='Go to setup'
          rightTitle='Go to app'
          onRight={this.accept} />
        <AcceptDeclineButtons onDecline={this.accept} onAccept={this.decline}/>
        {/* <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text> */}
      </View>
    );
  }
}
