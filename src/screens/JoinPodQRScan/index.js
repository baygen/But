'use strict';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import LanguageManager from '../../Languages';

import { goTo } from './logic';

@connect(state => ({
  pods: state
}), {
  goTo
})
export default class ScanScreen extends Component {

  componentDidMount() {
    console.log(Object.keys(this.context));
  }

  onSuccess = (e) => {
    console.log('QR result');
    console.info(this.props.goTo);
    this.props.goTo();
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  solo = () => {
    LanguageManager.setCurrentLanguage('de');
    this.forceUpdate();
    this.props.navigation.openDrawer();
    // QRCodeScanner.
  }

  render() {
    return (
      <QRCodeScanner
        // onRead={this.onSuccess}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.onSuccess}>
            <Text style={styles.centerText}>
              {LanguageManager.word.appName}
              {LanguageManager.word.Name}
            </Text>
            <Text style={styles.textBold}>
              {JSON.stringify(this.props.pods.dataProtection)}
            </Text>
          </TouchableOpacity>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.solo} >
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
