import React, {createContext, useState} from 'react';

const ApiContext = createContext();

export const ApiProvider = props => {
  const [apiUrl, setApiUrl] = useState(() => {
    if (__DEV__) {
      return 'https://systemselektor.siniat.de/api/';
    } else {
      return 'https://systemselektor.siniat.de/api/';
    }
  });
  const [siteUrl, setSiteUrl] = useState(() => {
    if (__DEV__) {
      return 'https://systemselektor.siniat.de/';
    } else {
      return 'https://systemselektor.siniat.de/';
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
