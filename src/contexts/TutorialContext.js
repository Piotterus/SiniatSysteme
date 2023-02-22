import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TutorialContext = createContext();

export const TutorialProvider = props => {
  // const [showTutorial, setShowTutorial] = useAsyncStorage('showTutorial', '1');
  const [showTutorial, setShowTutorial] = useState('0');

  useEffect(() => {
    const getTutorialFromStorage = async () => {
      const itemValue = await AsyncStorage.getItem('showTutorial');
      console.log('Value Start: ' + itemValue);
      if (itemValue !== null) {
        console.log('Not NULL');
        setShowTutorial(itemValue);
        return;
      }
      console.log('Null');
      setShowTutorial('1');
    };
    getTutorialFromStorage();
  }, []);

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
