import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = props => {
  const [token, setToken] = useState('');
  const [isSettingUp, setIsSettingUp] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [fcmToken, setFcmToken] = useState('');

  // useEffect(() => {
  //   const login = async () => {
  //     await AsyncStorage.setItem('isLoggedIn', '1');
  //     await AsyncStorage.setItem('token', token);
  //   };
  //   const logout = async () => {
  //     await AsyncStorage.setItem('isLoggedIn', '0');
  //     await AsyncStorage.setItem('token', '');
  //     setToken('');
  //   };
  //   if (rememberMe) {
  //     console.log(`RememberMe: ${rememberMe}`);
  //     console.log(`isLoggedIn: ${isLoggedIn}`);
  //     console.log(JSON.stringify(isLoggedIn));
  //     if (isLoggedIn) {
  //       console.log('Login');
  //       login();
  //     } else {
  //       console.log('Logout');
  //       logout();
  //     }
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    console.log(`TOKEN: ${token}`);
  }, [token]);

  const logout = async () => {
    // if (rememberMe) {
    await AsyncStorage.setItem('isLoggedIn', '0');
    await AsyncStorage.setItem('token', '');
    // }
    setToken('');
    setIsLoggedIn(false);
  };

  const login = async token => {
    // console.log(`RememberMe: ${rememberMe}`);
    if (rememberMe) {
      await AsyncStorage.setItem('isLoggedIn', '1');
      await AsyncStorage.setItem('token', token);
    }
    setToken(token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
        isSettingUp,
        setIsSettingUp,
        isLoading,
        setIsLoading,
        isLoggedIn,
        setIsLoggedIn,
        rememberMe,
        setRememberMe,
        fcmToken,
        setFcmToken,
        login,
        logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
