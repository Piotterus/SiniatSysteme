/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TutorialScreen from './src/screens/tutorial/TutorialScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import Stage1Screen from './src/screens/stages/Stage1Screen';
import Stage2Screen from './src/screens/stages/Stage2Screen';
import Stage3Screen from './src/screens/stages/Stage3Screen';
import SystemListScreen from './src/screens/systems/SystemListScreen';
import SystemItemScreen from './src/screens/systems/SystemItemScreen';
import {AuthProvider} from './src/contexts/AuthContext';
import {ErrorProvider} from './src/contexts/ErrorContext';
import {ApiProvider} from './src/contexts/ApiContext';
import {UserProvider} from './src/contexts/UserContext';
import AppStacks from './src/stacks/AppStacks';
import {SystemProvider} from './src/contexts/SystemContext';
import {TutorialProvider} from './src/contexts/TutorialContext';
// import {LanguageProvider} from './src/contexts/LanguageContext';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    /*<LanguageProvider>*/
    <AuthProvider>
      <ErrorProvider>
        <ApiProvider>
          <UserProvider>
            <SystemProvider>
              <TutorialProvider>
                <AppStacks />
              </TutorialProvider>
            </SystemProvider>
          </UserProvider>
        </ApiProvider>
      </ErrorProvider>
    </AuthProvider>
    /*</LanguageProvider>*/
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
