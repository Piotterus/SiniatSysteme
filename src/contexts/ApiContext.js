import React, {createContext, useState} from 'react';

const ApiContext = createContext();

export const ApiProvider = props => {
  const [apiUrl, setApiUrl] = useState(() => {
    if (__DEV__) {
      return 'https://siniatapp-dev.verbum.com.pl/api/';
    } else {
      return 'https://systemselektor.siniat.de/api/';
      // return 'https://siniatapp-dev.verbum.com.pl/api/';
    }
  });
  const [siteUrl, setSiteUrl] = useState(() => {
    if (__DEV__) {
      return 'https://siniatapp-dev.verbum.com.pl/';
    } else {
      return 'https://systemselektor.siniat.de/';
      // return 'https://siniatapp-dev.verbum.com.pl/';
    }
  });
  const [apiKey, setApiKey] = useState(
    's079zfx2o3q484tye93li9hl8dn5m37fb02uo5sr', //ZMIENIĆ
  );

  return (
    <ApiContext.Provider
      value={{
        apiUrl,
        apiKey,
        siteUrl,
      }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
