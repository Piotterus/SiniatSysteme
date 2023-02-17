import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {BoldText} from '../texts/CustomText';
import icons from '../../assets/icons';
import styles from './CustomFilters.style';
import {TooltipModal} from '../modals/CustomModals';

export const FilterSelect = props => {
  const [tooltipModalVisible, setTooltipModalVisible] = useState(false);
  return (
    <View style={styles.mainView}>
      <TooltipModal
        text={props.tooltip}
        visible={tooltipModalVisible}
        setVisible={setTooltipModalVisible}
      />
      <View style={styles.labelView}>
        <BoldText>{props.label}</BoldText>
        <TouchableOpacity onPress={() => setTooltipModalVisible(true)}>
          <Image source={icons.info} />
        </TouchableOpacity>
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
        <BoldText>{props.values}</BoldText>
      </View>
    </View>
  );
};
