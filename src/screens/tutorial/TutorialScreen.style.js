import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  whiteView: {
    width: ScreenWidth,
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    top: -1,
    paddingTop: 20,
  },
  textView: {
    alignItems: 'center',
    width: '70%',
  },
  centerText: {
    textAlign: 'center',
  },
  pinkText: {
    color: colors.flirt,
    marginTop: 10,
  },
  button: {
    marginTop: 50,
    marginBottom: 10,
  },
  checkBoxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleText: {
    color: colors.wenge,
    textDecorationLine: 'underline',
  },
});

export default styles;
