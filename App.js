// 'use sctrict'
// import React, { Component, AppRegistry } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   AppState,
//   DeviceEventEmitter,
//   Button,
//   Vibration,
//   ConnectionInfo,
//   CameraRoll,
//   FlexAlignType,
//   MapView,
//   OpenCameraDialogOptions,
//   Permission,
//   PermissionsAndroid,
//   PermissionStatus,
//   PresentLocalNotificationDetails,
//   PushNotification,
//   SimpleTask,
//   Task
// } from 'react-native';
// import { getCurrentDeviceInfo, DeviceInfoManager, CurrentDeviceInfo } from './src/modules/DeviceInfo';
// import KeyEvent from 'react-native-keyevent';
// import LanguageManager from './src/Languages';
// import RootComponent from './src/Root';

// // FlexAlignType
// // PerformanceEntry.///
// import { playAlertTrack, releaseSounds } from "./src/modules/Sounds";
// import QRScanner from './src/screens/JoinPodQRScan/index';

// let TEXT = "";
// console.keys = (obj) => console.log(Object.keys(obj));

// export const setText = (text) => {
//   TEXT = text;
// }

// type Props = {};
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props)
//     this.state = {
//       appStatus: AppState.currentState,
//       changes: 0,
//       keyCode: 0,
//       action: 0,
//       way: "up",
//       count: 0,
//       text: "",
//       pressed: false
//     }
//   }

//   componentWillMount() {
//     console.log("Component Will Mount")
//     console.log("Object RESULTS")
//     // const phoneLn = CurrentDeviceInfo.DeviceLocale;
//     console.log(CurrentDeviceInfo);
//     LanguageManager.setCurrentLanguage(CurrentDeviceInfo.DeviceLocale);
//     console.keys(DeviceInfoManager)
//     // getCurrentDeviceInfo().then(console.log)
//   }

//   componentDidMount() {
//     console.log("POSITION Component did Mount")
//     // this.initGPS();
//     this.initButtonsListeners();
//   };

//   initButtonsListeners = () => {
//     AppState.addEventListener('change', this._handleAppStateChange);
//     KeyEvent.onKeyDownListener((keyEvent) => {

//       const { keyCode, action } = keyEvent;
//       if (this.state.way === 'down') {
//         if (keyCode === 24)
//           this.setState({ count: ++this.state.count, message: 'Hello World', pressed: true })
//         else
//           this.setState({ count: --this.state.count, message: 'Bye bye, World', pressed: true })
//       }

//       this.setState({
//         keyCode, action, way: 'down'
//       })
//     });

//     KeyEvent.onKeyUpListener((keyEvent) => {
//       const { keyCode, action } = keyEvent;
//       console.log(`ON Key Up keyCode: ${JSON.stringify(keyEvent)}`);
//       this.setState({
//         keyCode, action, way: 'up'
//       })
//     });
//   }

//   initGPS = async () => {
//     console.log(navigator.geolocation)
//     // await navigator.geolocation.requestAuthorization()
//     PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS, {
//       'title': this.props.permissionDialogTitle,
//       'message': this.props.permissionDialogMessage,
//     })
//       .then((granted) => {
//         const isAuthorized = Platform.Version >= 23 ?
//           granted === PermissionsAndroid.RESULTS.GRANTED :
//           granted === true;

//         this.setState({ isAuthorized, isAuthorizationChecked: true })
//       })
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const initialPosition = JSON.stringify(position);
//         console.log("POSITION:" + initialPosition)
//         this.setState({ initialPosition });
//       },
//       (error) => console.log("POSITION:" + JSON.stringify(error)),
//       { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
//     );
//   }

//   _handleAppStateChange = (nextAppState) => {
//     this.setState({ appStatus: nextAppState, changes: ++this.state.changes, text: TEXT })
//   };

//   playSound = () => {
//     // playAlertTrack().then(() => Vibration.vibrate(500))
//     DeviceInfoManager.getCurrentInternetConnection().then(console.log);
//   }

//   componentWillUnmount() {
//     AppState.removeEventListener('change', this._handleAppStateChange);
//     KeyEvent.removeKeyDownListener();
//     releaseSounds();
//     // if you are listening to keyUp
//     KeyEvent.removeKeyUpListener();

//     // if you are listening to keyMultiple
//     KeyEvent.removeKeyMultipleListener();
//   };

//   componentDidCatch(err, errInfo) {
//     console.error(err)
//     console.info(errInfo)
//   }

//   render() {
//     const message = this.state.pressed ? this.state.message : "Here will appear message after one of sound buttons will be long pressed";
//     // return (<MapView style={{flex:1}} showsUserLocation={false} backgroundColor="green"/>)
//     return(<QRScanner/>)
//     // return <RootComponent/>
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Last pressed button: {this.state.keyCode ? this.state.keyCode === 24 ? 'Volume Up' : 'Volume Down' : " "}
//         </Text>
//         <Text style={styles.welcome}>
//           Pressed volume in background:
//         </Text>
//         <Text style={styles.welcome}>
//           {/* {JSON.stringify(this.state.initialPosition)} */}
//         </Text>

//         <Button title="Tap to play sound" onPress={this.playSound} />

//         <View style={{ height: 60, marginTop: '30%', width: '100%', backgroundColor: 'green', justifyContent: 'flex-end', alignItems: 'center' }}>

//         </View>
//         <Text style={[styles.welcome, { fontSize: 30 }]}> {this.state.appStatus}, Changes: {this.state.changes}</Text>
//         <Text style={styles.welcome}>
//           {message}
//         </Text>
//         <Text style={styles.instructions}>
//           Pressed {this.state.count}.
//           And do something exteral
//         </Text>
//         <Text style={styles.instructions}>

//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
