import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal as BasicModal,
  ScrollView,
} from 'react-native';
import styles from './CustomModals.style';
import colors from '../../assets/colors';
import {
  BoldText,
  MainMenuText,
  SmallText,
  WhiteText,
} from '../texts/CustomText';
import icons from '../../assets/icons';
import Modal from 'react-native-modal';
import {PinkButton, WhiteButton} from '../buttons/CustomButton';
import ErrorContext from '../../contexts/ErrorContext';
import {useNavigation} from '@react-navigation/native';

const OptionButton = props => {
  const [checked, setChecked] = useState(props.checked);

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  return (
    <TouchableOpacity
      style={styles.stage1Modal.optionButton}
      onPress={() => {
        props.onPress();
        setChecked(prev => !prev);
      }}>
      <SmallText>{props.text}</SmallText>
      {checked && (
        <View style={styles.stage1Modal.checkImage}>
          <Image source={icons.check} resizeMode={'contain'} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export const Stage2Modal = props => {
  const navigation = useNavigation();
  // console.log('Values', props.filterList[props.chosenFilter]?.values);
  // console.log(
  //   'SelectedValues',
  //   props.filterList[props.chosenFilter]?.selectedValues,
  // );
  return (
    <FullModal visible={props.visible} setVisible={props.setVisible}>
      <View
        style={[
          styles.stage2Modal.headerView,
          {backgroundColor: props.system?.color},
        ]}>
        <WhiteText>{props.step2?.label} ></WhiteText>
        <WhiteText>{props.step3?.label}</WhiteText>
        <WhiteText style={styles.stage2Modal.headerText}>
          {props.filterList[props.chosenFilter]?.german}
        </WhiteText>
        <TouchableOpacity
          style={styles.stage2Modal.arrow}
          onPress={() => props.setVisible(false)}>
          <Image source={icons.arrow.leftWhite} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.stage2Modal.optionList}>
        {Array.isArray(props.filterList[props.chosenFilter]?.values) &&
          props.filterList[props.chosenFilter]?.values.map((item, index) => {
            return (
              <OptionButton
                key={index}
                text={item}
                checked={
                  props.filterList[props.chosenFilter]?.selectedValues?.indexOf(
                    item,
                  ) >= 0
                }
                onPress={() => props.chooseValue(item, 'add')}
              />
            );
          })}

        {/*<OptionButton text={'ohne'} />*/}
      </ScrollView>
      <PinkButton
        text={'Weiter >>>'}
        style={{marginVertical: 20}}
        onPress={() => {
          props.setVisible(false);
          navigation.navigate('Stage3', {
            system: props.system,
            step2: props.step2,
            step3: props.step3,
            filter: props.filterList,
          });
        }}
      />
      <Text
        onPress={() => props.setVisible(false)}
        style={styles.stage2Modal.backText}>
        {'<<< Überspringen'}
      </Text>
    </FullModal>
  );
};

export const Stage1Modal = props => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Stage1Modal Refreshed');
  }, [props]);

  return (
    <FullModal visible={props.visible} setVisible={props.setVisible}>
      <View
        style={[
          styles.stage1Modal.headerView,
          {backgroundColor: props.system?.color},
        ]}>
        <WhiteText style={styles.stage1Modal.headerText}>
          {props.system?.text}
        </WhiteText>
        <WhiteText>{props.option?.label}</WhiteText>
        <TouchableOpacity
          style={styles.stage1Modal.arrow}
          onPress={() => props.setVisible(false)}>
          <Image source={icons.arrow.leftWhite} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <View style={styles.stage1Modal.optionList}>
        {Array.isArray(props.option?.optionList) &&
          props.option?.optionList.map((item, index) => {
            return (
              <OptionButton
                key={index}
                text={item.label}
                checked={item.chosen}
                onPress={() => {
                  props.chooseOption(props.option?.value, item.value);
                }}
              />
            );
          })}
      </View>
      <PinkButton
        text={'Weiter >>>'}
        style={{marginVertical: 20}}
        onPress={() => {
          props.setVisible(false);
          const step3 = props.option.optionList.reduce((prev, item) => {
            if (item.chosen === true) {
              if (prev === '') {
                return item.value;
              } else {
                return prev + '.' + item.value;
              }
            } else {
              return prev;
            }
          }, '');
          const step3Label = props.option.optionList.reduce((prev, item) => {
            if (item.chosen === true) {
              if (prev === '') {
                return item.label;
              } else {
                return prev + ', ' + item.label;
              }
            } else {
              return prev;
            }
          }, '');
          const filtered = props.option.optionList.filter((item, index) => {
            return item.chosen === true;
          });
          navigation.navigate('Stage2', {
            system: props.system,
            step2: {
              value: props.option.value,
              label: props.option.label,
            },
            step3: {
              value: step3,
              label: step3Label,
            },
          });
        }}
      />
    </FullModal>
  );
};

export const ErrorModal = props => {
  const {errorModalVisible, setErrorModalVisible, error, setError, clearError} =
    useContext(ErrorContext);
  return (
    <CustomModal visible={errorModalVisible} setVisible={clearError}>
      <BoldText style={styles.errorModal.errorText}>{error?.message}</BoldText>
      <TouchableOpacity
        style={styles.errorModal.okButton}
        onPress={() => clearError()}>
        <BoldText style={styles.errorModal.okText}>OK</BoldText>
      </TouchableOpacity>
    </CustomModal>
  );
};

export const TooltipModal = props => {
  return (
    <CustomModal visible={props.visible} setVisible={props.setVisible}>
      <BoldText style={styles.errorModal.errorText}>{props.text}</BoldText>
      <TouchableOpacity
        style={styles.errorModal.okButton}
        onPress={() => props.setVisible(false)}>
        <BoldText style={styles.errorModal.okText}>OK</BoldText>
      </TouchableOpacity>
    </CustomModal>
  );
};

export const FullModal = props => {
  return (
    <BasicModal
      visible={props.visible}
      onBackdropPress={() => props.setVisible(false)}>
      <View style={styles.fullModal.mainView}>{props.children}</View>
    </BasicModal>
  );
};

const CustomModal = props => {
  return (
    <Modal
      isVisible={props.visible}
      onBackdropPress={() => props.setVisible(false)}>
      <View style={styles.customModal.mainView}>{props.children}</View>
    </Modal>
  );
};
