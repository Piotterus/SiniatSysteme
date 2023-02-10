import React from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {BoldText, PinkHeaderText} from '../../components/texts/CustomText';
import {Text} from 'react-native';
import {MainMenuButton} from '../../components/buttons/CustomButton';
import icons from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import styles from './HomeScreen.style';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <CustomBackground header={'siniat'}>
      <PinkHeaderText style={styles.titleText}>
        Der Siniat <Text style={styles.titleTextBold}>Systemselektor</Text>
      </PinkHeaderText>
      <MainMenuButton
        image={icons.mainMenu.wandeColor}
        text={'Wandsysteme - Schachtwände -Vorsatzschalen - Trockenputz'}
        onPress={() => navigation.navigate('Stage1', {step1: 'wande'})}
      />
      <MainMenuButton
        image={icons.mainMenu.deckenColor}
        text={'Deckensysteme'}
        onPress={() => navigation.navigate('Stage1', {step1: 'decken'})}
      />
      <MainMenuButton
        image={icons.mainMenu.dacherColor}
        text={'Dachsysteme'}
        onPress={() => navigation.navigate('Stage1', {step1: 'dacher'})}
      />
      <MainMenuButton
        image={icons.mainMenu.stutzenColor}
        text={'Stützen - und Trägerbekleidungen'}
        onPress={() => navigation.navigate('Stage1', {step1: 'stutzen'})}
      />
      <MainMenuButton
        image={icons.mainMenu.kabelkanaleColor}
        text={'Kabelkanäle'}
        onPress={() => navigation.navigate('Stage1', {step1: 'kabelkanale'})}
      />
    </CustomBackground>
  );
};

export default HomeScreen;
