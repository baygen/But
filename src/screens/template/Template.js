import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../../common/Styles';
import Lang from '../../Languages';
import { SCREENS } from '../../navigator/routes';

@connect(state => ({}))
export default class TemplatePage extends Component {
  state = {

  }

  go = route => {
    if (!SCREENS[route])
      return alert('Wrong route');
    this.props.navigation.navigate(route);
  }

  render() {
    // const { navigation: { state: { routeName } } } = this.props;
    return (
      <View style={[Styles.backgroundColorGray, Styles.centeredContainerColumn]}>
        <Text >{Lang.word.Template}</Text>
      </View>
    );
  }
}
