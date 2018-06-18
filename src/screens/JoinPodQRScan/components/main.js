'use strict';
import React, { Component } from 'react';
import LanguageManager from '../../../Languages';

import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
  onSuccess(e) {
    console.log('QR result');
    console.info(e);
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  solo = () => {
    LanguageManager.setCurrentLanguage('de');
    this.forceUpdate();
    // QRCodeScanner.
  }

  render() {
    return (
      <QRCodeScanner
        // onRead={this .onSuccess.bind(this)}
        reactivate={true}
        reactivateTimeout={2000}
        topContent={
          <Text style={styles.centerText}>
            {LanguageManager.word.appName} <Text style={styles.textBold}>
            wikipedia.org/wiki/QR_code</Text>
            {LanguageManager.word.Name}
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable} onPress={this.solo}
          //()=>{
            //LanguageManager.setCurrentLanguage("ua")
            //  }}
          >
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
    padding: 16,
  },
});
