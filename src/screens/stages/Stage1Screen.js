import React from 'react';
import CustomBackground from '../../components/backgrounds/CustomBackground';
import {Image, Text, View} from 'react-native';
import icons from '../../assets/icons';
import colors from '../../assets/colors';
import {ScreenWidth} from '@rneui/base';
import StageNavigation from '../../components/stageNavigation/StageNavigation';

const Stage1Screen = () => {
  return (
    <CustomBackground header={'siniat'}>
      <View style={{width: ScreenWidth}}>
        <Image source={icons.stage.stutzen} />
      </View>
      <StageNavigation />
    </CustomBackground>
  );
};

export default Stage1Screen;
