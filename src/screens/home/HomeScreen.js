import React from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {BoldText, PinkHeaderText} from '../../components/texts/CustomText';
import {Text, View} from 'react-native';
import {MainMenuButton} from '../../components/buttons/CustomButton';
import icons from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeScreen.style';
import colors from '../../assets/colors';
import {WallHeightModal} from '../../components/modals/CustomModals';

const HomeScreen = () => {
  const navigation = useNavigation();

  const optionList = [
    {
      image: icons.mainMenu.wandeColor,
      imageStage: icons.stage.wande,
      imageSquare: icons.mainMenu.wandeSquare,
      color: colors.wande,
      text: 'Wändsysteme - Schachtwände -Vorsatzschalen - Trockenputz',
      upperText: 'Wändsysteme - ',
      lowerText: 'Schachtwände -Vorsatzschalen - Trockenputz',
      breadcrumb: 'Wände',
      value: 'wande',
    },
    {
      image: icons.mainMenu.deckenColor,
      imageStage: icons.stage.decken,
      imageSquare: icons.mainMenu.deckenSquare,
      color: colors.decken,
      text: 'Deckensysteme',
      upperText: 'Deckensysteme',
      breadcrumb: 'Decken',
      value: 'decken',
    },
    {
      image: icons.mainMenu.dacherColor,
      imageStage: icons.stage.dacher,
      imageSquare: icons.mainMenu.dacherSquare,
      color: colors.dacher,
      text: 'Dachsysteme',
      upperText: 'Dachsysteme',
      breadcrumb: 'Dächer',
      value: 'dacher',
    },
    {
      image: icons.mainMenu.stutzenColor,
      imageStage: icons.stage.stutzen,
      imageSquare: icons.mainMenu.stutzenSquare,
      color: colors.stutzen,
      text: 'Stützen - und Trägerbekleidungen',
      upperText: 'Stützen - und Trägerbekleidungen',
      breadcrumb: 'Stützen- Trägerbekleidungen',
      value: 'stutzentrager',
    },
    {
      image: icons.mainMenu.kabelkanaleColor,
      imageStage: icons.stage.kabelkanale,
      imageSquare: icons.mainMenu.kabelkanalSquare,
      color: colors.kabelkanale,
      text: 'Kabelkanäle',
      upperText: 'Kabelkanäle',
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
            text={item.upperText}
            lowerText={item.lowerText}
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
