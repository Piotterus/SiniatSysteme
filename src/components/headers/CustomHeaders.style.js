import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  mainView: {
    height: 70,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    width: ScreenWidth,
  },
});

export default styles;
