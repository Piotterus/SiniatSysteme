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

const TutorialScreen = () => {
  const [checkBox, setCheckBox] = useState(false);
  const {setShowTutorial} = useContext(TutorialContext);

  return (
    <CustomBackground header={'tutorial'}>
      <Image
        source={icons.tutorialHeader}
        resizeMode={'contain'}
        style={{
          aspectRatio: 1.11,
          width: ScreenWidth,
          height: undefined,
          top: -30,
        }}
      />
      <View style={styles.greyView}>
        <View style={styles.textView}>
          <BoldText style={styles.centerText}>
            Mit dem Siniat Systemselektor zur richtigen Lösung.
          </BoldText>
          <SmallText style={styles.centerText}>
            Geben Sie die konkreten Anforderungen und Vorgaben ihres Projektes
            in den Siniat Systemselektor ein und finden Sie die passende
            Trockenbau-Lösung von Siniat.
          </SmallText>
          <SmallText style={[styles.centerText, styles.pinkText]}>
            Jetz alle Trockenbausysteme auf einen klick!
          </SmallText>
        </View>
        <PinkButton
          style={styles.button}
          text={'Suchen >>>'}
          onPress={async () => {
            if (checkBox) {
              await AsyncStorage.setItem('showTutorial', '0');
            }
            setShowTutorial('0');
          }}
        />
        <View style={styles.checkBoxView}>
          <CheckBox
            containerStyle={{backgroundColor: colors.cultured}}
            checked={checkBox}
            onPress={() => setCheckBox(prev => !prev)}
            uncheckedColor={colors.flirt}
            checkedColor={colors.flirt}
          />
          <SmallText>Nicht mekr anzeigen</SmallText>
        </View>
        <SmallText
          style={styles.purpleText}
          // onPress={() => setShowTutorial('0')}
        >
          ÜBERSPRINGEN
        </SmallText>
      </View>
    </CustomBackground>
  );
};

export default TutorialScreen;
