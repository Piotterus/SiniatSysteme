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
  backArrow: {
    position: 'absolute',
    left: 10,
    padding: 10,
  },
  systemHeader: {
    width: ScreenWidth,
    alignItems: 'center',
  },
  systemText: {
    position: 'absolute',
    bottom: 10,
    width: '80%',
    textAlign: 'center',
  },
});

export default styles;
