import React, {useContext} from 'react';
import LanguageContext from '../contexts/LanguageContext';

export default function useTranslation() {
  const {activeLanguage} = useContext(LanguageContext);

  const translate = key => {
    if (key === undefined) return null;
    const keys = key.split('.');

    return getNestedTranslation(activeLanguage, keys) ?? key;
  };

  return {
    t: translate,
  };
}

function getNestedTranslation(language, keys) {
  // console.log('Keys: ', keys);
  return keys.reduce((obj, key) => {
    // console.log('Iteracja: ', obj, key);
    return obj?.[key];
  }, language?.translations);
}
