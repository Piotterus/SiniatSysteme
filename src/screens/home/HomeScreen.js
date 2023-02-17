import React from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {BoldText, PinkHeaderText} from '../../components/texts/CustomText';
import {Text} from 'react-native';
import {MainMenuButton} from '../../components/buttons/CustomButton';
import icons from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeScreen.style';
import colors from '../../assets/colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  const optionList = [
    {
      image: icons.mainMenu.wandeColor,
      imageStage: icons.stage.wande,
      color: colors.wande,
      text: 'Wandsysteme - Schachtwände -Vorsatzschalen - Trockenputz',
      value: 'wande',
    },
    {
      image: icons.mainMenu.deckenColor,
      imageStage: icons.stage.decken,
      color: colors.decken,
      text: 'Deckensysteme',
      value: 'decken',
    },
    {
      image: icons.mainMenu.dacherColor,
      imageStage: icons.stage.dacher,
      color: colors.dacher,
      text: 'Dachsysteme',
      value: 'dacher',
    },
    {
      image: icons.mainMenu.stutzenColor,
      imageStage: icons.stage.stutzen,
      color: colors.stutzen,
      text: 'Stützen - und Trägerbekleidungen',
      value: 'stutzen',
    },
    {
      image: icons.mainMenu.kabelkanaleColor,
      imageStage: icons.stage.kabelkanale,
      color: colors.kabelkanale,
      text: 'Kabelkanäle',
      value: 'kabelkanale',
    },
  ];

  return (
    <CustomBackground header={'siniat'}>
      <PinkHeaderText style={styles.titleText}>
        Der Siniat <Text style={styles.titleTextBold}>Systemselektor</Text>
      </PinkHeaderText>
      {optionList.map((item, index) => {
        return (
          <MainMenuButton
            key={index}
            image={item.image}
            text={item.text}
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
