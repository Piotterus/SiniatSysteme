import React from 'react';
import {SmallText} from '../texts/CustomText';
import {View} from 'react-native';
import styles from './Breadcrumps.style';

const Breadcrumps = props => {
  return (
    <View style={styles.breadcrumbsView}>
      <SmallText>{props.text1} ></SmallText>
      <SmallText>{props.text2}</SmallText>
    </View>
  );
};

export default Breadcrumps;
