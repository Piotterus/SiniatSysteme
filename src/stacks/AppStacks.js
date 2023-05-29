import React, {useEffect, useContext, useState, useRef} from 'react';
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
import UpdateAppScreen from '../screens/updateApp/UpdateAppScreen';
import {
  getBrand,
  getDeviceName,
  getDeviceNameSync,
  getFirstInstallTime,
  getFirstInstallTimeSync,
  getIpAddress,
  getIpAddressSync,
  getLastUpdateTimeSync,
  getSystemName,
  getSystemVersion,
  getUniqueId,
  getUniqueIdSync,
  getVersion,
} from 'react-native-device-info';
import DrawerNav from './DrawerNav';
import LanguageContext from '../contexts/LanguageContext';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import analytics from '@react-native-firebase/analytics';
// import {useState} from '.';

const AppStacks = () => {
  const {isSettingUp, setIsSettingUp, isLoading, login, fcmToken, setFcmToken} =
    useContext(AuthContext);
  const {fetchData} = useFetch();
  const {showTutorial} = useContext(TutorialContext);
  const [updateRequired, setUpdateRequired] = useState(false);
  const {activeLanguage, setLanguageList, languageList, setActiveLanguageCode} =
    useContext(LanguageContext);
  const routeNameRef = useRef();
  const navigationRef = useRef();
  console.log('ShowTutorial: ' + showTutorial);

  useEffect(() => {
    requestUserPermission();
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          Alert.alert(
            remoteMessage.notification.title,
            remoteMessage.notification.body,
          );
        }
      });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log(
        'Notification caused app to open from foreground state:',
        remoteMessage.notification,
      );
      Alert.alert(
        remoteMessage.notification.title,
        remoteMessage.notification.body,
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();

    if (authorizationStatus) {
      console.log('Permission status:', authorizationStatus);
      getFCMToken();
    }
  };

  const getFCMToken = () => {
    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          setFcmToken(fcmToken);
          let postData = {
            deviceId: getUniqueIdSync(),
            fcmToken: fcmToken,
            appVersion: getVersion(),
            systemName: getSystemName(),
            systemVersion: getSystemVersion(),
            deviceBrand: getBrand(),
            deviceName: getDeviceNameSync(),
            ipAddress: getIpAddressSync(),
            installTime: getFirstInstallTimeSync(),
            updateTime: getLastUpdateTimeSync(),
          };
          let response = fetchData(
            res => {
              console.log('Odpowiedź od Device: ', res);
            },
            'system/device',
            null,
            postData,
          );
        }
      })
      .catch(error => {});
  };

  // console.log('FCMToken: ', fcmToken);
  // console.log('UniqueId: ', getUniqueIdSync());
  // console.log('SystemName: ', getSystemName());
  // console.log('SystemVersion: ', getSystemVersion());
  // console.log('Brand: ', getBrand());
  // console.log('DeviceName: ', getDeviceNameSync());
  // console.log('IPAddress: ', getIpAddressSync());
  // console.log('1st Install: ', getFirstInstallTimeSync());
  // console.log('Update Time: ', getLastUpdateTimeSync());

  useEffect(() => {
    const setup = async () => {
      const getData = {
        appVersion: getVersion(),
      };
      let response = fetchData(
        res => {
          console.log('CheckVersion');
          console.log(res);
          if (res.data.update === 'yes') {
            setUpdateRequired(true);
          } else {
            setUpdateRequired(false);
          }
        },
        'system/checkVersion',
        getData,
        null,
      );
      const responseFetch = await fetchData(
        async res => {
          setLanguageList(res.data.list);
          const code = await AsyncStorage.getItem('activeLanguageCode');
          console.log('GetFromAsyncStorage: ', code);
          if (code !== null) {
            setActiveLanguageCode(code);
          }
        },
        'languageList',
        null,
        null,
      );
      await setIsSettingUp(false);
    };
    setup();
  }, []);

  if (isSettingUp) {
    return <SplashScreen />;
  }

  if (updateRequired) {
    return (
      <SafeAreaProvider>
        <UpdateAppScreen />
      </SafeAreaProvider>
    );
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
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              routeNameRef.current =
                navigationRef.current.getCurrentRoute().name;
            }}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName =
                navigationRef.current.getCurrentRoute().name;

              if (previousRouteName !== currentRouteName) {
                await analytics().logScreenView({
                  screen_name: currentRouteName,
                  screen_class: currentRouteName,
                });
              }
              routeNameRef.current = currentRouteName;
            }}>
            <DrawerNav />
          </NavigationContainer>
          <ErrorModal />
        </>
        {isLoading && <Activity />}
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default AppStacks;
