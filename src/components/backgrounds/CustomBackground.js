import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import styles from './CustomBackground.style';
import {
  BackHeader,
  BigHeader,
  HomeHeader,
  RegisterHeader,
  SiniatHeader,
  UpdateHeader,
} from '../headers/CustomHeaders';
import CustomFooter from '../footers/CustomFooter';
import {PinkButton} from '../buttons/CustomButton';
import {useNavigation} from '@react-navigation/native';

const CustomBackground = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.background.mainView}>
      <KeyboardAvoidingView
        style={{flex: 1, alignItems: 'center', width: '100%'}}
        behavior={Platform.OS === 'ios' ? 'padding' : ''}>
        {props.header === 'siniat' && <SiniatHeader />}
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          style={styles.background.scrollView}
          contentContainerStyle={styles.background.scrollViewContainer}>
          {props.children}
        </ScrollView>
        {props.showButton && props.buttonCount > 0 && (
          <PinkButton
            text={'Suchen (' + props.buttonCount + ') >>>'}
            style={{
              position: 'absolute',
              bottom: 100,
            }}
            onPress={props.buttonOnPress}
          />
        )}
        <CustomFooter />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomBackground;
