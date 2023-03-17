import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {BoldText} from '../texts/CustomText';
import icons from '../../assets/icons';
import styles from './CustomFilters.style';
import {TooltipModal} from '../modals/CustomModals';
import colors from '../../assets/colors';

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
        {props.tooltip !== undefined &&
          props.tooltip !== null &&
          props.tooltip !== '' && (
            <TouchableOpacity onPress={() => setTooltipModalVisible(true)}>
              <Image source={icons.info} />
            </TouchableOpacity>
          )}
      </View>
      <TouchableOpacity style={styles.buttonView} onPress={props.onPress}>
        <BoldText>{props.values}</BoldText>
        <Image source={icons.arrow.right} />
      </TouchableOpacity>
    </View>
  );
};

export const FilterSelected = props => {
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
        {props.tooltip !== undefined &&
          props.tooltip !== null &&
          props.tooltip !== '' && (
            <TouchableOpacity onPress={() => setTooltipModalVisible(true)}>
              <Image source={icons.info} />
            </TouchableOpacity>
          )}
      </View>
      <View style={styles.selectedView}>
        <BoldText>{props.values}</BoldText>
      </View>
    </View>
  );
};

export const FilterInput = props => {
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
        {props.tooltip !== undefined &&
          props.tooltip !== null &&
          props.tooltip !== '' && (
            <TouchableOpacity onPress={() => setTooltipModalVisible(true)}>
              <Image source={icons.info} />
            </TouchableOpacity>
          )}
      </View>
      <View style={styles.buttonView}>
        <TextInput
          onChangeText={text => props.onChangeText(text, props.index)}
          style={{
            padding: 0,
            width: '100%',
            fontWeight: 'bold',
            color: colors.grey,
          }}
          keyboardType={'numeric'}
          value={props.value}
        />
        {/*<BoldText>{props.values}</BoldText>*/}
        {/*<Image source={icons.arrow.right} />*/}
      </View>
    </View>
  );
};
