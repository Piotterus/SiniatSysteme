import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TouchableOpacity} from 'react-native';
import {BoldText, MainMenuText, SmallText} from '../texts/CustomText';
import styles from './CustomButton.style';
import icons from '../../assets/icons';

export const PinkButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.pinkButtton.mainView, props.style]}>
      <SmallText style={[styles.pinkButtton.text, props.buttonTextStyle]}>
        {props.text}
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
      <BoldText>{props.text}</BoldText>
      <Image source={icons.arrow.right} />
    </TouchableOpacity>
  );
};

export const SystemKarteButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.systemKarteButton.mainView, props.style]}>
      <SmallText style={[styles.systemKarteButton.text, props.textStyle]}>
        Systemkarte
      </SmallText>
      <Image source={icons.arrow.right} />
    </TouchableOpacity>
  );
};

export const ProductButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.productBrochureButton.mainView, props.style]}>
      <SmallText style={[styles.productBrochureButton.text, props.textStyle]}>
        {props.text}
      </SmallText>
      <Image source={icons.arrow.right} />
    </TouchableOpacity>
  );
};

export const SendButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.sendButton.mainView, props.style]}>
      <SmallText style={[styles.sendButton.text, props.textStyle]}>
        Speichern / Senden
      </SmallText>
    </TouchableOpacity>
  );
};
