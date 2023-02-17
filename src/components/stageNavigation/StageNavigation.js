import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './StageNavigation.style';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useRoute} from '@react-navigation/native';

const Ring = props => {
  const ring = useSharedValue(1);
  const borderWidth = useSharedValue(0);
  const style = useAnimatedStyle(() => {
    return {
      opacity: 2 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 1]),
        },
      ],
      // borderWidth: interpolate(borderWidth.value, [0, 1], [0, 1]),
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      0,
      withRepeat(
        withTiming(1.2, {
          duration: 2000,
        }),
        -1,
      ),
    );
    // borderWidth.value = withDelay(
    //   0,
    //   withRepeat(
    //     withTiming(2, {
    //       duration: 2000,
    //     }),
    //     -1,
    //   ),
    // );
  }, []);

  return (
    <View style={styles.ring.mainView}>
      <Animated.View style={[styles.ring.animatedRing, style]} />
    </View>
  );
};

const NavigationCircle = props => {
  return (
    <View
      style={[
        styles.circle.mainView,
        !props.active ? styles.circle.inactive : '',
      ]}>
      {props.ring && <Ring />}
      <Text style={styles.circle.text}>{props.text}</Text>
    </View>
  );
};

const StageNavigation = () => {
  const route = useRoute();
  return (
    <View style={styles.mainView}>
      <NavigationCircle
        text={'1'}
        ring={route.name === 'Stage1'}
        active={true}
      />
      <NavigationCircle
        text={'2'}
        ring={route.name === 'Stage2'}
        active={route.name === 'Stage2' || route.name === 'Stage3'}
      />
      <NavigationCircle
        text={'3'}
        ring={route.name === 'Stage3'}
        active={route.name === 'Stage3'}
      />
    </View>
  );
};

export default StageNavigation;
