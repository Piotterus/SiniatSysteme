import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SiniatHeader} from '../../components/headers/CustomHeaders';

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/*<Image*/}
      {/*  source={icons.background.splash}*/}
      {/*  style={{*/}
      {/*    position: 'absolute',*/}
      {/*    top: 0,*/}
      {/*    left: 0,*/}
      {/*    width: '100%',*/}
      {/*    height: '100%',*/}
      {/*  }}*/}
      {/*  resizeMode={'cover'}*/}
      {/*/>*/}
      <SiniatHeader />
    </SafeAreaView>
  );
};

export default SplashScreen;
