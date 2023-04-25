import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {BoldText, MainMenuText, SmallText} from '../texts/CustomText';
import styles from './CustomButton.style';
import icons from '../../assets/icons';
import useTranslation from '../../hooks/useTranslations';

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
      <Image
        source={props.image}
        style={styles.mainMenuButton.imageSquare}
        resizeMode={'cover'}
      />
      <View style={styles.mainMenuButton.textView}>
        <MainMenuText style={[styles.mainMenuButton.text, props.textStyle]}>
          {props.text}
        </MainMenuText>
        {props.lowerText !== undefined && props.lowerText !== '' && (
          <MainMenuText style={styles.mainMenuButton.lowerText}>
            {props.lowerText}
          </MainMenuText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const WhiteButton = props => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.whiteButton.mainView, props.style]}>
      <BoldText style={{maxWidth: '90%'}}>{props.text}</BoldText>
      <Image style={{maxWidth: '10%'}} source={icons.arrow.right} />
    </TouchableOpacity>
  );
};

export const SystemKarteButton = props => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      {...props}
      style={[styles.systemKarteButton.mainView, props.style]}>
      <SmallText style={[styles.systemKarteButton.text, props.textStyle]}>
        {t('systemCard')}
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
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      {...props}
      style={[styles.sendButton.mainView, props.style]}>
      <SmallText style={[styles.sendButton.text, props.textStyle]}>
        {t('systemCard')}
      </SmallText>
    </TouchableOpacity>
  );
};
