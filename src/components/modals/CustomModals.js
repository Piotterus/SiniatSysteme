import React, {useContext} from 'react';
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
  return (
    <TouchableOpacity style={styles.stage1Modal.optionButton}>
      <SmallText>{props.text}</SmallText>
      {props.checked && (
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
  return (
    <FullModal visible={props.visible} setVisible={props.setVisible}>
      <View style={styles.stage1Modal.headerView}>
        <WhiteText style={styles.stage1Modal.headerText}>
          DECKENSYSTEME
        </WhiteText>
        <WhiteText>Unterdecken und Deckenbekleidungen</WhiteText>
        <TouchableOpacity
          style={styles.stage1Modal.arrow}
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
        }}>
        <OptionButton text={'standard'} checked={true} />
        <OptionButton text={'standard'} />
        <OptionButton text={'standard'} checked={true} />
        <OptionButton text={'standard'} />
        <OptionButton text={'standard'} />
      </View>
      <PinkButton
        text={'Weiter >>>'}
        style={{marginVertical: 20}}
        onPress={() => {
          props.setVisible(false);
          navigation.navigate('Stage2');
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
