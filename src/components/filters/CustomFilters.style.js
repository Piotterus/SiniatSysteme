import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  mainView: {},
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 20,
  },
  selectedView: {
    paddingLeft: 10,
  },
});

export default styles;
