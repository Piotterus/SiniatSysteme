import React from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {BoldText, PinkHeaderText} from '../../components/texts/CustomText';
import {Text} from 'react-native';
import {MainMenuButton} from '../../components/buttons/CustomButton';
import icons from '../../assets/icons';

const HomeScreen = () => {
  return (
    <CustomBackground header={'siniat'}>
      <PinkHeaderText>
        Der Siniat <Text style={{fontWeight: 'bold'}}>Systemselektor</Text>
      </PinkHeaderText>
      <MainMenuButton
        image={icons.mainMenu.wandeColor}
        text={'Wandsysteme - Schachtwände -Vorsatzschalen - Trockenputz'}
      />
      <MainMenuButton
        image={icons.mainMenu.deckenColor}
        text={'Deckensysteme'}
      />
      <MainMenuButton image={icons.mainMenu.dacherColor} text={'Dachsysteme'} />
      <MainMenuButton
        image={icons.mainMenu.stutzenColor}
        text={'Stützen - und Trägerbekleidungen'}
      />
      <MainMenuButton
        image={icons.mainMenu.kabelkanaleColor}
        text={'Kabelkanäle'}
      />
    </CustomBackground>
  );
};

export default HomeScreen;
