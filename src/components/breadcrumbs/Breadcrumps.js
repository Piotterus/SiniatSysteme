import React from 'react';
import {SmallText} from '../texts/CustomText';
import {View} from 'react-native';
import styles from './Breadcrumps.style';

const Breadcrumps = props => {
  return (
    <View style={styles.breadcrumbsView}>
      <SmallText>Unterdecken und Deckenbekleidungen ></SmallText>
      <SmallText>Standard, Nassraum, Strahlenschutz</SmallText>
    </View>
  );
};

export default Breadcrumps;
