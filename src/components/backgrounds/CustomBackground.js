import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
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

const CustomBackground = props => {
  return (
    <SafeAreaView style={styles.background.mainView}>
      {props.header === 'siniat' && <SiniatHeader />}
      <ScrollView
        keyboardShouldPersistTaps={'handled'}
        style={styles.background.scrollView}
        contentContainerStyle={styles.background.scrollViewContainer}>
        {props.children}
      </ScrollView>
      <CustomFooter />
    </SafeAreaView>
  );
};

export default CustomBackground;
