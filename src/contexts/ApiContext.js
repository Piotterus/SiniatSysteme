import React, {createContext, useState} from 'react';

const ApiContext = createContext();

export const ApiProvider = props => {
  const [apiUrl, setApiUrl] = useState(() => {
    if (__DEV__) {
      return 'https://siniat.verbum.com.pl/api/';
    } else {
      return 'https://siniat.verbum.com.pl/api/';
    }
  });
  const [apiKey, setApiKey] = useState(
    '372a6e7dc6b1783bcfd58b0eaa0e74c96311f7b0', //ZMIENIĆ
  );

  return (
    <ApiContext.Provider
      value={{
        apiUrl,
        apiKey,
      }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
