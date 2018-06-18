import React from 'react';
// import { StyleSheet } from 'react-native';
import Styles from './Styles';

export default class LoadingScreen extends React.Component {

  render() {
    return (
      <View style={Styles.backgroundColorGray}>
        <Text>LoadingScreen page:</Text>
        {/* <Text style={{color: 'orange'}} >{JSON.stringify(this.props.dataProtection)}</Text> */}
      </View>
    );
  }
}
