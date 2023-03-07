import React from 'react';
import {Text} from 'react-native';
import styles from './CustomText.style';

export const SmallText = props => {
  return (
    <Text {...props} style={[styles.smallText, props.style]}>
      {props.children}
    </Text>
  );
};

export const BoldText = props => {
  return (
    <Text {...props} style={[styles.boldText, props.style]}>
      {props.children}
    </Text>
  );
};

export const PinkHeaderText = props => {
  return (
    <Text {...props} style={[styles.pinkHeaderText, props.style]}>
      {props.children}
    </Text>
  );
};

export const MainMenuText = props => {
  return (
    <Text {...props} style={[styles.mainMenuText, props.style]}>
      {props.children}
    </Text>
  );
};

export const HeaderMenuText = props => {
  return (
    <Text {...props} style={[styles.headerMenuText, props.style]}>
      {props.children}
    </Text>
  );
};

export const WhiteText = props => {
  return (
    <Text {...props} style={[styles.whiteText, props.style]}>
      {props.children}
    </Text>
  );
};
