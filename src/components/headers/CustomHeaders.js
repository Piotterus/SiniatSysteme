import React from 'react';
import {Image, View} from 'react-native';
import icons from '../../assets/icons';
import styles from './CustomHeaders.style';
import {MainMenuText} from '../texts/CustomText';

export const SiniatHeader = () => {
  return (
    <View style={styles.mainView}>
      <Image source={icons.logo} />
    </View>
  );
};

export const SystemHeader = props => {
  return (
    <View style={styles.systemHeader}>
      <Image source={icons.stage.decken} />
      <MainMenuText style={styles.systemText}>{props.text}</MainMenuText>
    </View>
  );
};
