import React, {useEffect, useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  Keyboard,
} from 'react-native';
import styles from './CustomBackground.style';
import {
  BackHeader,
  BigHeader,
  HomeHeader,
  RegisterHeader,
  SiniatHeader,
  TutorialHeader,
  UpdateHeader,
} from '../headers/CustomHeaders';
import CustomFooter from '../footers/CustomFooter';
import {PinkButton} from '../buttons/CustomButton';
import {useNavigation} from '@react-navigation/native';

const CustomBackground = props => {
  // const navigation = useNavigation();
  const scrollViewRef = useRef();
  const [keyboardStatus, setKeyboardStatus] = useState('closed');

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      async () => {
        console.log('KeyBoardShowed');
        setKeyboardStatus('open');
        // await scrollViewRef.current.scrollToEnd({animated: false});
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus('closed');
        // setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    if (keyboardStatus === 'open') {
      scrollViewRef?.current?.scrollToEnd({animated: true});
    }
  }, [keyboardStatus]);

  return (
    <SafeAreaView style={styles.background.mainView}>
      <KeyboardAvoidingView
        style={{flex: 1, alignItems: 'center', width: '100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {props.header === 'siniat' && <SiniatHeader />}
        {props.header === 'tutorial' && <TutorialHeader />}
        {props.list === 'flat' && props.children}
        {props.list !== 'flat' && (
          <ScrollView
            keyboardShouldPersistTaps={'handled'}
            automaticallyAdjustKeyboardInsets={true}
            ref={scrollViewRef}
            style={styles.background.scrollView}
            contentContainerStyle={styles.background.scrollViewContainer}>
            {props.children}
          </ScrollView>
        )}
        {props.showButton && (
          <PinkButton
            text={
              'Suchen (' +
              props.buttonCount +
              ')' +
              (props.buttonCount > 0 ? ' >>>' : '')
            }
            style={{
              position: 'absolute',
              bottom: 100,
            }}
            onPress={props.buttonOnPress}
            disabled={props.buttonCount <= 0}
          />
        )}
        {props.header !== 'tutorial' && <CustomFooter />}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomBackground;
