import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  background: {
    mainView: {
      flex: 1,
      alignItems: 'center',
      width: '100%',
      backgroundColor: colors.white,
    },
    scrollView: {
      width: '100%',
    },
    scrollViewContainer: {
      alignItems: 'center',
      // paddingVertical: 20,
      paddingHorizontal: 20,
      flexGrow: 1,
      backgroundColor: colors.cultured,
    },
  },
});

export default styles;
