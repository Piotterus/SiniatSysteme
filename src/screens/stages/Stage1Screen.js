import React, {useCallback, useEffect, useState} from 'react';
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
  const [modalOptions, setModalOptions] = useState([]);
  const [nextOption, setNextOption] = useState();
  const [optionList, setOptionList] = useState({
    wande: [
      {
        label: 'Metallständerwände',
        value: 'metallstanderwande',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'Strahlenschutz',
            value: 'strahlenschutz',
            chosen: false,
          },
          {
            label: 'Einbruchhemmung',
            value: 'einbruchhemmung',
            chosen: false,
          },
        ],
      },
      {
        label:
          '"Brandwände" Nichtragende raumabschliessende Wände mit prüftechnisch nachgewiesener Stoßbeanspruchung',
        value: 'brandwande',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Holzständerwände',
        value: 'holzstanderwande',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Außenwand',
            value: 'ausenwand',
            chosen: false,
          },
        ],
      },
      {
        label: 'Schachtwände/Vorsatzschalen',
        value: 'schachtwande-vorsatzschalen',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'Strahlenschutz',
            value: 'strahlenschutz',
            chosen: false,
          },
        ],
      },
      {
        label: 'Trockenputz',
        value: 'trockenputz',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
        ],
      },
    ],
    decken: [
      {
        label: 'Freitragende Unterdecken',
        value: 'freitragende-unterdecken',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Unterdecken und Deckenbekleidungen',
        value: 'unterdecken-und-deckenbekleidungen',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'Strahlenschutz',
            value: 'strahlenschutz',
            chosen: false,
          },
          {
            label: 'Außendecken',
            value: 'ausendecken',
            chosen: false,
          },
        ],
      },
      {
        label: 'Ertüchtigung Massivdecken',
        value: 'ertuchtigung-massivdecken',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Ertüchtigung Holzbalkendecken',
        value: 'ertuchtigung-holzbalkendecken',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Ertüchtigung Trapezblechdecken',
        value: 'trapezblechdecken',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
    ],
    dacher: [
      {
        label: 'Holzbalkendächer',
        value: 'dacher',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Trapezblechdächer Ertüchtigung Trapezblechdächer',
        value: 'trapezblechdacher-ertuchtigung-trapezblechdacher',
        optionList: [
          {
            label: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
    ],
    stutzen: [
      {
        label: 'Stahl',
        value: 'stahl',
        optionList: [
          {
            label: 'Stahlstütze',
            value: 'stahlstutze',
            chosen: false,
          },
          {
            label: 'Stahlträger',
            value: 'stahltrager',
            chosen: false,
          },
        ],
      },
      {
        label: 'Holz',
        value: 'holz',
        optionList: [
          {
            label: 'Holzstütze',
            value: 'holzstutze',
            chosen: false,
          },
          {
            label: 'Holzbalken',
            value: 'holzbalken',
            chosen: false,
          },
        ],
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
  });

  const route = useRoute();
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      setStep1(route.params.system.value);

      return () => setStep1(undefined);
    }, [route.params]),
  );

  useEffect(() => {
    console.log('Changes NextOption || OptionList');
    if (Array.isArray(optionList[step1])) {
      optionList[step1].forEach((item, index) => {
        if (item.value === nextOption) {
          setModalOptions(item);
        }
      });
    }
  }, [nextOption, optionList]);

  const goNext = option => {
    console.log(option);
    setNextOption(option.value);
    if (option.optionList !== undefined) {
      setModalOptions(option);
      setStageModalVisible(true);
    } else {
      navigation.navigate('Stage2');
    }
  };

  const chooseOption = (option1, option2) => {
    console.log('Option1', option1);
    console.log('Option2', option2);
    let newOptionList = optionList;
    newOptionList[step1].forEach((item1, index1) => {
      console.log(item1);
      if (item1.value === option1) {
        item1.optionList.forEach((item2, index2) => {
          if (item2.value === option2) {
            item2.chosen = !item2.chosen;
          }
        });
      }
    });
    console.log(newOptionList[step1]);
    setOptionList(newOptionList);
  };

  useEffect(() => {
    console.log('Stage1Screen Refreshed');
  });

  console.log(JSON.stringify(optionList));
  return (
    <CustomBackground header={'siniat'}>
      <Stage1Modal
        visible={stageModalVisible}
        setVisible={setStageModalVisible}
        option={modalOptions}
        chooseOption={(option1, option2) => chooseOption(option1, option2)}
        system={route.params.system}
      />
      <SystemHeader system={route.params.system} />
      <StageNavigation />
      {optionList[step1] !== undefined &&
        optionList[step1].map((item, index) => {
          return (
            <WhiteButton
              text={item.label}
              onPress={() => goNext(item)}
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
