import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [languageList, setLanguageList] = useState([
    // {
    //   label: 'polski',
    //   value: 'pl',
    // },
    // {
    //   label: 'niemiecki',
    //   value: 'de',
    // },
    // {
    //   label: 'chorwacki',
    //   value: 'hr',
    // },
    // {
    //   label: 'rumuński',
    //   value: 'ru',
    // },
    // {
    //   label: 'czeski',
    //   value: 'cz',
    // },
  ]);
  const [activeLanguageCode, setActiveLanguageCode] = useState('de');
  const [activeLanguage, setActiveLanguage] = useState();

  // useEffect(() => {
  //   console.log('Async Active:anguageCode');
  //   AsyncStorage.setItem('activeLanguageCode', activeLanguageCode);
  // }, [activeLanguageCode]);

  useEffect(() => {
    const newLanguage = async () => {
      let language = languageList.find((item, index) => {
        return item.code === activeLanguageCode;
      });
      console.log('Before ChosenLanguage');
      console.log(activeLanguageCode);
      console.log(language);
      if (language === undefined) {
        return false;
      }
      let chosenLanguage = {
        name: language.name,
        code: language.code,
        translations: language.translations,
      };

      let response = await fetch(chosenLanguage.translations, {
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      let responseJson = await response.json();
      chosenLanguage.translations = responseJson;
      if (activeLanguage?.translations !== chosenLanguage?.translations) {
        // console.log('IF');
        setActiveLanguage(chosenLanguage);
      }

      // return language;
    };
    // console.log('New Language');
    newLanguage().catch(console.error);
    // setActiveLanguage(newLanguage());
  }, [languageList, activeLanguageCode]);
  console.log(activeLanguage);
  return (
    <LanguageContext.Provider
      value={{
        languageList,
        setLanguageList,
        activeLanguageCode,
        setActiveLanguageCode,
        activeLanguage,
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
