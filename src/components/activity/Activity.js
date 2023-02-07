import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import ActivityStyles from './Activity.style';
import colors from '../../assets/colors';

const Activity = props => {
  return (
    <View style={ActivityStyles.mainView}>
      <ActivityIndicator size={70} color={colors.wenge} />
    </View>
  );
};

export default Activity;
