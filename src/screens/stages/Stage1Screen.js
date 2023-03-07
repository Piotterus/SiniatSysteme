import React, {useCallback, useEffect, useState} from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import StageNavigation from '../../components/stageNavigation/StageNavigation';
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
        breadcrumb: 'Metallständerwände',
        value: 'metallstanderwande',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            breadcrumb: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'Strahlenschutz',
            breadcrumb: 'Strahlenschutz',
            value: 'strahlenschutz',
            chosen: false,
          },
          {
            label: 'Einbruchhemmung',
            breadcrumb: 'Einbruchhemmung',
            value: 'einbruchhemmung',
            chosen: false,
          },
        ],
      },
      {
        label:
          '"Brandwände" Nichtragende raumabschliessende Wände mit prüftechnisch nachgewiesener Stoßbeanspruchung',
        breadcrumb: 'Brandwände',
        value: 'brandwande',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Holzständerwände',
        breadcrumb: 'Holzständerwände',
        value: 'holzstanderwande',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Außenwand',
            breadcrumb: 'Außenwand',
            value: 'ausenwand',
            chosen: false,
          },
        ],
      },
      {
        label: 'Schachtwände/Vorsatzschalen',
        breadcrumb: 'Schachtwände/Vorsatzschalen',
        value: 'schachtwande-vorsatzschalen',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            breadcrumb: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'Strahlenschutz',
            breadcrumb: 'Strahlenschutz',
            value: 'strahlenschutz',
            chosen: false,
          },
        ],
      },
      {
        label: 'Trockenputz',
        breadcrumb: 'Trockenputz',
        value: 'trockenputz',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            breadcrumb: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
        ],
      },
    ],
    decken: [
      {
        label: 'Freitragende Unterdecken',
        breadcrumb: 'Freitragende Unterdecken',
        value: 'freitragende-unterdecken',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Unterdecken und Deckenbekleidungen',
        breadcrumb: 'Unterdecken und Deckenbekleidungen',
        value: 'unterdecken-und-deckenbekleidungen',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            breadcrumb: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'Strahlenschutz',
            breadcrumb: 'Strahlenschutz',
            value: 'strahlenschutz',
            chosen: false,
          },
          {
            label: 'Außendecken',
            breadcrumb: 'Außendecken',
            value: 'ausendecken',
            chosen: false,
          },
        ],
      },
      {
        label: 'Ertüchtigung Massivdecken',
        breadcrumb: 'Ertüchtigung Massivdecken',
        value: 'ertuchtigung-massivdecken',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
          {
            label: 'Nassraum',
            breadcrumb: 'Nassraum',
            value: 'nassraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Ertüchtigung Holzbalkendecken',
        breadcrumb: 'Ertüchtigung Holzbalkendecken',
        value: 'ertuchtigung-holzbalkendecken',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Ertüchtigung Trapezblechdecken',
        breadcrumb: 'Ertüchtigung Trapezblechdecken',
        value: 'trapezblechdecken',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
    ],
    dacher: [
      {
        label: 'Holzbalkendächer',
        breadcrumb: 'Holzbalkendächer',
        value: 'dacher',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'Trapezblechdächer Ertüchtigung Trapezblechdächer',
        breadcrumb: 'Trapezblechdächer Ertüchtigung Trapezblechdächer',
        value: 'trapezblechdacher-ertuchtigung-trapezblechdacher',
        optionList: [
          {
            label: 'Standard',
            breadcrumb: 'Standard',
            value: 'standard',
            chosen: false,
          },
          {
            label: 'Feuchtraum',
            breadcrumb: 'Feuchtraum',
            value: 'feuchtraum',
            chosen: false,
          },
        ],
      },
    ],
    stutzentrager: [
      {
        label: 'Stahl',
        breadcrumb: 'Stahl',
        value: 'stahl',
        optionList: [
          {
            label: 'Stahlstütze',
            breadcrumb: 'Stahlstütze',
            value: 'stahlstutze',
            chosen: false,
          },
          {
            label: 'Stahlträger',
            breadcrumb: 'Stahlträger',
            value: 'stahltrager',
            chosen: false,
          },
        ],
      },
      {
        label: 'Holz',
        breadcrumb: 'Holz',
        value: 'holz',
        optionList: [
          {
            label: 'Holzstütze',
            breadcrumb: 'Holzstütze',
            value: 'holzstutze',
            chosen: false,
          },
          {
            label: 'Holzbalken',
            breadcrumb: 'Holzbalken',
            value: 'holzbalken',
            chosen: false,
          },
        ],
      },
    ],
    kabelkanale: [
      {
        label: 'E-Kanäle',
        breadcrumb: 'E-Kanäle',
        value: 'e-kanale',
      },
      {
        label: 'I-Kanäle',
        breadcrumb: 'I-Kanäle',
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
    // console.log('Changes NextOption || OptionList');
    if (Array.isArray(optionList[step1])) {
      optionList[step1].forEach((item, index) => {
        if (item.value === nextOption) {
          setModalOptions(item);
        }
      });
    }
  }, [nextOption, optionList]);

  const goNext = option => {
    // console.log(option);
    setNextOption(option.value);
    if (option.optionList !== undefined) {
      setModalOptions(option);
      setStageModalVisible(true);
    } else {
      navigation.navigate('Stage2', {
        system: route.params.system,
        step2: option,
        step3: {},
      });
    }
  };

  const chooseOption = (option1, option2) => {
    // console.log('Option1', option1);
    // console.log('Option2', option2);
    let newOptionList = optionList;
    newOptionList[step1].forEach((item1, index1) => {
      // console.log(item1);
      if (item1.value === option1) {
        item1.optionList.forEach((item2, index2) => {
          if (item2.value === option2) {
            item2.chosen = !item2.chosen;
          }
        });
      }
    });
    // console.log(newOptionList[step1]);
    setOptionList(newOptionList);
  };

  // console.log(JSON.stringify(optionList));
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
    </CustomBackground>
  );
};

export default Stage1Screen;
