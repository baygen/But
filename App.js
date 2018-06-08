import React, { Component, AppRegistry } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppState,
  DeviceEventEmitter,
  Button,
  Vibration
} from 'react-native';
import KeyEvent from 'react-native-keyevent';

import Sound from "react-native-sound";
Sound.setCategory('Playback');

// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh = new Sound('frog.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('SOUND failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('SOUND duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
});


function playSoundTrack (callback) {
  console.log("App sound.");
  let defaultCallback = (success) => {
    if (success) {
      Vibration.vibrate(2000);
      callback && callback();
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
      // reset the player to its uninitialized state (android only)
      // this is the only option to recover after an error occured and use the player again
      whoosh.reset();
    }
  }
  whoosh.play( defaultCallback );
}

export const play = (callback) => playSoundTrack(callback);

let TEXT = "";

export const setText = (text) => {
  TEXT = text;
}

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      appStatus: AppState.currentState,
      changes: 0,
      keyCode: 0,
      action: 0,
      way: "up",
      count: 0,
      text: "",
      pressed: false
    }
  }

  componentDidMount() {

    AppState.addEventListener('change', this._handleAppStateChange);
    KeyEvent.onKeyDownListener((keyEvent) => {

      const { keyCode, action } = keyEvent;
      if (this.state.way === 'down') {
        if (keyCode === 24)
          this.setState({ count: ++this.state.count, message: 'Hello World', pressed: true })
        else
          this.setState({ count: --this.state.count, message: 'Bye bye, World', pressed: true })
      }

      this.setState({
        keyCode, action, way: 'down'
      })
    });

    KeyEvent.onKeyUpListener((keyEvent) => {
      const { keyCode, action } = keyEvent;
      console.log(`ON Key Up keyCode: ${JSON.stringify(keyEvent)}`);
      this.setState({
        keyCode, action, way: 'up'
      })
    });


  };

  logSoundData = () => {
    console.log('SOUND volume: ' + whoosh.getVolume());
    console.log('SOUND pan: ' + whoosh.getPan());
    console.log('SOUND loops: ' + whoosh.getNumberOfLoops());
  }

  _handleAppStateChange = (nextAppState) => {
    this.setState({ appStatus: nextAppState, changes: ++this.state.changes, text: TEXT })
  };

  playSound = () => playSoundTrack()

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
    KeyEvent.removeKeyDownListener();
    whoosh.release();
    // if you are listening to keyUp
    KeyEvent.removeKeyUpListener();

    // if you are listening to keyMultiple
    KeyEvent.removeKeyMultipleListener();
  };

  render() {
    const message = this.state.pressed ? this.state.message : "Here will appear message after one of sound buttons will be long pressed";

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Last pressed button: {this.state.keyCode ? this.state.keyCode === 24 ? 'Volume Up' : 'Volume Down' : " "}
        </Text>
        <Text style={styles.welcome}>
          Pressed volume in background:
        </Text>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>

        <Button title="Tap to play sound" onPress={this.playSound}/>

        <View style={{ height: 60, marginTop: '30%', width: '100%', backgroundColor: 'green', justifyContent: 'flex-end', alignItems: 'center' }}>

        </View>
        <Text style={[styles.welcome, { fontSize: 30 }]}> {this.state.appStatus}, Changes: {this.state.changes}</Text>
        <Text style={styles.welcome}>
          {message}
        </Text>
        <Text style={styles.instructions}>
          Pressed {this.state.count}.
          And do something exteral
        </Text>
        <Text style={styles.instructions}>

        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
