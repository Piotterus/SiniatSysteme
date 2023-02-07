import React, {createContext, useState} from 'react';

const ErrorContext = createContext();

export const ErrorProvider = props => {
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => {
    setErrorModalVisible(false);
    setError(null);
  };

  const showError = error => {
    setError(error);
    setErrorModalVisible(true);
  };

  return (
    <ErrorContext.Provider
      value={{
        errorModalVisible,
        setErrorModalVisible,
        error,
        setError,
        clearError,
        showError,
      }}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
