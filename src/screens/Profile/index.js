import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Styles from '../../common/Styles';
import Lang from '../../Languages';
import { SCREENS } from '../../navigator/routes';

import TwoButtonsAtRow from '../../common/TwoButtonsAtRow';

export default class ProfilePage extends Component {

  componentDidMount() {
    const { navigation: { state: { routeName } } } = this.props;
    console.log('ProfilePage did mount for '+ routeName);
    // console.keys(this)
  }

  accept = () => {
    console.log('ACCEPTED');
    // this.props.navigation.navigate(SCREENS.AppRoot);
    this.props.navigation.navigate(SCREENS.JoinPodQRScan);
  }

  decline = () => {
    console.log('DECLINED');
    this.props.navigation.navigate(SCREENS.AppLoadingPage);
  }

  render() {
    const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text style={{
          alignSelf: 'center',
          fontStyle: 'italic',
          fontWeight: '400',
          fontSize: 24
        }}
        >
          {routeName}
        </Text>
        <Text>{Lang.word.Name}</Text>
        <TextInput style={Styles.input} />
        <Text>{Lang.word.SecondName}</Text>
        <TextInput style={Styles.input} />
        <Text>{Lang.word.Age}</Text>
        <TextInput style={Styles.input} />
        <Text>{Lang.word.Nationality}</Text>
        <TextInput style={Styles.input} />
        <TwoButtonsAtRow
          style={{alignSelf: 'flex-end'}}
          onLeft={this.decline}
          leftTitle={Lang.word.Cancel.toLowerCase()}
          rightTitle={Lang.word.Accept.toLowerCase()}
          // disabledRight
          onRight={this.accept} />
        {/* <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text> */}
      </View>
    );
  }
}
