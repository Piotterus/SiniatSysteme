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
      paddingTop: 20,
      paddingLeft: 20,
      paddingBottom: 100,
    },
  },
});

export default styles;
