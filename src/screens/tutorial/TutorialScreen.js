import React, {useContext, useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Image, Text, View} from 'react-native';
import icons from '../../assets/icons';
import {BoldText, SmallText} from '../../components/texts/CustomText';
import styles from './TutorialScreen.style';
import {CheckBox, ScreenWidth} from '@rneui/base';
import {PinkButton} from '../../components/buttons/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../../assets/colors';
import TutorialContext from '../../contexts/TutorialContext';
import useTranslation from '../../hooks/useTranslations';

const TutorialScreen = () => {
  const [checkBox, setCheckBox] = useState(false);
  const {setShowTutorial} = useContext(TutorialContext);
  const {t} = useTranslation();

  return (
    <CustomBackground header={'tutorial'}>
      <Image
        source={icons.tutorialHeader}
        resizeMode={'contain'}
        style={{
          aspectRatio: 1.11,
          width: ScreenWidth,
          height: undefined,
          // top: -30,
        }}
      />
      <View style={styles.whiteView}>
        <View style={styles.textView}>
          <BoldText style={styles.centerText}>{t('tutorial.text1')}</BoldText>
          <SmallText style={styles.centerText}>{t('tutorial.text2')}</SmallText>
          <SmallText style={[styles.centerText, styles.pinkText]}>
            {t('tutorial.text3')}
          </SmallText>
        </View>
        <PinkButton
          style={styles.button}
          text={t('seek') + ' >>>'}
          onPress={async () => {
            if (checkBox) {
              await AsyncStorage.setItem('showTutorial', '0');
            }
            setShowTutorial('0');
          }}
        />
        <View style={styles.checkBoxView}>
          <CheckBox
            containerStyle={{backgroundColor: colors.white}}
            checked={checkBox}
            onPress={() => setCheckBox(prev => !prev)}
            uncheckedColor={colors.flirt}
            checkedColor={colors.flirt}
          />
          <SmallText>{t('tutorial.doNotShowAgain')}</SmallText>
        </View>
        <SmallText
          style={styles.purpleText}
          onPress={() => setShowTutorial('0')}>
          {t('tutorial.skip')}
        </SmallText>
      </View>
    </CustomBackground>
  );
};

export default TutorialScreen;
