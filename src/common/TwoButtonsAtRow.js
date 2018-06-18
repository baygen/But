// import React from 'react';
import { // TouchableOpacity, Dimensions,
  Button, View } from 'react-native';
import Lang from '../Languages';
import Styles from './Styles';
// type Props

export default RowWithTwoButtonsAtRow = (
  {
    onLeft,
    onRight,
    leftTitle,
    rightTitle
  }) => (
  <View style={Styles.rowWidthContainer} >
    <Button color='red' title={leftTitle} onPress={onLeft} />
    <Button color='green' title={rightTitle} onPress={onRight} />
  </View>
);

export const AcceptDeclineButtons = (
  {
    onAccept,
    onDecline
  }) => (
  <RowWithTwoButtonsAtRow onRight={onAccept} onLeft={onDecline} leftTitle={Lang.word.decline} rightTitle={Lang.word.accept} />
);
