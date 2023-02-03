import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {ScreenWidth} from '@rneui/base';

const styles = StyleSheet.create({
  rowView: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: ScreenWidth,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  textInput: {
    borderWidth: 2,
    borderColor: colors.cultured,
    width: '100%',
    paddingVertical: 10,
  },
});

export default styles;
