import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  smallText: {
    fontSize: 12,
    color: colors.grey,
    lineHeight: 18,
  },
  boldText: {
    fontSize: 13,
    color: colors.grey,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  pinkHeaderText: {
    fontSize: 20,
    color: colors.violet,
    textTransform: 'uppercase',
  },
  mainMenuText: {
    fontSize: 16,
    color: colors.white,
  },
  whiteText: {
    fontSize: 14,
    color: colors.white,
  },
});

export default styles;
