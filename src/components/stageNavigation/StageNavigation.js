import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../assets/colors';
import styles from './StageNavigation.style';

const NavigationCircle = props => {
  return (
    <View style={styles.circle.mainView}>
      <Text style={styles.circle.text}>{props.text}</Text>
    </View>
  );
};

const StageNavigation = () => {
  return (
    <View style={styles.mainView}>
      <NavigationCircle text={'1'} />
      <NavigationCircle text={'2'} />
      <NavigationCircle text={'3'} />
    </View>
  );
};

export default StageNavigation;
