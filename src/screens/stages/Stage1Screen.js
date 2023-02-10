import React, {useCallback, useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Image, Text, View} from 'react-native';
import icons from '../../assets/icons';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
import {MainMenuText, SmallText} from '../../components/texts/CustomText';
import styles from './StagesScreen.style';
import {WhiteButton} from '../../components/buttons/CustomButton';
import {FullModal, Stage1Modal} from '../../components/modals/CustomModals';
import {SystemHeader} from '../../components/headers/CustomHeaders';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const Stage1Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  const [step1, setStep1] = useState();
  const optionList = {
    wande: [
      {
        label: 'Metallständerwände',
        value: 'metallstanderwande',
      },
      {
        label:
          '"Brandwände" Nichtragende raumabschliessende Wände mit prüftechnisch nachgewiesener Stoßbeanspruchung',
        value: 'brandwande',
      },
      {
        label: 'Holzständerwände',
        value: 'holzstanderwande',
      },
      {
        label: 'Schachtwände/Vorsatzschalen',
        value: 'schachtwande-vorsatzschalen',
      },
      {
        label: 'Trockenputz',
        value: 'trockenputz',
      },
    ],
    decken: [
      {
        label: 'Freitragende Unterdecken',
        value: 'freitragende-unterdecken',
      },
      {
        label: 'Unterdecken und Deckenbekleidungen',
        value: 'unterdecken-und-deckenbekleidungen',
      },
      {
        label: 'Ertüchtigung Massivdecken',
        value: 'ertuchtigung-massivdecken',
      },
      {
        label: 'Ertüchtigung Holzbalkendecken',
        value: 'ertuchtigung-holzbalkendecken',
      },
      {
        label: 'Ertüchtigung Trapezblechdecken',
        value: 'trapezblechdecken',
      },
    ],
    dacher: [
      {
        label: 'Holzbalkendächer',
        value: 'dacher',
      },
      {
        label: 'Trapezblechdächer Ertüchtigung Trapezblechdächer',
        value: 'trapezblechdacher-ertuchtigung-trapezblechdacher',
      },
    ],
    stutzen: [
      {
        label: 'Stahl',
        value: 'stahl',
      },
      {
        label: 'Holz',
        value: 'holz',
      },
    ],
    kabelkanale: [
      {
        label: 'E-Kanäle',
        value: 'e-kanale',
      },
      {
        label: 'I-Kanäle',
        value: 'i-kanale',
      },
    ],
  };

  const route = useRoute();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      setStep1(route.params.step1);

      return () => setStep1(undefined);
    }, [route.params]),
  );

  console.log(optionList[step1]);
  return (
    <CustomBackground header={'siniat'}>
      <Stage1Modal
        visible={stageModalVisible}
        setVisible={setStageModalVisible}
      />
      <SystemHeader />
      <StageNavigation />
      {optionList[step1] !== undefined &&
        optionList[step1].map((item, index) => {
          return (
            <WhiteButton
              text={item.label}
              onPress={() => setStageModalVisible(true)}
              key={index}
            />
          );
        })}
      {/*<WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />
      <WhiteButton
        text={'Freicośtam'}
        onPress={() => setStageModalVisible(true)}
      />*/}
    </CustomBackground>
  );
};

export default Stage1Screen;
