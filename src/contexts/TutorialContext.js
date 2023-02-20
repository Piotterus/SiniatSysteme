import React, {createContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TutorialContext = createContext();

export const TutorialProvider = props => {
  // const [showTutorial, setShowTutorial] = useAsyncStorage('showTutorial', '1');
  const [showTutorial, setShowTutorial] = useState(async () => {
    const itemValue = await AsyncStorage.getItem('showTutorial');
    console.log('Value Start: ' + itemValue);
    if (itemValue !== null) {
      return itemValue;
    }
    return '1';
  });

  return (
    <TutorialContext.Provider
      value={{
        showTutorial,
        setShowTutorial,
      }}>
      {props.children}
    </TutorialContext.Provider>
  );
};

export default TutorialContext;
