import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/home/HomeScreen';
import Stage1Screen from '../screens/stages/Stage1Screen';
import Stage2Screen from '../screens/stages/Stage2Screen';
import Stage3Screen from '../screens/stages/Stage3Screen';
import SystemListScreen from '../screens/systems/SystemListScreen';
import SystemItemScreen from '../screens/systems/SystemItemScreen';
import AboutScreen from '../screens/singlePage/AboutScreen';
import ContactScreen from '../screens/singlePage/ContactScreen';
import PallasScreen from '../screens/singlePage/PallasScreen';
import PrivacyScreen from '../screens/singlePage/PrivacyScreen';
import CustomDrawer from '../components/drawer/CustomDrawer';
import EasyboardScreen from '../screens/singlePage/EasyboardScreen';
import CalculatorScreen from '../screens/calculator/CalculatorScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}
      defaultStatus={'closed'}
      backBehavior={'history'}
      drawerContent={props => <CustomDrawer {...props} />}>
      <>
        <Drawer.Screen name={'Home'}>
          {props => <HomeScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Stage1'}>
          {props => <Stage1Screen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Stage2'}>
          {props => <Stage2Screen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Stage3'}>
          {props => <Stage3Screen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'SystemList'}>
          {props => <SystemListScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'SystemItem'}>
          {props => <SystemItemScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'About'}>
          {props => <AboutScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Contact'}>
          {props => <ContactScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Privacy'}>
          {props => <PrivacyScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Easyboard'}>
          {props => <EasyboardScreen {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name={'Calculator'}>
          {props => <CalculatorScreen {...props} />}
        </Drawer.Screen>
      </>
    </Drawer.Navigator>
  );
};

export default DrawerNav;
