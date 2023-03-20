import React, {createContext, useState} from 'react';

const LanguageContext = createContext();

export const LanguageProvider = props => {
  const [languageList, setLanguageList] = useState([
    {
      label: 'polski',
      value: 'pl',
    },
    {
      label: 'niemiecki',
      value: 'de',
    },
    {
      label: 'chorwacki',
      value: 'hr',
    },
    {
      label: 'rumuński',
      value: 'ru',
    },
    {
      label: 'czeski',
      value: 'cz',
    },
  ]);
  const [activeLanguageCode, setActiveLanguageCode] = useState('pl');

  return (
    <LanguageContext.Provider
      value={{
        languageList,
        setLanguageList,
        activeLanguageCode,
        setActiveLanguageCode,
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
