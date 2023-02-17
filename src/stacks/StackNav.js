import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import Stage1Screen from '../screens/stages/Stage1Screen';
import Stage2Screen from '../screens/stages/Stage2Screen';
import Stage3Screen from '../screens/stages/Stage3Screen';
import SystemListScreen from '../screens/systems/SystemListScreen';
import SystemItemScreen from '../screens/systems/SystemItemScreen';
import TutorialScreen from '../screens/tutorial/TutorialScreen';
import AboutScreen from '../screens/singlePage/AboutScreen';
import ContactScreen from '../screens/singlePage/ContactScreen';
import PallasScreen from '../screens/singlePage/PallasScreen';
import PrivacyScreen from '../screens/singlePage/PrivacyScreen';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <>
        <Stack.Screen
          name={'Home'}
          option={{
            title: 'Home',

            gestureEnabled: false,
          }}>
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Stage1'}
          option={{
            title: 'Stage1',

            gestureEnabled: false,
          }}>
          {props => <Stage1Screen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Stage2'}
          option={{
            title: 'Stage2',

            gestureEnabled: false,
          }}>
          {props => <Stage2Screen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Stage3'}
          option={{
            title: 'Stage3',

            gestureEnabled: false,
          }}>
          {props => <Stage3Screen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'SystemList'}
          option={{
            title: 'SystemList',

            gestureEnabled: false,
          }}>
          {props => <SystemListScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'SystemItem'}
          option={{
            title: 'SystemItem',

            gestureEnabled: false,
          }}>
          {props => <SystemItemScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Tutorial'}
          option={{
            title: 'Tutorial',

            gestureEnabled: false,
          }}>
          {props => <TutorialScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'About'}
          option={{
            gestureEnabled: false,
          }}>
          {props => <AboutScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Contact'}
          option={{
            gestureEnabled: false,
          }}>
          {props => <ContactScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Pallas'}
          option={{
            gestureEnabled: false,
          }}>
          {props => <PallasScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name={'Privacy'}
          option={{
            gestureEnabled: false,
          }}>
          {props => <PrivacyScreen {...props} />}
        </Stack.Screen>
      </>
    </Stack.Navigator>
  );
};

export default StackNav;
