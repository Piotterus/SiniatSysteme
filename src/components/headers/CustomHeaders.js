import React from 'react';
import {Image, View} from 'react-native';
import icons from '../../assets/icons';
import styles from './CustomHeaders.style';

export const SiniatHeader = () => {
  return (
    <View style={styles.mainView}>
      <Image source={icons.logo} />
    </View>
  );
};
