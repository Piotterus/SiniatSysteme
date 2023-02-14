import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {BoldText} from '../texts/CustomText';
import icons from '../../assets/icons';
import styles from './CustomFilters.style';

export const FilterSelect = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.labelView}>
        <BoldText>{props.label}</BoldText>
        <Image source={icons.info} />
      </View>
      <TouchableOpacity style={styles.buttonView} onPress={props.onPress}>
        <BoldText>{props.values}</BoldText>
        <Image source={icons.arrow.right} />
      </TouchableOpacity>
    </View>
  );
};

export const FilterSelected = props => {
  return (
    <View style={styles.mainView}>
      <View style={styles.labelView}>
        <BoldText>{props.label}</BoldText>
        <Image source={icons.info} />
      </View>
      <View style={styles.selectedView}>
        <BoldText>30, Ohne</BoldText>
      </View>
    </View>
  );
};
