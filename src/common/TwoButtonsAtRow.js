import React from 'react';
import { // TouchableOpacity, Dimensions,
  Button, View
} from 'react-native';
import Lang from '../Languages';
import Styles from './Styles';
// type Props

export default RowWithTwoButtonsAtRow = (
  {
    onLeft,
    onRight,
    leftTitle,
    rightTitle,
    style = {},
    disableLeft,
    disableRight
  }) => (
  <View style={[Styles.rowWidthContainer, style]} >
    <Button disabled={disableLeft} color='red' title={leftTitle || 'cancel'} onPress={onLeft} />
    <Button disabled={disableRight} color='green' title={rightTitle || 'ok'} onPress={onRight} />
  </View>
);

export const AcceptDeclineButtons = (
  {
    onAccept,
    onDecline,
    disableAccept,
    disableDecline,
    style = {}
  }) => (
  <RowWithTwoButtonsAtRow
    style={style}
    onRight={onAccept}
    onLeft={onDecline}
    disableLeft={disableDecline}
    disableRight={disableAccept}
    leftTitle={Lang.word.Decline}
    rightTitle={Lang.word.Accept} />
);
