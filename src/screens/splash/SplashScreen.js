import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native';
import icons from '../../assets/icons';
import {ScreenHeight, ScreenWidth} from '@rneui/base';

const SplashScreen = () => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
      <Image
        source={icons.splash}
        style={{height: ScreenHeight}}
        resizeMode={'contain'}
      />
      {/*<SiniatHeader />*/}
    </SafeAreaView>
  );
};

export default SplashScreen;
