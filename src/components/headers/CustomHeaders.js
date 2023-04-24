import React, {useContext} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import icons from '../../assets/icons';
import styles from './CustomHeaders.style';
import {
  BoldText,
  HeaderMenuText,
  SmallText,
  WhiteText,
} from '../texts/CustomText';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation, useRoute} from '@react-navigation/native';
import colors from '../../assets/colors';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {ScreenHeight} from '@rneui/base';
import LanguageContext from '../../contexts/LanguageContext';
import useTranslation from '../../hooks/useTranslations';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SiniatHeader = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {languageList, setActiveLanguageCode, activeLanguageCode} =
    useContext(LanguageContext);

  const animatedHeight = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      // borderWidth: interpolate(borderWidth.value, [0, 1], [0, 1]),
    };
  });

  const openLanguage = () => {
    animatedHeight.value = withSpring(ScreenHeight - 70, {
      duration: 800,
      easing: Easing.cubic,
    });
  };

  const closeLanguage = () => {
    animatedHeight.value = withTiming(0, {
      duration: 200,
      easing: Easing.ease,
    });
  };

  return (
    <>
      <View style={styles.mainView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={icons.logo} />
        </TouchableOpacity>
        {route.name !== 'Home' && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backArrow}>
            <Feather name={'arrow-left'} size={30} />
          </TouchableOpacity>
        )}
        {route.name === 'Home' && (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={styles.backArrow}>
            <Feather name={'menu'} size={30} />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          onPress={() => openLanguage()}
          style={styles.languageButton}>
          <WhiteText style={styles.languageText}>
            {activeLanguageCode}
          </WhiteText>
        </TouchableOpacity>
      </View>
      <Animated.View style={[styles.languageView.animated, style]}>
        <ScrollView
          style={styles.languageView.scrollView}
          contentContainerStyle={styles.languageView.containerScrollView}>
          <View style={styles.languageView.languageList}>
            <BoldText style={styles.languageView.languageText}>
              Sprache wählen
            </BoldText>
            {languageList.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.languageView.languageItem}
                  onPress={() => {
                    setActiveLanguageCode(item.code);
                    AsyncStorage.setItem('activeLanguageCode', item.code);
                  }}
                  key={index}>
                  {activeLanguageCode === item.code ? (
                    <Image
                      source={icons.langCheckmark}
                      style={styles.languageView.checkImage}
                    />
                  ) : null}
                  <SmallText
                    style={[
                      styles.languageView.languageText,
                      activeLanguageCode === item.code
                        ? styles.languageView.activeText
                        : null,
                    ]}>
                    {item.code}
                  </SmallText>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.languageView.closeButton}
            onPress={() => closeLanguage()}>
            <Image source={icons.xCircleFill} />
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </>
  );
};

export const TutorialHeader = () => {
  return (
    <View style={styles.mainView}>
      <Image source={icons.logo} />
    </View>
  );
};

export const SystemHeader = props => {
  const {t} = useTranslation();
  return (
    <View style={styles.systemHeader}>
      <Image source={props.system?.imageStage} />
      <HeaderMenuText style={styles.systemText}>
        {t(props.system?.text)}
      </HeaderMenuText>
    </View>
  );
};
