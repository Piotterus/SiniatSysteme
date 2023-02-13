import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal as BasicModal,
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
  return (
    <FullModal visible={props.visible} setVisible={props.setVisible}>
      <View style={styles.stage2Modal.headerView}>
        <WhiteText>Unterdecken und Deckenbekleidungen ></WhiteText>
        <WhiteText>Nassraum, Strahlenschutz</WhiteText>
        <WhiteText style={styles.stage2Modal.headerText}>
          Feuerwiderstandsdauer [min]
        </WhiteText>
        <TouchableOpacity
          style={styles.stage2Modal.arrow}
          onPress={() => props.setVisible(false)}>
          <Image source={icons.arrow.leftWhite} resizeMode={'contain'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          borderBottomColor: colors.cultured,
          borderBottomWidth: 2,
          width: '100%',
          backgroundColor: colors.cultured,
        }}>
        <OptionButton text={'30'} checked={true} />
        <OptionButton text={'ohne'} />
      </View>
      <PinkButton
        text={'Weiter >>>'}
        style={{marginVertical: 20}}
        onPress={() => {
          props.setVisible(false);
          navigation.navigate('Stage3');
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
      <View style={styles.stage1Modal.headerView}>
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
        {/*<OptionButton text={'standard'} checked={true} />*/}
        {/*<OptionButton text={'standard'} />*/}
        {/*<OptionButton text={'standard'} checked={true} />*/}
        {/*<OptionButton text={'standard'} />*/}
        {/*<OptionButton text={'standard'} />*/}
      </View>
      <PinkButton
        text={'Weiter >>>'}
        style={{marginVertical: 20}}
        onPress={() => {
          props.setVisible(false);
          console.log(props.system.value);
          console.log(props.option.value);
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
          console.log(step3);
          const filtered = props.option.optionList.filter((item, index) => {
            return item.chosen === true;
          });
          console.log(filtered);
          navigation.navigate('Stage2', {
            system: {
              value: props.system.value,
              label: props.system.text,
            },
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
  // console.log(error?.message);
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

export const FullModal = props => {
  console.log('visible', props.visible);
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
