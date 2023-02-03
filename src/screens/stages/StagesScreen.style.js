import {StyleSheet} from 'react-native';
import {ScreenWidth} from '@rneui/base';
import colors from '../../assets/colors';
// import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  stage2: {
    breadcrumbsView: {
      width: '100%',
      paddingVertical: 10,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.grey,
    },
    filterView: {
      width: '100%',
      paddingVertical: 20,
      paddingLeft: 20,
    },
  },
});

export default styles;
