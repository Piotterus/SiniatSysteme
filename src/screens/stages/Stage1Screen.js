import React, {useCallback, useContext, useEffect, useState} from 'react';
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
import LanguageContext from '../../contexts/LanguageContext';
import useTranslation from '../../hooks/useTranslations';

const Stage1Screen = () => {
  const [stageModalVisible, setStageModalVisible] = useState(false);
  const [step1, setStep1] = useState();
  const [modalOptions, setModalOptions] = useState([]);
  const [nextOption, setNextOption] = useState();
  const {activeLanguage} = useContext(LanguageContext);
  const {t} = useTranslation();

  const [optionList, setOptionList] = useState({
    wande: [
      {
        label: 'wande.metallstanderwande.label',
        breadcrumb: 'wande.metallstanderwande.breadcrumb',
        value: 'metallstanderwande',
        optionList: [
          {
            label: 'wande.metallstanderwande.standard.label',
            breadcrumb: 'wande.metallstanderwande.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
          {
            label: 'wande.metallstanderwande.nassraum.label',
            breadcrumb: 'wande.metallstanderwande.nassraum.breadcrumb',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'wande.metallstanderwande.strahlenschutz.label',
            breadcrumb: 'wande.metallstanderwande.strahlenschutz.breadcrumb',
            value: 'strahlenschutz',
            chosen: false,
          },
          {
            label: 'wande.metallstanderwande.einbruchhemmung.label',
            breadcrumb: 'wande.metallstanderwande.einbruchhemmung.breadcrumb',
            value: 'einbruchhemmung',
            chosen: false,
          },
        ],
      },
      {
        label: 'wande.brandwande.label',
        breadcrumb: 'wande.brandwande.breadcrumb',
        value: 'brandwande',
        optionList: [
          {
            label: 'wande.brandwande.standard.label',
            breadcrumb: 'wande.brandwande.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
        ],
      },
      {
        label: 'wande.holzstanderwande.label',
        breadcrumb: 'wande.holzstanderwande.breadcrumb',
        value: 'holzstanderwande',
        optionList: [
          {
            label: 'wande.holzstanderwande.standard.label',
            breadcrumb: 'wande.holzstanderwande.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
          {
            label: 'wande.holzstanderwande.ausenwand.label',
            breadcrumb: 'wande.holzstanderwande.ausenwand.breadcrumb',
            value: 'ausenwand',
            chosen: false,
          },
        ],
      },
      {
        label: 'wande.schachtwandeVorsatzschalen.label',
        breadcrumb: 'wande.schachtwandeVorsatzschalen.breadcrumb',
        value: 'schachtwande-vorsatzschalen',
        optionList: [
          {
            label: 'wande.schachtwandeVorsatzschalen.standard.label',
            breadcrumb: 'wande.schachtwandeVorsatzschalen.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
          {
            label: 'wande.schachtwandeVorsatzschalen.nassraum.label',
            breadcrumb: 'wande.schachtwandeVorsatzschalen.nassraum.breadcrumb',
            value: 'nassraum',
            chosen: false,
          },
          {
            label: 'wande.schachtwandeVorsatzschalen.strahlenschutz.label',
            breadcrumb:
              'wande.schachtwandeVorsatzschalen.strahlenschutz.breadcrumb',
            value: 'strahlenschutz',
            chosen: false,
          },
        ],
      },
      {
        label: 'wande.trockenputz.label',
        breadcrumb: 'wande.trockenputz.breadcrumb',
        value: 'trockenputz',
        optionList: [
          {
            label: 'wande.trockenputz.standard.label',
            breadcrumb: 'wande.trockenputz.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
          {
            label: 'wande.trockenputz.nassraum.label',
            breadcrumb: 'wande.trockenputz.nassraum.breadcrumb',
            value: 'nassraum',
            chosen: false,
          },
        ],
      },
    ],
    decken: [
      {
        label: 'decken.freitragendeUnterdecken.label',
        breadcrumb: 'decken.freitragendeUnterdecken.breadcrumb',
        value: 'freitragende-unterdecken',
        optionList: [
          {
            label: 'decken.freitragendeUnterdecken.standard.label',
            breadcrumb: 'decken.freitragendeUnterdecken.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
        ],
      },
      {
        label: 'decken.unterdeckenUndDeckenbekleidungen.label',
        breadcrumb: 'decken.unterdeckenUndDeckenbekleidungen.breadcrumb',
        value: 'unterdecken-und-deckenbekleidungen',
        optionList: [
          {
            label: 'decken.unterdeckenUndDeckenbekleidungen.standard.label',
            breadcrumb:
              'decken.unterdeckenUndDeckenbekleidungen.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
          {
            label: 'decken.unterdeckenUndDeckenbekleidungen.nassraum.label',
            breadcrumb:
              'decken.unterdeckenUndDeckenbekleidungen.nassraum.breadcrumb',
            value: 'nassraum',
            chosen: false,
          },
          {
            label:
              'decken.unterdeckenUndDeckenbekleidungen.strahlenschutz.label',
            breadcrumb:
              'decken.unterdeckenUndDeckenbekleidungen.strahlenschutz.breadcrumb',
            value: 'strahlenschutz',
            chosen: false,
          },
          {
            label: 'decken.unterdeckenUndDeckenbekleidungen.ausendecken.label',
            breadcrumb:
              'decken.unterdeckenUndDeckenbekleidungen.ausendecken.breadcrumb',
            value: 'ausendecken',
            chosen: false,
          },
        ],
      },
      {
        label: 'decken.ertuchtigungMassivdecken.label',
        breadcrumb: 'decken.ertuchtigungMassivdecken.breadcrumb',
        value: 'ertuchtigung-massivdecken',
        optionList: [
          {
            label: 'decken.ertuchtigungMassivdecken.standard.label',
            breadcrumb: 'decken.ertuchtigungMassivdecken.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
          {
            label: 'decken.ertuchtigungMassivdecken.nassraum.label',
            breadcrumb: 'decken.ertuchtigungMassivdecken.nassraum.breadcrumb',
            value: 'nassraum',
            chosen: false,
          },
        ],
      },
      {
        label: 'decken.ertuchtigungHolzbalkendecken.label',
        breadcrumb: 'decken.ertuchtigungHolzbalkendecken.breadcrumb',
        value: 'ertuchtigung-holzbalkendecken',
        optionList: [
          {
            label: 'decken.ertuchtigungHolzbalkendecken.standard.label',
            breadcrumb:
              'decken.ertuchtigungHolzbalkendecken.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
        ],
      },
      {
        label: 'decken.trapezblechdecken.label',
        breadcrumb: 'decken.trapezblechdecken.breadcrumb',
        value: 'trapezblechdecken',
        optionList: [
          {
            label: 'decken.trapezblechdecken.standard.label',
            breadcrumb: 'decken.trapezblechdecken.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
        ],
      },
    ],
    dacher: [
      {
        label: 'dacher.dacher.label',
        breadcrumb: 'dacher.dacher.breadcrumb',
        value: 'dacher',
        optionList: [
          {
            label: 'dacher.dacher.standard.label',
            breadcrumb: 'dacher.dacher.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
        ],
      },
      {
        label: 'dacher.trapezblechdacherErtuchtigungTrapezblechdacher.label',
        breadcrumb:
          'dacher.trapezblechdacherErtuchtigungTrapezblechdacher.breadcrumb',
        value: 'trapezblechdacher-ertuchtigung-trapezblechdacher',
        optionList: [
          {
            label:
              'dacher.trapezblechdacherErtuchtigungTrapezblechdacher.standard.label',
            breadcrumb:
              'dacher.trapezblechdacherErtuchtigungTrapezblechdacher.standard.breadcrumb',
            value: 'standard',
            chosen: false,
          },
          // {
          //   label: 'Feuchtraum',
          //   breadcrumb: 'Feuchtraum',
          //   value: 'feuchtraum',
          //   chosen: false,
          // },
        ],
      },
    ],
    stutzentrager: [
      {
        label: 'stutzen.stahl.label',
        breadcrumb: 'stutzen.stahl.breadcrumb',
        value: 'stahl',
        optionList: [
          {
            label: 'stutzen.stahl.stahlstutze.label',
            breadcrumb: 'stutzen.stahl.stahlstutze.breadcrumb',
            value: 'stahlstutze',
            chosen: false,
          },
          {
            label: 'stutzen.stahl.stahltrager.label',
            breadcrumb: 'stutzen.stahl.stahltrager.breadcrumb',
            value: 'stahltrager',
            chosen: false,
          },
        ],
      },
      {
        label: 'stutzen.holz.label',
        breadcrumb: 'stutzen.holz.breadcrumb',
        value: 'holz',
        optionList: [
          {
            label: 'stutzen.holz.holzstutze.label',
            breadcrumb: 'stutzen.holz.holzstutze.breadcrumb',
            value: 'holzstutze',
            chosen: false,
          },
          {
            label: 'stutzen.holz.holzbalken.label',
            breadcrumb: 'stutzen.holz.holzbalken.breadcrumb',
            value: 'holzbalken',
            chosen: false,
          },
        ],
      },
    ],
    kabelkanale: [
      {
        label: 'kabelkanale.eKanale.label',
        breadcrumb: 'kabelkanale.eKanale.breadcrumb',
        value: 'e-kanale',
      },
      {
        label: 'kabelkanale.iKanale.label',
        breadcrumb: 'kabelkanale.iKanale.breadcrumb',
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

    if (option.optionList === undefined) {
      navigation.navigate('Stage2', {
        system: route.params.system,
        step2: option,
        step3: {},
      });
    } else if (option.optionList.length === 1) {
      navigation.navigate('Stage2', {
        system: route.params.system,
        step2: option,
        step3: option.optionList[0],
      });
    } else {
      setModalOptions(option);
      setStageModalVisible(true);
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
              text={t(item.label)}
              onPress={() => goNext(item)}
              key={index}
            />
          );
        })}
    </CustomBackground>
  );
};

export default Stage1Screen;
