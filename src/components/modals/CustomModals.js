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
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {BoldText, SmallText, WhiteText} from '../texts/CustomText';
import icons from '../../assets/icons';
import Modal from 'react-native-modal';
import {PinkButton, WhiteButton} from '../buttons/CustomButton';
import ErrorContext from '../../contexts/ErrorContext';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import useTranslation from '../../hooks/useTranslations';

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
      <SmallText style={{fontWeight: 'bold', fontSize: 13}}>
        {props.text}
      </SmallText>
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
  const {t} = useTranslation();
  // console.log('Values', props.filterList[props.chosenFilter]?.values);
  // console.log(
  //   'SelectedValues',
  //   props.filterList[props.chosenFilter]?.selectedValues,
  // );
  // let sortedArray = [];
  // if (Array.isArray(props.filterList[props.chosenFilter]?.values)) {
  //   sortedArray = props.filterList[props.chosenFilter]?.values.sort(
  //     (item1, item2) => {
  //       // console.log(item1, item2);
  //       // console.log(typeof item1, typeof item2);
  //       if (!isNaN(parseFloat(item1))) {
  //         // console.log('item 1 parsed');
  //         item1 = parseFloat(item1);
  //       }
  //       if (!isNaN(parseFloat(item2))) {
  //         // console.log('item 2 parsed');
  //         item2 = parseFloat(item2);
  //       }
  //       // console.log(item1, item2);
  //       // console.log(item1 > item2);
  //       return item1 > item2;
  //     },
  //   );
  // }
  console.log('Stage2Modal Values');
  console.log(props.filterList[props.chosenFilter]?.values);
  return (
    <FullModal visible={props.visible} setVisible={props.setVisible}>
      <View
        style={[
          styles.stage2Modal.headerView,
          {backgroundColor: props.system?.color},
        ]}>
        <WhiteText>{t(props.step2?.breadcrumb)} ></WhiteText>
        <WhiteText>{t(props.step3?.breadcrumb)}</WhiteText>
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
            if (item !== 'n/a') {
              return (
                <OptionButton
                  key={index}
                  text={item}
                  checked={
                    props.filterList[
                      props.chosenFilter
                    ]?.selectedValues?.indexOf(item) >= 0
                  }
                  onPress={() => props.chooseValue(item, 'add')}
                />
              );
            }
          })}

        {/*<OptionButton text={'ohne'} />*/}
      </ScrollView>
      <PinkButton
        text={t('next') + ' >>>'}
        style={{marginVertical: 20}}
        onPress={() => {
          props.setVisible(false);
          // console.log('KABELKANALE CHECK');
          // console.log(props?.system.value === 'kabelkanale');
          // if (props?.system.value === 'kabelkanale') {
          //   console.log('KABELKANALE');
          //   const [selectedFiltersL1, selectedFiltersL2] =
          //     props.getSelectedFilters();
          //   const data = {
          //     system: props?.system,
          //     step2: props?.step2,
          //     step3: props?.step3,
          //     stage: 'L2',
          //     selectedFiltersL1: selectedFiltersL1,
          //     selectedFiltersL2: selectedFiltersL2,
          //     filterList: props.filterList,
          //   };
          //   navigation.navigate('SystemList', {data: data});
          // } else {
          //   navigation.navigate('Stage3', {
          //     system: props.system,
          //     step2: props.step2,
          //     step3: props.step3,
          //     filter: props.filterList,
          //   });
          // }
        }}
      />
      {/*<Text
        onPress={() => props.setVisible(false)}
        style={styles.stage2Modal.backText}>
        {'<<< Überspringen'}
      </Text>*/}
    </FullModal>
  );
};

export const Stage1Modal = props => {
  const navigation = useNavigation();
  const {t} = useTranslation();
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
          {t(props.system?.breadcrumb)}
        </WhiteText>
        <WhiteText>{t(props.option?.breadcrumb)}</WhiteText>
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
                text={t(item.label)}
                checked={item.chosen}
                onPress={() => {
                  props.chooseOption(props.option?.value, item.value);
                }}
              />
            );
          })}
      </View>
      <PinkButton
        text={t('seek') + ' >>>'}
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
          const step3Breadcrumb = props.option.optionList.reduce(
            (prev, item) => {
              if (item.chosen === true) {
                if (prev === '') {
                  return item.breadcrumb;
                } else {
                  return prev + ' | ' + item.breadcrumb;
                }
              } else {
                return prev;
              }
            },
            '',
          );
          const filtered = props.option.optionList.filter((item, index) => {
            return item.chosen === true;
          });
          navigation.navigate('Stage2', {
            system: props.system,
            step2: {
              value: props.option.value,
              label: props.option.label,
              breadcrumb: props.option.breadcrumb,
            },
            step3: {
              value: step3,
              label: step3Label,
              breadcrumb: step3Breadcrumb,
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

export const WallHeightModal = props => {
  const ring = useSharedValue(30);
  const style = useAnimatedStyle(() => {
    return {
      opacity: (30 - ring.value) / 10 + 1,
      height: interpolate(ring.value, [0, 1], [0, 1]),
      width: interpolate(ring.value, [0, 1], [0, 1]),
      // transform: [
      //   {
      //     scale: interpolate(ring.value, [0, 1], [0, 1]),
      //   },
      // ],
      // borderWidth: interpolate(borderWidth.value, [0, 1], [0, 1]),
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      500,
      withRepeat(
        withTiming(40, {
          duration: 1500,
        }),
        -1,
        // withTiming(3, {
        //   duration: 2000,
        // }),
        // -1,
      ),
    );
  }, []);
  return (
    <CustomModal visible={props.visible} setVisible={props.setVisible}>
      <View style={styles.wallHeightModal.overRingView}>
        <Animated.View style={[styles.wallHeightModal.animatedRing, style]} />
        <Text style={styles.wallHeightModal.ringText}>i</Text>
      </View>
      <SmallText style={styles.wallHeightModal.infoText}>
        {props.text}
      </SmallText>
    </CustomModal>
  );
};

export const FullModal = props => {
  return (
    <BasicModal
      visible={props.visible}
      onBackdropPress={() => props.setVisible(false)}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.fullModal.mainView}>
          {props.children}
        </SafeAreaView>
      </SafeAreaProvider>
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
