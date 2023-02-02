import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TouchableOpacity} from 'react-native';
import {MainMenuText, SmallText} from '../texts/CustomText';
import styles from './CustomButton.style';
import icons from '../../assets/icons';

export const PinkButton = props => {
  return (
    <TouchableOpacity
      disabled={props.disabled !== undefined ? props.disabled : false}
      onPress={() => props?.onPress()}
      style={[styles.pinkButtton.mainView, props.style]}>
      <SmallText style={[styles.pinkButtton.text, props.buttonTextStyle]}>
        {props.label}
      </SmallText>
    </TouchableOpacity>
  );
};

export const MainMenuButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.mainMenuButton.mainView, props.style]}>
      <Image source={props.image} />
      <MainMenuText style={[styles.mainMenuButton.text, props.textStyle]}>
        {props.text}
      </MainMenuText>
    </TouchableOpacity>
  );
};

export const WhiteButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.whiteButton.mainView, props.style]}>
      <Text>Text</Text>
    </TouchableOpacity>
  );
};
