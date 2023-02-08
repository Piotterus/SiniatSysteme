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
    <View style={styles.circle.mainView}>
      <Ring />
      <Text style={styles.circle.text}>{props.text}</Text>
    </View>
  );
};

const StageNavigation = () => {
  return (
    <View style={styles.mainView}>
      <NavigationCircle text={'1'} />
      <NavigationCircle text={'2'} />
      <NavigationCircle text={'3'} />
    </View>
  );
};

export default StageNavigation;
