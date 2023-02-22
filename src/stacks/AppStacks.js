import React, {useEffect, useContext} from 'react';
import AuthContext from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/splash/SplashScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Activity from '../components/activity/Activity';
import StackNav from './StackNav';
import {ErrorModal} from '../components/modals/CustomModals';
import TutorialContext from '../contexts/TutorialContext';
import TutorialScreen from '../screens/tutorial/TutorialScreen';
// import {Alert} from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import {useState} from '.';

const AppStacks = () => {
  const {
    isSettingUp,
    setIsSettingUp,
    isLoggedIn,
    isLoading,
    setToken,
    setIsLoggedIn,
    login,
    logout,
    fcmToken,
    setFcmToken,
  } = useContext(AuthContext);
  const {fetchData} = useFetch();
  const {showTutorial} = useContext(TutorialContext);
  console.log('ShowTutorial: ' + showTutorial);

  // useEffect(() => {
  //   requestUserPermission();
  //   messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //     Alert.alert(
  //       remoteMessage.notification.title,
  //       remoteMessage.notification.body,
  //     );
  //   });
  //   messaging()
  //     .getInitialNotification()
  //     .then(remoteMessage => {
  //       if (remoteMessage) {
  //         console.log(
  //           'Notification caused app to open from quit state:',
  //           remoteMessage.notification,
  //         );
  //         Alert.alert(
  //           remoteMessage.notification.title,
  //           remoteMessage.notification.body,
  //         );
  //       }
  //     });
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from foreground state:',
  //       remoteMessage.notification,
  //     );
  //     Alert.alert(
  //       remoteMessage.notification.title,
  //       remoteMessage.notification.body,
  //     );
  //   });
  //
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  //
  // const requestUserPermission = async () => {
  //   const authorizationStatus = await messaging().requestPermission();
  //
  //   if (authorizationStatus) {
  //     console.log('Permission status:', authorizationStatus);
  //     getFCMToken();
  //   }
  // };
  //
  // const getFCMToken = () => {
  //   messaging()
  //     .getToken()
  //     .then(fcmToken => {
  //       if (fcmToken) {
  //         setFcmToken(fcmToken);
  //       }
  //     })
  //     .catch(error => {});
  // };

  useEffect(() => {
    const setup = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      const token = await AsyncStorage.getItem('token');

      // console.log(`isLoggedIn: ${isLoggedIn}`);
      if (isLoggedIn !== '1') {
        setIsSettingUp(false);
      } else {
        // console.log('Ustawienie tokena: ' + token);
        // await setToken(token);
        // await setIsLoggedIn(true);
        await setIsSettingUp(false);
        login(token);
      }
    };
    setup();
  }, []);

  if (isSettingUp) {
    return <SplashScreen />;
  }

  if (showTutorial === '1') {
    return (
      <SafeAreaProvider>
        <TutorialScreen />
      </SafeAreaProvider>
    );
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <>
          <NavigationContainer>
            <StackNav />
          </NavigationContainer>
          <ErrorModal />
        </>
        {isLoading && <Activity />}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppStacks;
