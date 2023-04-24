import React, {useContext} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {BoldText, PinkHeaderText} from '../../components/texts/CustomText';
import {Text, View} from 'react-native';
import {MainMenuButton} from '../../components/buttons/CustomButton';
import icons from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeScreen.style';
import colors from '../../assets/colors';
import {WallHeightModal} from '../../components/modals/CustomModals';
import LanguageContext from '../../contexts/LanguageContext';
import useTranslation from '../../hooks/useTranslations';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {activeLanguage} = useContext(LanguageContext);
  const {t} = useTranslation();
  const optionList = [
    {
      image: icons.mainMenu.wandeColor,
      imageStage: icons.stage.wande,
      imageSquare: icons.mainMenu.wandeSquare,
      color: colors.wande,
      text: 'wande.text',
      upperText: 'wande.upperText',
      lowerText: 'wande.lowerText',
      breadcrumb: 'Wande',
      value: 'wande',
    },
    {
      image: icons.mainMenu.deckenColor,
      imageStage: icons.stage.decken,
      imageSquare: icons.mainMenu.deckenSquare,
      color: colors.decken,
      text: 'decken.text',
      upperText: 'decken.upperText',
      breadcrumb: 'Decken',
      value: 'decken',
    },
    {
      image: icons.mainMenu.dacherColor,
      imageStage: icons.stage.dacher,
      imageSquare: icons.mainMenu.dacherSquare,
      color: colors.dacher,
      text: 'dacher.text',
      upperText: 'dacher.upperText',
      breadcrumb: 'Dächer',
      value: 'dacher',
    },
    {
      image: icons.mainMenu.stutzenColor,
      imageStage: icons.stage.stutzen,
      imageSquare: icons.mainMenu.stutzenSquare,
      color: colors.stutzen,
      text: 'stutzen.text',
      upperText: 'stutzen.upperText',
      breadcrumb: 'Stützen- Trägerbekleidungen',
      value: 'stutzentrager',
    },
    {
      image: icons.mainMenu.kabelkanaleColor,
      imageStage: icons.stage.kabelkanale,
      imageSquare: icons.mainMenu.kabelkanalSquare,
      color: colors.kabelkanale,
      text: 'kabelkanale.text',
      upperText: 'kabelkanale.upperText',
      breadcrumb: 'Kabelkanäle',
      value: 'kabelkanale',
    },
  ];

  return (
    <CustomBackground header={'siniat'}>
      <View style={{height: 20}} />
      {optionList.map((item, index) => {
        return (
          <MainMenuButton
            key={index}
            image={item.imageSquare}
            text={t(item.upperText)}
            lowerText={t(item.lowerText)}
            onPress={() =>
              navigation.navigate('Stage1', {
                system: item,
              })
            }
          />
        );
      })}
    </CustomBackground>
  );
};

export default HomeScreen;
