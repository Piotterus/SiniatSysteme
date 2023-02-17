import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import styles from './CustomHeaders.style';
import {MainMenuText} from '../texts/CustomText';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';

export const SiniatHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={styles.mainView}>
      <Image source={icons.logo} />
      {route.name !== 'Home' && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backArrow}>
          <Feather name={'arrow-left'} size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export const SystemHeader = props => {
  return (
    <View style={styles.systemHeader}>
      <Image source={props.system?.imageStage} />
      <MainMenuText style={styles.systemText}>
        {props.system?.text}
      </MainMenuText>
    </View>
  );
};
